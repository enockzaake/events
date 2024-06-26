"use server";
import { createClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";

export async function uploadFile(bucket_name: string, file: File) {
  const supabase = createClient();
  const uuid = randomUUID();

  const { data, error } = await supabase.storage
    .from(bucket_name)
    .upload(`banner-${uuid}`, file);

  if (error) {
    return {
      data: null,
      error: error,
    };
  } else {
    return {
      data: data,
      error: null,
    };
  }
}
  