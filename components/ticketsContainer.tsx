"use client";
import React, { useContext } from "react";
import { TicketContext } from "@/lib/context/ticketProvider";
import { TicketType, OrderType } from "@/types";
import TicketCard from "./ticketCard";

import { createOrder } from "@/actions/userActions";

const TicketsContainer = ({
  eventId,
  tickets,
}: {
  eventId: string;
  tickets: TicketType[];
}) => {
  const { ticketList, setTicketList } = useContext(TicketContext)!;

  const handleCreateOrder = async () => {
    if (ticketList.length === 0) {
      alert(JSON.stringify("PLEASE CHOOSE TICKETS TO CONTINUE"));
      return;
    }
    const order: OrderType = {
      eventId: eventId,
      orderTickets: ticketList,
    };

    const res = await createOrder(order);
    setTicketList([]);
  };

  return (
    <div className="flex flex-col gap-2 ">
      TicketsContainer
      {tickets.map((ticket: TicketType, index: number) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
      <button
        className="bg-green-500 p-4 w-32 mx-auto rounded"
        onClick={handleCreateOrder}
      >
        CREATE ORDER
      </button>
    </div>
  );
};

export default TicketsContainer;
