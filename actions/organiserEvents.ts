"use server";
import { createClient } from "@/lib/supabase/server";

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
