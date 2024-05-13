import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    // <div className="flex min-h-screen w-full flex-col">
    //   <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    //     <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
    //       <Link
    //         href="#"
    //         className="flex items-center gap-2 text-lg font-semibold md:text-base"
    //       >
    //         <Package2 className="h-6 w-6" />
    //         <span className="sr-only">Acme Inc</span>
    //       </Link>
    //       <Link
    //         href="#"
    //         className="text-foreground transition-colors hover:text-foreground"
    //       >
    //         Dashboard
    //       </Link>
    //       <Link
    //         href="#"
    //         className="text-muted-foreground transition-colors hover:text-foreground"
    //       >
    //         Orders
    //       </Link>
    //       <Link
    //         href="#"
    //         className="text-muted-foreground transition-colors hover:text-foreground"
    //       >
    //         Products
    //       </Link>
    //       <Link
    //         href="#"
    //         className="text-muted-foreground transition-colors hover:text-foreground"
    //       >
    //         Customers
    //       </Link>
    //       <Link
    //         href="#"
    //         className="text-muted-foreground transition-colors hover:text-foreground"
    //       >
    //         Analytics
    //       </Link>
    //     </nav>
    //     <Sheet>
    //       <SheetTrigger asChild>
    //         <Button
    //           variant="outline"
    //           size="icon"
    //           className="shrink-0 md:hidden"
    //         >
    //           <Menu className="h-5 w-5" />
    //           <span className="sr-only">Toggle navigation menu</span>
    //         </Button>
    //       </SheetTrigger>
    //       <SheetContent side="left">
    //         <nav className="grid gap-6 text-lg font-medium">
    //           <Link
    //             href="#"
    //             className="flex items-center gap-2 text-lg font-semibold"
    //           >
    //             <Package2 className="h-6 w-6" />
    //             <span className="sr-only">Acme Inc</span>
    //           </Link>
    //           <Link href="#" className="hover:text-foreground">
    //             Dashboard
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-muted-foreground hover:text-foreground"
    //           >
    //             Orders
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-muted-foreground hover:text-foreground"
    //           >
    //             Products
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-muted-foreground hover:text-foreground"
    //           >
    //             Customers
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-muted-foreground hover:text-foreground"
    //           >
    //             Analytics
    //           </Link>
    //         </nav>
    //       </SheetContent>
    //     </Sheet>
    //     <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
    //       <form className="ml-auto flex-1 sm:flex-initial">
    //         <div className="relative">
    //           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    //           <Input
    //             type="search"
    //             placeholder="Search products..."
    //             className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
    //           />
    //         </div>
    //       </form>
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="secondary" size="icon" className="rounded-full">
    //             <CircleUser className="h-5 w-5" />
    //             <span className="sr-only">Toggle user menu</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>Settings</DropdownMenuItem>
    //           <DropdownMenuItem>Support</DropdownMenuItem>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>Logout</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </div>
    //   </header>
    //   <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    //     <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    //       <Card x-chunk="dashboard-01-chunk-0">
    //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //           <CardTitle className="text-sm font-medium ">
    //             Total Revenue
    //           </CardTitle>
    //           <DollarSign className="h-4 w-4 text-muted-foreground" />
    //         </CardHeader>
    //         <CardContent>
    //           <div className="text-2xl font-bold">$45,231.89</div>
    //           <p className="text-xs text-muted-foreground">
    //             +20.1% from last month
    //           </p>
    //         </CardContent>
    //       </Card>
    //       <Card x-chunk="dashboard-01-chunk-1">
    //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //           <CardTitle className="text-sm font-medium">
    //             Subscriptions
    //           </CardTitle>
    //           <Users className="h-4 w-4 text-muted-foreground" />
    //         </CardHeader>
    //         <CardContent>
    //           <div className="text-2xl font-bold">+2350</div>
    //           <p className="text-xs text-muted-foreground">
    //             +180.1% from last month
    //           </p>
    //         </CardContent>
    //       </Card>
    //       <Card x-chunk="dashboard-01-chunk-2">
    //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //           <CardTitle className="text-sm font-medium">Sales</CardTitle>
    //           <CreditCard className="h-4 w-4 text-muted-foreground" />
    //         </CardHeader>
    //         <CardContent>
    //           <div className="text-2xl font-bold">+12,234</div>
    //           <p className="text-xs text-muted-foreground">
    //             +19% from last month
    //           </p>
    //         </CardContent>
    //       </Card>
    //       <Card x-chunk="dashboard-01-chunk-3">
    //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //           <CardTitle className="text-sm font-medium">Active Now</CardTitle>
    //           <Activity className="h-4 w-4 text-muted-foreground" />
    //         </CardHeader>
    //         <CardContent>
    //           <div className="text-2xl font-bold">+573</div>
    //           <p className="text-xs text-muted-foreground">
    //             +201 since last hour
    //           </p>
    //         </CardContent>
    //       </Card>
    //     </div>
    //     <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    //       <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
    //         <CardHeader className="flex flex-row items-center">
    //           <div className="grid gap-2">
    //             <CardTitle>Transactions</CardTitle>
    //             <CardDescription>
    //               Recent transactions from your store.
    //             </CardDescription>
    //           </div>
    //           <Button asChild size="sm" className="ml-auto gap-1">
    //             <Link href="#">
    //               View All
    //               <ArrowUpRight className="h-4 w-4" />
    //             </Link>
    //           </Button>
    //         </CardHeader>
    //         <CardContent>
    //           <Table>
    //             <TableHeader>
    //               <TableRow>
    //                 <TableHead>Customer</TableHead>
    //                 <TableHead className="hidden xl:table-column">
    //                   Type
    //                 </TableHead>
    //                 <TableHead className="hidden xl:table-column">
    //                   Status
    //                 </TableHead>
    //                 <TableHead className="hidden xl:table-column">
    //                   Date
    //                 </TableHead>
    //                 <TableHead className="text-right">Amount</TableHead>
    //               </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //               <TableRow>
    //                 <TableCell>
    //                   <div className="font-medium">Liam Johnson</div>
    //                   <div className="hidden text-sm text-muted-foreground md:inline">
    //                     liam@example.com
    //                   </div>
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   Sale
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   <Badge className="text-xs" variant="outline">
    //                     Approved
    //                   </Badge>
    //                 </TableCell>
    //                 <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
    //                   2023-06-23
    //                 </TableCell>
    //                 <TableCell className="text-right">$250.00</TableCell>
    //               </TableRow>
    //               <TableRow>
    //                 <TableCell>
    //                   <div className="font-medium">Olivia Smith</div>
    //                   <div className="hidden text-sm text-muted-foreground md:inline">
    //                     olivia@example.com
    //                   </div>
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   Refund
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   <Badge className="text-xs" variant="outline">
    //                     Declined
    //                   </Badge>
    //                 </TableCell>
    //                 <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
    //                   2023-06-24
    //                 </TableCell>
    //                 <TableCell className="text-right">$150.00</TableCell>
    //               </TableRow>
    //               <TableRow>
    //                 <TableCell>
    //                   <div className="font-medium">Noah Williams</div>
    //                   <div className="hidden text-sm text-muted-foreground md:inline">
    //                     noah@example.com
    //                   </div>
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   Subscription
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   <Badge className="text-xs" variant="outline">
    //                     Approved
    //                   </Badge>
    //                 </TableCell>
    //                 <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
    //                   2023-06-25
    //                 </TableCell>
    //                 <TableCell className="text-right">$350.00</TableCell>
    //               </TableRow>
    //               <TableRow>
    //                 <TableCell>
    //                   <div className="font-medium">Emma Brown</div>
    //                   <div className="hidden text-sm text-muted-foreground md:inline">
    //                     emma@example.com
    //                   </div>
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   Sale
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   <Badge className="text-xs" variant="outline">
    //                     Approved
    //                   </Badge>
    //                 </TableCell>
    //                 <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
    //                   2023-06-26
    //                 </TableCell>
    //                 <TableCell className="text-right">$450.00</TableCell>
    //               </TableRow>
    //               <TableRow>
    //                 <TableCell>
    //                   <div className="font-medium">Liam Johnson</div>
    //                   <div className="hidden text-sm text-muted-foreground md:inline">
    //                     liam@example.com
    //                   </div>
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   Sale
    //                 </TableCell>
    //                 <TableCell className="hidden xl:table-column">
    //                   <Badge className="text-xs" variant="outline">
    //                     Approved
    //                   </Badge>
    //                 </TableCell>
    //                 <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
    //                   2023-06-27
    //                 </TableCell>
    //                 <TableCell className="text-right">$550.00</TableCell>
    //               </TableRow>
    //             </TableBody>
    //           </Table>
    //         </CardContent>
    //       </Card>
    //       <Card x-chunk="dashboard-01-chunk-5">
    //         <CardHeader>
    //           <CardTitle>Recent Sales</CardTitle>
    //         </CardHeader>
    //         <CardContent className="grid gap-8">
    //           <div className="flex items-center gap-4">
    //             <Avatar className="hidden h-9 w-9 sm:flex">
    //               <AvatarImage src="/avatars/01.png" alt="Avatar" />
    //               <AvatarFallback>OM</AvatarFallback>
    //             </Avatar>
    //             <div className="grid gap-1">
    //               <p className="text-sm font-medium leading-none">
    //                 Olivia Martin
    //               </p>
    //               <p className="text-sm text-muted-foreground">
    //                 olivia.martin@email.com
    //               </p>
    //             </div>
    //             <div className="ml-auto font-medium">+$1,999.00</div>
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Avatar className="hidden h-9 w-9 sm:flex">
    //               <AvatarImage src="/avatars/02.png" alt="Avatar" />
    //               <AvatarFallback>JL</AvatarFallback>
    //             </Avatar>
    //             <div className="grid gap-1">
    //               <p className="text-sm font-medium leading-none">
    //                 Jackson Lee
    //               </p>
    //               <p className="text-sm text-muted-foreground">
    //                 jackson.lee@email.com
    //               </p>
    //             </div>
    //             <div className="ml-auto font-medium">+$39.00</div>
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Avatar className="hidden h-9 w-9 sm:flex">
    //               <AvatarImage src="/avatars/03.png" alt="Avatar" />
    //               <AvatarFallback>IN</AvatarFallback>
    //             </Avatar>
    //             <div className="grid gap-1">
    //               <p className="text-sm font-medium leading-none">
    //                 Isabella Nguyen
    //               </p>
    //               <p className="text-sm text-muted-foreground">
    //                 isabella.nguyen@email.com
    //               </p>
    //             </div>
    //             <div className="ml-auto font-medium">+$299.00</div>
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Avatar className="hidden h-9 w-9 sm:flex">
    //               <AvatarImage src="/avatars/04.png" alt="Avatar" />
    //               <AvatarFallback>WK</AvatarFallback>
    //             </Avatar>
    //             <div className="grid gap-1">
    //               <p className="text-sm font-medium leading-none">
    //                 William Kim
    //               </p>
    //               <p className="text-sm text-muted-foreground">
    //                 will@email.com
    //               </p>
    //             </div>
    //             <div className="ml-auto font-medium">+$99.00</div>
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Avatar className="hidden h-9 w-9 sm:flex">
    //               <AvatarImage src="/avatars/05.png" alt="Avatar" />
    //               <AvatarFallback>SD</AvatarFallback>
    //             </Avatar>
    //             <div className="grid gap-1">
    //               <p className="text-sm font-medium leading-none">
    //                 Sofia Davis
    //               </p>
    //               <p className="text-sm text-muted-foreground">
    //                 sofia.davis@email.com
    //               </p>
    //             </div>
    //             <div className="ml-auto font-medium">+$39.00</div>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </main>
    // </div>
    <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <a
                href="#"
                title=""
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                {" "}
                Log in{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                {" "}
                Apply for free{" "}
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        {/* <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img className="hidden w-full lg:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="" />
            <img className="block w-full lg:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="" />
        </div> */}

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                {" "}
                Simplified credit cards for students{" "}
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              No more hassle taking loans and making payments. Try Postcrats
              credit card, make your life simple.
            </p>

            <a
              href="#"
              title=""
              className="flex w-[900px] mx-auto items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Apply for free
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 ">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0"
                  width="31"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                    fill="#0B1715"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                    fill="#0B1715"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">
                  Over 12,000 students joined
                </p>
              </div>

              <div className="flex items-center">
                <svg
                  className="flex-shrink-0"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12.6667L9.25 15L16 8"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">
                  No yearly charges, maximum limits
                </p>
              </div>

              <div className="flex items-center">
                <svg
                  className="flex-shrink-0"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">
                  Secured & safe online payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
