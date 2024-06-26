import Link from "next/link";
import {
  Home,
  Infinity,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { NewTicket } from "@/components/newTicket";
import { EditTicketLimits } from "@/components/editTicketLimits";

import { ticketDetails } from "@/actions/organiserActions";
import { TicketType } from "@/types";
import EventDetailsNavBar from "@/components/eventDetailsNavBar";

export default async function TicketPage({ params: { id } }: any) {
  const { tickets, error } = await ticketDetails(id);
  return (
    <div className="mx-1">
      <EventDetailsNavBar />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-1">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
          <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <Card className="sm:col-span-2">
                  <CardHeader className="pb-3">
                    <CardTitle>Ticket actions</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Add new ticket or edit limits applied to the tickets.
                    </CardDescription>
                  </CardHeader>
                  <NewTicket event_id={id} />
                  {/* <EditTicketLimits event_id={id} /> */}
                </Card>
                <Card x-chunk="dashboard-05-chunk-1">
                  <CardHeader className="pb-2">
                    <CardDescription>This Week</CardDescription>
                    <CardTitle className="text-4xl">$1,329</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      +25% from last week
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-05-chunk-2">
                  <CardHeader className="pb-2">
                    <CardDescription>This Month</CardDescription>
                    <CardTitle className="text-4xl">$5,329</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      +10% from last month
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={12} aria-label="12% increase" />
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-black">TICKET</TableHead>
                        <TableHead className="text-black">PRICE</TableHead>
                        <TableHead className="text-black">STATUS</TableHead>
                        <TableHead className="text-black">START SELL</TableHead>
                        <TableHead className="text-black">END SELL</TableHead>
                        <TableHead className="text-black">LIMIT</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tickets?.map((ticket: TicketType, i: number) => (
                        <TableRow key={i} className="bg-accent">
                          <TableCell className="hidden sm:table-cell">
                            {ticket.name}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-lef">
                            {ticket.price}
                          </TableCell>

                          <TableCell className="hidden sm:table-cell">
                            <Badge>
                              {ticket.status === "ON_SALE"
                                ? "Available"
                                : "Sold Out"}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {ticket.start_sale}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {ticket.end_sale}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Infinity></Infinity>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
