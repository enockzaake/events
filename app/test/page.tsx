"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { makePayment } from "@/actions/userActions";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// export default function PaymentForm() {
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const form = new FormData(e.target as HTMLFormElement);
//     const phoneNumber = form.get("phone") as string;
//     const order_id = form.get("order_id") as string;
//     await makePayment(phoneNumber, order_id);
//   }
//   return (
//     <div className="flex items-center justify-center bg-black min-h-screen">
//       <form onSubmit={handleSubmit} className="grid gap-2">
//         <Card className="w-full max-w-sm">
//           <CardHeader>
//             <CardTitle className="text-2xl">Enter phone number</CardTitle>
//             <CardDescription>
//               Enter your MPESA phone number to complete payment.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="grid gap-4">
//             <Label htmlFor="phone">Phone number</Label>
//             <Input
//               id="phone"
//               type="phone"
//               name="phone"
//               placeholder="+254947432345"
//               required
//             />
//             <Label htmlFor="order_id">Order ID</Label>
//             <Input
//               id="order_id"
//               type="order_id"
//               name="order_id"
//               placeholder="123456"
//               required
//             />
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full">
//               <LockIcon />
//               <span className="">Pay</span>
//             </Button>
//           </CardFooter>
//         </Card>
//       </form>
//     </div>
//   );
// }

export default function Component() {
  let id = 12;
  return (
    <div className="flex flex-col justify-between mx-12 px-4 min-h-40 gap-2 py-2">
      <Card className="flex min-h-36 px-2">
        <Image
          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
          alt="Event cover image"
          className="object-contain"
          width={200}
          height={200}
        />
        <CardHeader className="pb-3">
          <CardTitle>EVENT 2</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Friday 28 June 2024 from 2:30 to 7:00
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Create New Order</Button>
        </CardFooter>
      </Card>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList className="px-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${id}/overview`}>Overview</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${id}/attendees`}>Attendees</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${id}/tickets`}>Tickets</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${id}/info`}>Event Page</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${id}/settings`}>Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
