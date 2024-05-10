export interface paramProps {
  params?: {
    id?: string;
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
