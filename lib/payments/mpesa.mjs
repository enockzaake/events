import fetch from "node-fetch";

const MPESA_CONSUMER_KEY = "XWljc9wJYSblyeJAPH0dZk7IVS844JUxHwra6QFQoXojT9Wc";
const MPESA_CONSUMER_SECRET =
  "g3ayOnt19BfdILAGfcUFaYEKmnIn1quVLKUMeXfqtTPHasCcVfRb4Hd1MEWljCLM";

const MPESA_AUTH_URL =
  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

const MPESA_STK_PUSH_URL = // Request payment
  "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

let TOKEN_EXPIRY_TIME = 3599 * 1000;
let ACCESS_TOKEN = "";
let TOKEN_LAST_REFRESHED = 0;


const SHORT_CODE = "174379";
const PASS_KEY =
  "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
  
const CALL_BACK_URL =
  "http://q2xnvvfd-3000.inc1.devtunnels.ms/api/payments/mpesa_callback";

async function getAccessToken() {
  if (Date.now() - TOKEN_LAST_REFRESHED < TOKEN_EXPIRY_TIME) {
    return ACCESS_TOKEN;
  }
  const AUTH_KEY = btoa(MPESA_CONSUMER_KEY + ":" + MPESA_CONSUMER_SECRET);

  const res = await fetch(MPESA_AUTH_URL, {
    method: "GET",
    headers: {
      Authorization: `Basic ${AUTH_KEY}`,
    },
  });

  const data = await res.json();
  console.log("AUTH RESPONSE:", data);

  ACCESS_TOKEN = data.access_token;
  TOKEN_LAST_REFRESHED = Date.now();
  return ACCESS_TOKEN;
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

export async function RequestPayment(phoneNumber, orderId = "1234556") {
  const SHORT_CODE = "174379";
  const PASS_KEY =
    "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
  const TIME_STAMP = getTimestamp();
  const PASSWORD = btoa(SHORT_CODE + PASS_KEY + TIME_STAMP);
  const PHONE_NUMBER = "254112249963";

  const token = await getAccessToken();

  const res = await fetch(MPESA_STK_PUSH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      BusinessShortCode: SHORT_CODE,
      Password: PASSWORD,
      Timestamp: TIME_STAMP,
      TransactionType: "CustomerPayBillOnline",
      Amount: "1",
      PartyA: PHONE_NUMBER,
      PartyB: SHORT_CODE,
      PhoneNumber: PHONE_NUMBER,
      CallBackURL: `${CALL_BACK_URL}?order_id=${orderId}`,
      AccountReference: "EVENTLY",
      TransactionDesc: "Evently payment",
    }),
  });

  console.log("STKPUSH ENDPOINT:", await res.json());
  console.log("STKPUSH STATUS CODE:", res.status);

  // return await res.text();
}

async function getTransactionStatus(params) {
  const URL =
    "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query";

  const token = await getAccessToken();

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
      "BusinessShortCode": " " ,
      "Password": " ",
      "Timestamp": " ",
      "CheckoutRequestID": " "
    })
  });
}
