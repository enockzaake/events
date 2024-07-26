import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Evently",
  description: "Find the hottest events here.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar bg_color="bg-indigo-900" />
      {children}
    </div>
  );
}
