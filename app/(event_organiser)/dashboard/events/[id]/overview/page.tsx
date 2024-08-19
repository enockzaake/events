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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EventDetailsNavBar from "@/components/eventDetailsNavBar";

import { organiserEventsOverview } from "@/actions/organiserActions";
import { TicketType } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default async function Dashboard({ params: { id } }: any) {
  const { data, error } = await organiserEventsOverview(id);
  console.log("TICKETS:", data);
  return (
    <div className="mx-1">
      <EventDetailsNavBar event_id={id} />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col gap-y-1">
          <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Manage your event.</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Introducing Our Dynamic Orders Dashboard for Seamless
                      Management and Insightful Analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Create New Order</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Today</CardDescription>
                    <CardTitle className="text-4xl">$1200</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      +25% from yesterday
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>This week</CardDescription>
                    <CardTitle className="text-4xl">$5,329</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      +10% from last week
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={12} aria-label="12% increase" />
                  </CardFooter>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Ticket sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-black">Ticket</TableHead>
                        <TableHead className="text-black">Qty. Sold</TableHead>
                        <TableHead className="text-black">
                          Qty. Available
                        </TableHead>
                        <TableHead className="text-black">Status</TableHead>
                        <TableHead className="text-black">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.map((ticket: TicketType, idx: number) => (
                        <TableRow key={idx} className="bg-accent">
                          <TableCell className="hidden sm:table-cell">
                            {ticket.name}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {100}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {100}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {ticket.status}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {`$${formatCurrency(12390)}`}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Event payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-black">
                          Total turnover
                        </TableHead>
                        <TableHead className="text-black">
                          Amount paid
                        </TableHead>
                        <TableHead className="text-black">
                          Amount to be paid
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell className="hidden sm:table-cell">
                          $950.00
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-lef">
                          $700.00
                        </TableCell>

                        <TableCell className="hidden sm:table-cell">
                          $250.00
                        </TableCell>
                      </TableRow>
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
