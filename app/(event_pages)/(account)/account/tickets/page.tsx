import { Suspense } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getOrderHistory } from "@/actions/userActions";

export default async function Account() {
  const { orders, error } = await getOrderHistory();

  function getTicketTotal(order_tickets: any) {
    let total: number = 0;
    for (let order_ticket of order_tickets) {
      total += order_ticket.quantity;
    }
    return total;
  }

  return (
    <div className="grid gap-6">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Ticket Orders</h1>
      </div>
      <Card>
        <CardContent>
          <Table suppressHydrationWarning>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date of Purchase</TableHead>
                <TableHead>Tickets purchased</TableHead>
              </TableRow>
            </TableHeader>
            <Suspense fallback={<div className="loader"></div>}>
              <TableBody>
                {orders?.length === 0 ? (
                  <div>You have not yet purchased a ticket.</div>
                ) : (
                  orders?.map((order: any, i: number) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {order.events.name}
                      </TableCell>
                      <TableCell className="font-medium">
                        {order.status}
                      </TableCell>
                      <TableCell className="font-medium">
                        {order.confirmed_at}
                      </TableCell>
                      <TableCell className="font-medium">
                        {getTicketTotal(order.order_tickets)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Suspense>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
