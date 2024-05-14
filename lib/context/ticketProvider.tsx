"use client";
import React, { createContext, useState } from "react";
import { OrderTicket } from "@/types";

interface TicketContextProps {
  sampleValue: number;
  ticketList: OrderTicket[];
  setTicketList: React.Dispatch<React.SetStateAction<OrderTicket[]>>;
  increaseTicketCount: (ticketId: string) => void;
  decreaseTicketCount: (ticketId: string) => void;
  getTicketCount: (ticketId: string) => number;
}

export const TicketContext = createContext<TicketContextProps | null>(null);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const sampleValue = 999999999999;
  const [ticketList, setTicketList] = useState<OrderTicket[]>([]);

  const increaseTicketCount = (ticketId: string) => {
    setTicketList((prevTicketList) => {
      const existingTicket = prevTicketList.find(
        (ticket) => ticket.ticket_id === ticketId
      );

      if (existingTicket) {
        return prevTicketList.map((ticket) =>
          ticket.ticket_id === ticketId
            ? { ...ticket, quantity: ticket.quantity + 1 }
            : ticket
        );
      } else {
        return [...prevTicketList, { ticket_id: ticketId, quantity: 1 }];
      }
    });
  };

  const decreaseTicketCount = (ticketId: string) => {
    setTicketList((prevTicketList) => {
      const updatedTicketList = prevTicketList.map((ticket) => {
        if (ticket.ticket_id === ticketId) {
          const updatedCount = ticket.quantity - 1;
          // Return the ticket with updated count only if count is greater than 0
          if (updatedCount >= 0) {
            return { ...ticket, quantity: updatedCount };
          }
        }
        return ticket;
      });
      // Filter out tickets with count > 0
      return updatedTicketList.filter((ticket) => ticket.quantity > 0);
    });
  };
  const getTicketCount = (ticketId: string) => {
    const ticket = ticketList.filter(
      (ticket: OrderTicket) => ticket.ticket_id === ticketId
    );
    return ticket[0]?.quantity || 0;
  };

  return (
    <TicketContext.Provider
      value={{
        sampleValue,
        ticketList,
        setTicketList,
        increaseTicketCount,
        decreaseTicketCount,
        getTicketCount,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
