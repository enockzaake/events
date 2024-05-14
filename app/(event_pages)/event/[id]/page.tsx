import { paramProps } from "@/types";
import { getEventDetails } from "@/actions/userActions";
import { TicketProvider } from "@/lib/context/ticketProvider";

import TicketsContainer from "@/components/ticketsContainer";

const EventPage = async ({ params }: paramProps) => {
  const event = await getEventDetails(params?.id as string);

  return (
    <div className="">
      Event details:{JSON.stringify(event, null, 2)}
      <br></br>
      <div className="mt-12">
        <TicketProvider>
          <TicketsContainer eventId={event.id} tickets={event.tickets} />
        </TicketProvider>
      </div>
    </div>
  );
};

export default EventPage;
