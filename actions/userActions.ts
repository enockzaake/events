"use server";
import { createClient } from "@/lib/supabase/server";
import { EventWithTickets, OrderType } from "@/types";

import { RequestPayment } from "@/lib/payments/mpesa";

export async function getEvents() {
  const supabase = createClient();
  const { data: events, error } = await supabase.from("events").select("*");
  return events;
}

export async function getEventDetails(id: string): Promise<EventWithTickets> {
  const supabase = createClient();
  const { data: event, error } = await supabase
    .from("events")
    .select(`*,tickets(*)`)
    .eq("id", id)
    .single();

  return JSON.parse(JSON.stringify(event));
}

export async function createOrder(order: OrderType) {
  // Account for Authenticated user or Anonymous use

  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const userID = user.data.user?.id;
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        profile_id: userID,
        status: "PENDING",
        event_id: order.eventId,
      },
    ])
    .select()
    .single();

  const finalOrderTickets = order.orderTickets.map((ticket) => {
    return { ...ticket, order_id: data.id };
  });

  // TRY CHECKING HOW TO DO TRANSACTIONS IN CASE ONE EXECUTION FAILS REVERSE THEN ROLLBACK
  if (data) {
    const { data, error } = await supabase
      .from("order_tickets")
      .insert(finalOrderTickets)
      .select();
  }
}

// Get order along with the associated tickets
export async function getOrderHistory() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const userID = user.data.user?.id;
  const { data, error } = await supabase
    .from("orders")
    .select(
      `*,events(name),order_tickets(ticket_id,order_id,quantity,tickets(name,price))`
    )
    .eq("profile_id", userID); //TODO: Use RLS

  return { orders: data, error: error?.message };
}

export async function updateAcccountDetails() {}

export async function makePayment(phoneNumber: string, order_id: string) {
  const res = await RequestPayment(phoneNumber, order_id);
  console.log("PAYMENT RESPONSE:", res);
}
