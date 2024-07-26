"use client";
import React, { useContext } from "react";
import { TicketType } from "@/types";
import TicketCard from "./ticketCard";
import { Separator } from "./ui/separator";

export default function TicketsContainer({
  eventId,
  tickets,
}: {
  eventId: string;
  tickets: TicketType[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {tickets.map((ticket: TicketType, index: number) => (
        <div key={index}>
          <TicketCard key={index} ticket={ticket} />
          <Separator />
        </div>
      ))}
    </div>
  );
}
