"use client";
import React from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    router.replace("/");
    router.refresh();
  };
  const supabase = createClient();
  return (
    <span onClick={handleLogout} className="hover:cursor-pointer">
      Logout
    </span>
  );
};

export default LogoutButton;
