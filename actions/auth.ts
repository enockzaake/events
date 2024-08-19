"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData): Promise<{
  data: any;
  error: string | null;
}> {
  const supabase = createClient();

  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password1") as string;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "",
      data: {
        user_role: "user",
        first_name: first_name,
        last_name: last_name,
      },
    },
  });

  if (error) {
    return { data: null, error: error.message };
  }
  const new_profile = await supabase.from("profiles").insert({
    id: data.user?.id,
  });

  if (new_profile.error) {
    return { data: null, error: new_profile.error.message };
  }
  return { data: "New profile created", error: null };

  // redirect("/applications ");
}

export async function Login(formData: FormData): Promise<{
  data: any;
  error: string | null;
}> {
  const supabase = createClient();

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email) {
    return { data: null, error: "Email required" };
  }

  if (!password) {
    return { data: null, error: "Password required" };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) return { data: null, error: error.message };

  const user_role = data.user.user_metadata.user_role;
  if (user_role === "user") redirect("/events");

  return { data: "ok", error: null };
}
