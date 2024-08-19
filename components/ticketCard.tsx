"use client";
import React, { useContext } from "react";

import { TicketType } from "@/types";
import { TicketContext } from "@/lib/context/ticketProvider";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const TicketCard = ({ ticket }: { ticket: TicketType }) => {
  const { getTicketCount, increaseTicketCount, decreaseTicketCount } =
    useContext(TicketContext)!;

  return (
    // <div className="bg-green-100 px-4">
    //   <span>{ticket.name}</span>
    //   <br></br>
    //   <span>{ticket.price}</span>
    //   <br></br>
    //   <span>{ticket.type}</span>
    //   <br></br>
    //   <span>{ticket.description}</span>
    //   <br></br>
    //   <div className="flex gap-2 items-center">
    //     <button
    //       className="text-4xl text-bold w-12 h-12 bg-green-400 rounded-xl"
    //       disabled={getTicketCount(ticket.id) === 0}
    //       onClick={() => decreaseTicketCount(ticket.id)}
    //     >
    //       -
    //     </button>
    //     <span className="text-4xl"> {getTicketCount(ticket.id)}</span>
    //     <button
    //       className="text-4xl text-bold w-12 h-12 bg-green-400 rounded-xl"
    //       onClick={() => increaseTicketCount(ticket.id)}
    //     >
    //       +
    //     </button>
    //   </div>
    // </div>
    <div className="flex items-center justify-around">
      <span className="w-24">{ticket.name}</span>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">
          Thur-12-24 6:00 am - Fri-12-24 23:59 pm
        </p>
        <p className="text-xs text-muted-foreground">+$0.7 service fee</p>
      </div>

      <div className="flex items-center justify-between gap-2 mx-auto p-2">
        <Button
          className="text-4xl font-thin px-3"
          disabled={getTicketCount(ticket.id) === 0}
          onClick={() => decreaseTicketCount(ticket.id)}
        >
           <Minus />
        </Button>
        <span className="flex items-center font-semibold text-lg px-2">
          {getTicketCount(ticket.id)}
        </span>
        <Button
          className="text-4xl font-thin"
          onClick={() => increaseTicketCount(ticket.id)}
        >
          <Plus />
        </Button>
      </div>

      <div className="ml-auto">${formatCurrency(ticket.price)}</div>
    </div>
  );
};

export default TicketCard;
