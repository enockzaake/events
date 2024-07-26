import Image from "next/image";
import Link from "next/link";
import { File, ListFilter, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

import { organiserEvents } from "@/actions/organiserActions";

function SkeletonCard() {
  return (
    <div className="flex mt-2">
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
      <Skeleton className="h-[70px] w-[100px] rounded-xl" />
    </div>
  );
}

export default async function Dashboard() {
  const { events, error } = await organiserEvents();
  // const events: any = [];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 ">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card className="">
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell text-center">
                          Tickets sold
                        </TableHead>
                        <TableHead className="hidden md:table-cell text-center">
                          Revenue
                        </TableHead>
                        <TableHead className="hidden md:table-cell text-center">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events?.length === 0 ? (
                        <div>No events created yet.</div>
                      ) : (
                        events?.map((event: any, i: number) => (
                          <TableRow key={i}>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-fit"
                                height="32"
                                src="/next.svg"
                                width="72"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              <Link
                                href={`/dashboard/events/${event.id}/overview`}
                                className="hover:font-semibold hover:text-indigo-500"
                              >
                                {event.name}
                              </Link>
                            </TableCell>

                            <TableCell>
                              <Badge variant="outline">
                                {event.status[0] +
                                  event.status.slice(1).toLowerCase()}
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                              756
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                              25
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                              {event.created_at}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Link
                                      href={`/dashboard/events/${event.id}/overview`}
                                    >
                                      Edit
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of{" "}
                    <strong>{events?.length || ""}</strong> events
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
