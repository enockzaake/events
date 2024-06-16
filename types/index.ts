export interface paramProps {
  params: {
    id: string;
  };
  searchParams?: {
    query?: string;
  };
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
