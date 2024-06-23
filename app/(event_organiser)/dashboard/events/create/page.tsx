import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
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
  );
}
