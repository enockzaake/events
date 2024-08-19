//Shared navbar for event/id/* routes

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import EventPageBreadCrumbs from "./eventPageBreadCrumbs";

import { eventNavBarDetails } from "@/actions/organiserActions";
import { UUID } from "crypto";

export default async function EventDetailsNavBar({
  event_id,
}: {
  event_id: string;
}) {
  const { data, error } = await eventNavBarDetails(event_id as UUID);
  return (
    <div className="flex w-full flex-col sm:gap-4">
      <Card className="flex min-h-36">
        <Image
          src={data?.cover_image}
          alt="Event cover image"
          className="object-fit rounded-md"
          width={200}
          height={200}
          priority
        />
        <CardHeader className="flex flex-row bg-re-900 items-center justify-between w-full justify-betwee pb-3">
          <CardTitle>
            {data?.name}
            <CardDescription className="max-w-lg font-light text-black space-y-1">
              <span className="">From : {data?.start_date_time}</span> <br></br>
              <span className="">To : {data?.end_date_time}</span>
              <br></br>
              <span className="">Location: {data?.location}</span>
              <br></br>
              <span className="">Status : {data?.status}</span>
              <br></br>
            </CardDescription>
          </CardTitle>

          <Link href={`/event/${event_id}`} target="_blank">
            <Button>View Event</Button>
          </Link>
        </CardHeader>
      </Card>
      <EventPageBreadCrumbs />
    </div>
  );
}
