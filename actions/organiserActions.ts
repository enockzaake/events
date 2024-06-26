"use server";

import { createClient } from "@/lib/supabase/server";
import { uploadFile } from "@/lib/server-utils";
import { redirect } from "next/navigation";
import { UUID } from "crypto";

export async function getAllReviews() {}

export async function getDashboardDetails() {}
export async function eventDetails() {}
export async function updateEventDetails() {}
export async function deleteEvent() {}
export async function updateEventTicket() {}
export async function eventOverview() {} // orders, ticket sales, payouts
export async function eventAttendees() {}

export async function getOrganisationProfile() {} // Info to be displayed publicly to users
export async function getOrganisationData() {} // Info about the organisation eg. bank details etc
export async function getOrganisationPayouts() {}
export async function getOrganisationInvoices() {}
export async function getDataForExport() {}

export async function createNewEvent(form: FormData) {
  const supabase = createClient();

  const id = form.get("id");
  const organisation_id = form.get("organisation_id") as string;
  const category = form.get("category") as string;
  const name = form.get("name") as string;
  const location = form.get("location") as string;
  const start_date_time = form.get("start_date_time");
  const end_date_time = form.get("end_date_time");
  const multi_day = form.get("multi_day") === "on";
  const virtual = form.get("virtual") === "on";
  const details = form.get("details") as string;
  const cover_image_file = form.get("cover_image") as File;
  const visibility = form.get("visibility");
  const status = form.get("status");

  const res = await uploadFile("event_bannerss", cover_image_file);
  console.log("UPLOAD MESSAGE:", res);

  return redirect(`/dashbaord/events/${1}/tickets`);

  let newEvent = {
    organisation_id: organisation_id,
    category: category,
    name: name,
    location: location,
    start_date_time: start_date_time,
    end_date_time: end_date_time,
    multi_day: multi_day,
    virtual: virtual,
    details: details,
    // cover_image: cover_image_url,
    visibility: visibility,
    status: status,
  };

  const { data, error } = await supabase.from("events").insert([]).select();
}

export async function organiserEvents() {
  //TODO: Speciify events for each organisation
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (!user) {
  //   return { data: null, error: { message: "User not found" } };
  // }

  let org_res = await supabase
    .from("organisations")
    .select("id")
    .eq("owner_id", "7501e42f-1841-42cb-ba0f-9bf172d74625");

  const org_ids: any = org_res.data?.map((item) => item.id);

  let { data: events, error } = await supabase
    .from("events")
    .select(`id,cover_image,name,status,category,created_at`)
    .in("organisation_id", org_ids);

  if (!error) {
    return { events: events, error: null };
  } else {
    return { events: null, error: error };
  }
}

export async function newEventTicket(event_id: UUID, form: FormData) {
  const supabase = createClient();

  const name = form.get("name");
  const price = form.get("price");
  const type = form.get("type");
  const quantity = form.get("quantity");
  const status = form.get("status");
  const start_sale = form.get("start_sale");
  const end_sale = form.get("end_sale");

  const data = JSON.stringify(
    {
      event_id,
      name,
      price,
      type,
      quantity,
      status,
      start_sale,
      end_sale,
    },
    null,
    2
  );
  console.log("TICKET DATA:", data);
}

export async function ticketDetails(event_id: UUID) {
  const supabase = createClient();

  let { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("event_id", event_id);

  if (error) {
    return {
      tickets: null,
      error: error,
    };
  } else {
    return {
      tickets: tickets,
      error: null,
    };
  }
}
