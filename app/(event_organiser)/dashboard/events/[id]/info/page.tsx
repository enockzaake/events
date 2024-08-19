import EventDetailsNavBar from "@/components/eventDetailsNavBar";
import React from "react";

const EventInfo = ({ params: id }: any) => {
  return (
    <div className="mx-1">
      <EventDetailsNavBar event_id={id} />
      EventInfo
    </div>
  );
};

export default EventInfo;
