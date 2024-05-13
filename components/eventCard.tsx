import { EventType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }: { event: EventType }) => {
  return (
    <div className="event-card">
      {event.cover_image && (
        <Image
          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
          alt="Event cover image"
          width={200}
          height={200}
        />
      )}
      <div className="mt-2">
        <h2>{event.name}</h2>
        <p>
          <b>Category:</b> {event.category}
        </p>
        <p>
          <b>Location:</b> {event.location}
        </p>
        <p>
          <b>Dates:</b> {new Date(event.start_date_time).toLocaleDateString()} -{" "}
          {new Date(event.end_date_time).toLocaleDateString()}
          {event.multi_day && " (Multi-day)"}
        </p>
        <Link href={`/event/${event.id}`}>
          <button className="bg-blue-500 p-2 rounded">VIEW EVENT</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
