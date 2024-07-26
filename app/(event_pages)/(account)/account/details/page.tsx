import React from "react";
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
import { createClient } from "@/lib/supabase/server";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const AcountDetails = async () => {
  const events: any[] = [];
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const first_name = user?.user_metadata.first_name;
  const last_name = user?.user_metadata.last_name;
  const email = user?.user_metadata.email;


  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your accounts profile information and email address.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-6 gap-4">
            <div className="grid gap-1 col-span-4">
              <Label htmlFor="picture">Photo</Label>
              <Image
                src={"/logo.png"}
                alt="profile picture"
                width={50}
                height={50}
              />
              <Input id="picture" type="file" />
            </div>
            <div className="grid gap-1 col-span-4">
              <Label className="text-muted-foreground" htmlFor="first_name">
                First name
              </Label>
              <Input defaultValue={first_name} placeholder="First name" />
            </div>
            <div className="grid gap-1 col-span-4">
              <Label className="text-muted-foreground" htmlFor="last_name">
                Last name
              </Label>
              <Input defaultValue={last_name} placeholder="Last name" />
            </div>
            <div className="grid gap-1 col-span-4">
              <Label className="text-muted-foreground" htmlFor="email">
                Email
              </Label>
              <Input defaultValue={email} placeholder="enock@example.com" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Update password</CardTitle>
          <CardDescription>
            Make sure your account has a long, random password to stay secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-6 gap-4">
            <div className="grid gap-1 col-span-4">
              <Label
                className="text-muted-foreground"
                htmlFor="current_password"
              >
                Current password
              </Label>
              <Input name="current_password" />
            </div>
            <div className="grid gap-1 col-span-4">
              <Label
                className="text-muted-foreground"
                htmlFor="current_password"
              >
                New password
              </Label>
              <Input name="current_password" />
            </div>
            <div className="grid gap-1 col-span-4">
              <Label
                className="text-muted-foreground"
                htmlFor="current_password"
              >
                Confirm password
              </Label>
              <Input name="confirm_password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AcountDetails;
