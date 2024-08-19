"use client";
import { Login } from "@/actions/auth";
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
import { Spinner1 } from "@/components/loaders";

import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  function handleChange() {}
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target as HTMLFormElement);
    const res = await Login(form)!;
    if (res) {
      setError(true);
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-event-1">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          {error && (
            <CardDescription className="flex text-red-500 text-sm gap-1 items-center">
              <span className="flex mx-auto">
                <TriangleAlert size={20} />
                Invalid email or password
              </span>
            </CardDescription>
          )}
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                onChange={() => handleChange}
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button className="w-full">
              {loading ? <Spinner1 size={2} /> : "Sign in"}
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </form>
      </Card>
    </div>
  );
}
