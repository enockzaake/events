import { EventType } from "@/types";
import { getEvents } from "@/actions/userActions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import EventCard from "@/components/eventCard";

import { sample_events } from "@/lib/data/sample_events";
// 1. All events
// 2. Filters -> params & searchParams
// 3. Categories
const AllEvents = async () => {
  // const events = await getEvents();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:px-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div>
            <Card className="hidden md:block overflow-hidden">
              <CardHeader className="flex items items-center justify-center bg-muted/70">
                <CardTitle className="text-lg text-left">
                  Search events
                </CardTitle>
                <div className="relative">
                  <Search className="absolute left-1.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[360px]"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">FILTER EVENTS</div>
                  <div className="font-semibold">Period</div>
                  <RadioGroup defaultValue="all_dates">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all_dates" id="all_dates" />
                      <Label
                        htmlFor="all_dates"
                        className="text-muted-foreground"
                      >
                        All dates
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="today" id="today" />
                      <Label htmlFor="today" className="text-muted-foreground">
                        Today
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekend" id="weekend" />
                      <Label
                        htmlFor="weekend"
                        className="text-muted-foreground"
                      >
                        This weekend
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom" className="text-muted-foreground">
                        Custom date
                      </Label>
                    </div>
                  </RadioGroup>
                  <div className="font-semibold">Category</div>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Choose category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="business">
                        Business & Industry
                      </SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="font-semibold">Location</div>
                  <div className="grid grid-cols-4">
                    <Input
                      className="col-span-3 rounded-e-none"
                      placeholder="Search a location"
                    />
                    <Select>
                      <SelectTrigger className="col-span-1 rounded-s-none">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5km">{"< "}5 km</SelectItem>
                        <SelectItem value="10km">{"< "} 10 km</SelectItem>
                        <SelectItem value="15km">{"< "} 15 km</SelectItem>
                        <SelectItem value="30km">{"< "}30 km</SelectItem>
                        <SelectItem value="50km">{"< "}50 km</SelectItem>
                        <SelectItem value="100km">{"< "}100 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="font-semibold">Type</div>
                  <RadioGroup>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="physical" id="physical" />
                      <Label
                        htmlFor="physical"
                        className="text-muted-foreground"
                      >
                        Physical event
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="text-muted-foreground">
                        Online event
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card>
              <CardHeader className="px-7">
                <CardTitle>46 Events found</CardTitle>
                <CardDescription>Results from event search.</CardDescription>
              </CardHeader>
              <CardContent>
                {sample_events.map((event: EventType, index: number) => (
                  <EventCard key={index} event={event} />
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllEvents;
