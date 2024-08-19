"use client";
import { signUp } from "@/actions/auth";
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
import Image from "next/image";

export default function SignUpPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const { data, error } = await signUp(form);
  }
  return (
    <div className="flex min-h-screen items-center flex-col pt-6 bg-event-1">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle className="flex text-2xl items-center">
            <Image src={"/logo.png"} alt="logo" width={60} height={60} />
            Register
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first_name">First name</Label>
              <Input
                name="first_name"
                type="text"
                placeholder="John"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last_name">Last name</Label>
              <Input name="last_name" type="text" placeholder="Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password1">Password</Label>
              <Input name="password1" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password2">Re-enter password</Label>
              <Input name="password2" type="password" required />
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full">Sign up</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
