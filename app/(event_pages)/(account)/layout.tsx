import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

import Image from "next/image";
import { Ticket, UserRound, Heart } from "lucide-react";

export default async function AcccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const full_name =
    user?.user_metadata.first_name + " " + user?.user_metadata.last_name;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-2">
            <div className="flex flex-col">
              <Image
                src={"/logo.png"}
                alt="profile picture"
                width={90}
                height={90}
              />
              <span className="font-semibold text-lg mb-4">
                {full_name.toUpperCase()}
              </span>
            </div>

            <Link href="/account/tickets" className="flex items-center gap-2">
              <Ticket />
              Tickets
            </Link>
            <Link href="/account/details" className="flex items-center gap-2">
              <UserRound />
              Account details
            </Link>
            <Link
              href="/account/preferences"
              className="flex items-center gap-2"
            >
              <Heart />
              Preferences
            </Link>
          </nav>
          {children}
        </div>
      </main>
    </div>
  );
}
