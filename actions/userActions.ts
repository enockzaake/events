"use server";
import { createClient } from "@/lib/supabase/server";

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
    .eq("id", id);

  return event;
}
