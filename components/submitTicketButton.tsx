"use client";
import React, { useContext, useState } from "react";
import { TicketContext } from "@/lib/context/ticketProvider";
import { OrderType } from "@/types";

import { createOrder } from "@/actions/userActions";

import { Spinner1 } from "./loaders";

export default function SubmitTicketRequestButton({
  eventId,
}: {
  eventId: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const { ticketList, setTicketList } = useContext(TicketContext)!;

  const handleCreateOrder = async () => {
    setLoading(true);

    if (ticketList.length === 0) {
      alert(JSON.stringify("Please choose atleast one ticket to continue."));
      return;
    }
    const order: OrderType = {
      eventId: eventId,
      orderTickets: ticketList,
    };

    const res = await createOrder(order);
    setTicketList([]);
    setLoading(false);
  };

  return (
    <button
      disabled={ticketList.length === 0 ? true : false}
      className={`flex items-center justify-center h-10 rounded-md px-4 gap-1
        ${
          ticketList.length === 0
            ? "bg-gray-300 text-black"
            : "bg-gray-900 text-white"
        }
        `}
      onClick={handleCreateOrder}
    >
      {!loading ? "Continue" : <Spinner1 size={2} />}
    </button>
  );
}
