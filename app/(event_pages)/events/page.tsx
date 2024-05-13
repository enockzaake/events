import { EventType, paramProps } from "@/types";
import { getEvents } from "@/actions/userActions";

import EventCard from "@/components/eventCard";

// 1. All events
// 2. Filters -> params & searchParams
// 3. Categories
const AllEvents = async () => {
  const events = await getEvents();
  return (
    <div>
      All events
      <div className="mt-12">
        {events?.map((event: EventType) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
