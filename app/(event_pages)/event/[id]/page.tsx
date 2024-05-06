import React from "react";

interface paramProps {
  params?: {
    id?: string;
  };
  searchParams?: {
    query?: string;
  };
}
// 1. All events
// 2. Filters -> params & searchParams
// 3. Categories

const EventPage = ({ params, searchParams }: paramProps) => {
  return <div>EventPage: {JSON.stringify(params)}</div>;
};

export default EventPage;
