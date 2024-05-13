import { TicketType, paramProps } from "@/types";
import { getEventDetails } from "@/actions/userActions";

import TicketCard from "@/components/ticketCard";

const EventPage = async ({ params, searchParams }: paramProps) => {
  const event = await getEventDetails(params?.id as string);

  return (
    <div className="">
      Event details:{JSON.stringify(event, null, 2)}
      <br></br>
      <div className="mt-12">
        {event.tickets.map((ticket: TicketType, index: number) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
