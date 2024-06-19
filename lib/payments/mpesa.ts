import "dotenv/config";
import fetch from "node-fetch";
export {};

import { FetchReturnType, PaymentRequest, TransactionResponse } from "@/types";

let TOKEN_EXPIRY_TIME = 3599 * 1000;
let ACCESS_TOKEN = "";
let TOKEN_LAST_REFRESHED = 0;

const {
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORT_CODE,
  MPESA_PASS_KEY,
  MPESA_AUTH_URL,
  MPESA_STK_PUSH_URL,
  MPESA_CALL_BACK_URL,
} = process.env;

async function getAccessToken(): Promise<FetchReturnType> {
  try {
    if (Date.now() - TOKEN_LAST_REFRESHED < TOKEN_EXPIRY_TIME) {
      return { data: { token: ACCESS_TOKEN }, error: null };
    }
    const AUTH_KEY = Buffer.from(
      `${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`
    ).toString("base64");

    const res = await fetch(MPESA_AUTH_URL as string, {
      method: "GET",
      headers: {
        Authorization: `Basic ${AUTH_KEY}`,
      },
    });

    const data: any = await res.json();

    ACCESS_TOKEN = data.access_token;
    TOKEN_LAST_REFRESHED = Date.now();
    return { data: { token: ACCESS_TOKEN }, error: null };
  } catch (error: any) {
    console.error("Error fetching access token:", error.message);
    return { data: null, error: { message: error.message, status: 500 } };
  }
}

function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export async function RequestPayment(
  phoneNumber: string | null,
  orderId: string | null
): Promise<FetchReturnType> {
  if (!phoneNumber) {
    return {
      data: null,
      error: { message: "Missing phone number.", status: 400 },
    };
  }
  if (!orderId) {
    return {
      data: null,
      error: { message: "Missing order ID.", status: 400 },
    };
  }

  try {
    const TIME_STAMP = getTimestamp();
    const PASSWORD = Buffer.from(
      `${MPESA_SHORT_CODE}${MPESA_PASS_KEY}${TIME_STAMP}`
    ).toString("base64");

    const data = await getAccessToken();

    const body: PaymentRequest = {
      BusinessShortCode: MPESA_SHORT_CODE as string,
      Password: PASSWORD,
      Timestamp: TIME_STAMP,
      TransactionType: "CustomerPayBillOnline",
      Amount: "1",
      PartyA: phoneNumber,
      PartyB: MPESA_SHORT_CODE as string,
      PhoneNumber: phoneNumber,
      CallBackURL: `${MPESA_CALL_BACK_URL}?order_id=${orderId}`,
      AccountReference: "EVENTLY",
      TransactionDesc: "Evently payment",
    };

    const res = await fetch(MPESA_STK_PUSH_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        Authorization: `Bearer ${data.data?.token as string}`,
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const jsonRes = (await res.json()) as TransactionResponse;
      console.log("STKPUSH ENDPOINT RESPONSE:", jsonRes);

      return {
        data: {
          message: jsonRes.CustomerMessage,
          status: jsonRes.ResponseCode,
        },
        error: null,
      };
    } else {
      const jsonRes = (await res.json()) as any;
      return {
        data: null,
        error: {
          message: jsonRes.errorMessage,
          status: 500,
        },
      };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

export async function getTransactionStatus() {
  const URL =
    "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query";

  const token = await getAccessToken();

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      BusinessShortCode: " ",
      Password: " ",
      Timestamp: " ",
      CheckoutRequestID: " ",
    }),
  });
}
