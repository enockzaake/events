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

import { makePayment } from "@/actions/userActions";
import { LockIcon } from "lucide-react";

export default function LoginForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const phoneNumber = form.get("phone") as string;
    await makePayment(phoneNumber, "123456");
  }
  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <form onSubmit={handleSubmit} className="grid gap-2">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Enter phone number</CardTitle>
            <CardDescription>
              Enter your MPESA phone number to complete payment.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="+254947432345"
              required
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <LockIcon />
              <span className="">Pay</span>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
