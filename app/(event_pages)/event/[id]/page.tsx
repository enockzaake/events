import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { paramProps, TicketType } from "@/types";
import { getEventDetails } from "@/actions/userActions";
import { TicketProvider } from "@/lib/context/ticketProvider";

import TicketsContainer from "@/components/ticketsContainer";

import { sample_events } from "@/lib/constants/sample_events";
import SubmitTicketRequestButton from "@/components/submitTicketButton";
import { formatCurrency } from "@/lib/utils";

export default async function EventPage({ params }: paramProps) {
  // const event = { tickets: [], ...sample_events[0] };\
  const event = await getEventDetails(params?.id as string);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex rounded-lg border bg-card text-card-foreground shadow-sm min-h-[350px]">
          <div className="w-1/2 bg-black rounded-s-lg">About event</div>
          <div className="w-1/2">
            <Image
              src={event.cover_image}
              height={100}
              width={900}
              alt="Event banner"
              className="w-full h-[350px] object-cover  rounded-e-lg"
              priority
            />
          </div>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>About</CardTitle>
                <CardDescription>About | Reviews</CardDescription>
              </div>
              <div className="flex ml-auto gap-2">
                <Share2 className="hover:cursor-pointer" />
                <Heart className="hover:cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent>
              Event description
              {event.details}
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>Tickets</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {event.tickets.map((ticket: TicketType, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4"
                >
                  <span className="w-24">{ticket.name}</span>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Thur-12-24 6:00 am - Fri-12-24 23:59 pm
                    </p>
                    <p className="text-xs text-muted-foreground">
                      +$0.7 service fee
                    </p>
                  </div>
                  <div className="ml-auto">${formatCurrency(ticket.price)}</div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full">Buy tickets</Button> */}
              <TicketProvider>
                <AlertDialog>
                  <AlertDialogTrigger className="flex items-center justify-center w-full bg-gray-900 text-white h-10 rounded-md px-4 gap-1">
                    Tickets
                  </AlertDialogTrigger>

                  <AlertDialogContent className="w-1/2">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add ticket quantity</AlertDialogTitle>
                      <AlertDialogDescription>
                        <TicketsContainer
                          eventId={event.id}
                          tickets={event.tickets}
                        />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <SubmitTicketRequestButton eventId={event.id} />
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TicketProvider>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
