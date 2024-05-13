"use client";
import { TicketType } from "@/types";
import { useState } from "react";

const TicketCard = ({ ticket }: { ticket: TicketType }) => {
  const [ticketQty, setTicketQty] = useState<number>(0);
  return (
    <div className="bg-green-100 px-4">
      <span>{ticket.name}</span>
      <br></br>
      <span>{ticket.price}</span>
      <br></br>
      <span>{ticket.type}</span>
      <br></br>
      <span>{ticket.description}</span>
      <br></br>
      <div className="flex gap-2 items-center">
        <button
          className="text-4xl text-bold w-12 h-12 bg-green-400 rounded-xl"
          disabled={ticketQty === 0}
          onClick={() => setTicketQty(ticketQty - 1)}
        >
          -
        </button>
        <span className="text-4xl"> {ticketQty}</span>
        <button
          className="text-4xl text-bold w-12 h-12 bg-green-400 rounded-xl"
          onClick={() => setTicketQty(ticketQty + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
