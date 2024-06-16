import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get("order_id");

  console.log("ORDER ID:", orderId);
  console.log("MPESA CALLBACK:", await request.json());

  return NextResponse.json({ status: "passed" });

  //For a response with custom status etc..
  // new Response('Message here!', {
  //   status: 300,
  //   headers: { 'content-type': header }
  // });
}
