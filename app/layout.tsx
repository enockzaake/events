import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Evently",
  description: "Find the hottest events here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={inter.className}>{children}</body>
      </TooltipProvider>
    </html>
  );
}
