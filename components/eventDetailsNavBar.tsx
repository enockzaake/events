"use client";
//Shared navbar for event/id/* routes
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export default function EventDetailsNavBar() {
  let path = usePathname();
  console.log("PATH:", path);
  let segements = JSON.parse(JSON.stringify(path.split("/")));
  console.log("SEGMENTS:", segements);
  let id = segements[3];
  console.log("ID:", id);
  let pathName = segements[4];
  console.log("PATHNAME:", pathName);

  return (
    <div className="flex w-full flex-col sm:gap-4">
      <Card className="flex min-h-36">
        <Image
          src="/event_banner.jpg"
          alt="Event cover image"
          className="object-fit rounded-md"
          width={200}
          height={200}
        />
        <CardHeader className="flex flex-row bg-re-900 items-center justify-between w-full justify-betwee pb-3">
          <CardTitle>
            EVENT 2
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Friday 28 June 2024 from 2:30 to 7:00
            </CardDescription>
          </CardTitle>

          <Button>View Event</Button>
        </CardHeader>
      </Card>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList className="">
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`${
                pathName === "overview"
                  ? "border-b-2 border-b-green-900 text-green-400"
                  : ""
              }`}
              asChild
            >
              <Link href={`/dashboard/events/${id}/overview`}>Overview</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`${
                pathName === "attendees"
                  ? "border-b-2 border-b-green-900 text-green-400"
                  : ""
              }`}
              asChild
            >
              <Link href={`/dashboard/events/${id}/attendees`}>Attendees</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`${
                pathName === "tickets"
                  ? "border-b-2 border-b-green-900 text-green-400"
                  : ""
              }`}
              asChild
            >
              <Link href={`/dashboard/events/${id}/tickets`}>Tickets</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`${
                pathName === "info"
                  ? "border-b-2 border-b-green-900 text-green-400"
                  : ""
              }`}
              asChild
            >
              <Link href={`/dashboard/events/${id}/info`}>Event Page</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={`${
                pathName === "settings"
                  ? "border-b-2 border-b-green-900 text-green-400"
                  : ""
              }`}
              asChild
            >
              <Link href={`/dashboard/events/${id}/settings`}>Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
