"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import Link from "next/link";

function EventPageBreadCrumbs() {
  let path = usePathname();
  let segements = JSON.parse(JSON.stringify(path.split("/")));
  let id = segements[3];
  let pathName = segements[4];
  return (
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
  );
}

export default EventPageBreadCrumbs;
