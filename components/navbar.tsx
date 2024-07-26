import Link from "next/link";
import React from "react";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logoutButton";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";

async function Navbar({ bg_color }: { bg_color?: string }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const full_name =
    user?.user_metadata.first_name + " " + user?.user_metadata.last_name;

  return (
    <header className={`${bg_color} inset-x-0 top-0 z-10 w-full`}>
      <div className="px-4 mx-auto sm:px-6 lg:px-14">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex">
              <span className="text-white mr-12 text-4xl">EVENTLY</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              href="/events"
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80"
            >
              Events
            </Link>

            <Link
              href="/solutions"
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Solutions{" "}
            </Link>
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                  <span className="hidden sm:flex hover:cursor-pointer text-gray-200">
                    {full_name} <ChevronDown strokeWidth={1.75} />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/account/tickets"}>My tickets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/dashboard"}> Organiser dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/account/details"}>Account details</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <Link
                href="/login"
                title=""
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                {" "}
                Log in{" "}
              </Link>

              <Link
                href="/signup"
                title=""
                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                {" "}
                Register{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
