"use server";
import { createClient } from "@/lib/supabase/server";
import { OrderType } from "@/types";

import { RequestPayment } from "@/lib/payments/mpesa.mjs";

export async function Login(form: FormData) {
  console.log("EMAIL:", form.get("email"));
  console.log("PASSWORD:", form.get("password"));
  return { data: "logged in", error: null };
}

export async function getEvents() {
  const supabase = createClient();
  const { data: events, error } = await supabase.from("events").select("*");
  return events;
}

export async function getEventDetails(id: string) {
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
  const userID = user.data.user?.id; // 7501e42f-1841-42cb-ba0f-9bf172d74625
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        profile_id: "7501e42f-1841-42cb-ba0f-9bf172d74625",
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
      .from("order_ticket")
      .insert(finalOrderTickets)
      .select();

    console.log("ORDER TICKETS RESULT:", data);
    console.log("ORDER TICKETS ERROR:", error);
  }
}

export async function getUserOrders() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const userID = user.data.user?.id || "7501e42f-1841-42cb-ba0f-9bf172d74625";
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("profile_id", userID);
}

export async function updateAcccountDetails() {}

export async function makePayment(phoneNumber: string, order_id: string) {
  const res = await RequestPayment(phoneNumber, order_id);
  console.log("PAYMENT RESPONSE:", res);
}
