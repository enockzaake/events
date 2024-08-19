import { EventType } from "@/types";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "@/lib/utils";
import { Badge } from "./ui/badge";

const EventCard = ({ event }: { event: EventType }) => {
  const start_date_time = formatDateTime(event.start_date_time);
  const end_date_time = formatDateTime(event.end_date_time);
  return (
    <Link
      href={`/event/${event.id}`}
      className="flex flex-col sm:flex-row gap-2  shadow-sm shadow-indigo-100 bg-blue-300 rounded my-2"
    >
      <div className="sm:w-[270px] sm:h-[200px]">
        <Image
          alt=""
          width={270}
          height={200}
          src={event.cover_image}
          // src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="object-fit w-full h-full rounded-s"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div>
          <dl>
            <div>
              <dd className="font-medium">{event.name}</dd>
            </div>
            <div>
              <dt className="sr-only">Price</dt>
              <dd className="text-xs">
                Tickets starting at:{" "}
                <span className="text-gray-900">$2,000</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className=" flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2 py-2">
            <div>
              <p className="font-medium">
                {start_date_time.date + "  " + start_date_time.time + " "} to
                {" " + end_date_time.date + "  " + end_date_time.time}
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            <MapPin size={16} />
            <p className="font-medium">{event.location}</p>
          </div>
          <div className="flex items-center gap-2 py-2">
            <Badge variant={"outline"} className="border-black font-light py-0">
              {event.virtual ? "ONLINE" : "PHYSICAL"}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
