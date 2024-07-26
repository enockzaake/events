"use client";
import Link from "next/link";

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
import { Switch } from "@/components/ui/switch";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { createNewEvent } from "@/actions/organiserActions";

export default function Dashboard() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    await createNewEvent(form);
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <span className="font-semibold text-primary text-xl">
              Event information
            </span>
          </nav>
          <div className="grid gap-4">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader></CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 ">
                  <Input placeholder="Event Name" className="col-span-3" />
                  <Input placeholder="Date" />
                  <Input placeholder="Start time" />
                  <Input placeholder="End time" />
                  <div className="flex gap-4 items-center">
                    <Switch />
                    <div className="text-sm font-semibold">
                      <div>This event lasts several days</div>
                    </div>
                  </div>
                  <Input placeholder="End date" />
                  <Input placeholder="End time" />
                  <div className="flex gap-4 items-center">
                    <Switch />
                    <div className="text-sm font-semibold">
                      <div>This event takes place online</div>
                    </div>
                  </div>
                  <Input placeholder="Enter a location" />
                  <Input
                    placeholder="Extra information"
                    className="col-span-full"
                  />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <span className="font-semibold text-primary text-xl">
              Cover Image
            </span>
            <p>
              Keep an aspect ratio of 16:9 for the image. A recommended size is
              1920 x 1005 pixels.
            </p>
          </nav>
          <Card className="pt-4 h-32">
            <CardContent>
              <Button>Upload image</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <span className="font-semibold text-primary text-xl">
              Event visibility
            </span>
            <p>
              Indicate the correct category that belongs to your event. This way
              your event is shown to the right people.
            </p>
          </nav>
          <Card className="pt-4">
            <CardContent className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <Switch />
                <div className="flex flex-col -space-y-6">
                  <span className="text-sm font-semibold">
                    This is a private event
                  </span>
                  <br></br>
                  <span className="text-xs">
                    The event will not be displayed on the platform, but only to
                    the person you share the event link with.
                  </span>
                </div>
              </div>
              <Input placeholder="Theme" />
              <span className="text-xs">
                Select the themes that suit your event. By choosing the right
                theme you ensure that your event is shown to the right visitors.
                You can choose a maximum of 3. Can't find a theme that matches
                your event? Please request us to add a theme by contacting us .
              </span>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
    // <form className="max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">ID (UUID):</label>
    //     <input
    //       type="text"
    //       name="id"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Organisation ID (UUID):</label>
    //     <input
    //       type="text"
    //       name="organisation_id"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Category:</label>
    //     <input
    //       type="text"
    //       name="category"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Name:</label>
    //     <input
    //       type="text"
    //       name="name"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Location:</label>
    //     <input
    //       type="text"
    //       name="location"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Start Date Time:</label>
    //     <input
    //       type="datetime-local"
    //       name="start_date_time"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">End Date Time:</label>
    //     <input
    //       type="datetime-local"
    //       name="end_date_time"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Multi-day:</label>
    //     <input type="checkbox" name="multi_day" className="mr-2" />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Virtual:</label>
    //     <input type="checkbox" name="virtual" className="mr-2" />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Details:</label>
    //     <textarea
    //       name="details"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Cover Image URL:</label>
    //     <input
    //       type="file"
    //       name="cover_image"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Visibility:</label>
    //     <input
    //       type="number"
    //       name="visibility"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Status:</label>
    //     <input
    //       type="text"
    //       name="status"
    //       className="w-full px-3 py-2 border border-gray-300 rounded-md"
    //       // required
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    //   >
    //     Submit
    //   </button>
    // </form>
  );
}
