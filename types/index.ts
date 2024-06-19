export interface paramProps {
  params: {
    id: string;
  };
  searchParams?: {
    query?: string;
  };
}

export interface FetchReturnType {
  data: Record<string, any> | null;
  error: { message: string; status: number } | null;
}

export interface EventType {
  id: string;
  organisation_id: string;
  category: string;
  name: string;
  location: string;
  start_date_time: string;
  end_date_time: string;
  multi_day: boolean;
  virtual: boolean;
  details: string;
  cover_image: string;
  visibility: "PUBLIC" | "PRIVATE";
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
}

export interface TicketType {
  id: string;
  event_id: string;
  name: string;
  price: number;
  type: "PAID" | "FREE" | "DONATION";
  quantity: number;
  description: string;
  status: "ON_SALE" | "SOLD_OUT";
  start_sale: string;
  end_sale: string;
  created_at: string;
}

export interface OrderTicket {
  ticket_id: string;
  quantity: number;
}

export interface OrderType {
  eventId: string;
  orderTickets: OrderTicket[];
}

export interface PaymentRequest {
  BusinessShortCode: string;
  Password: string;
  Timestamp: string;
  TransactionType: "CustomerPayBillOnline";
  Amount: string;
  PartyA: string;
  PartyB: string;
  PhoneNumber: string;
  CallBackURL: string;
  AccountReference: string;
  TransactionDesc: string;
}
export interface TransactionResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}
