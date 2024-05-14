"use client";
import React, { useContext } from "react";

import { TicketType } from "@/types";
import { TicketContext } from "@/lib/context/ticketProvider";

const TicketCard = ({ ticket }: { ticket: TicketType }) => {
  const { getTicketCount, increaseTicketCount, decreaseTicketCount } =
    useContext(TicketContext)!;

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
          disabled={getTicketCount(ticket.id) === 0}
          onClick={() => decreaseTicketCount(ticket.id)}
        >
          -
        </button>
        <span className="text-4xl"> {getTicketCount(ticket.id)}</span>
        <button
          className="text-4xl text-bold w-12 h-12 bg-green-400 rounded-xl"
          onClick={() => increaseTicketCount(ticket.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
