import EventDetailsNavBar from "@/components/eventDetailsNavBar";
import React from "react";

const EventSettings = ({ params: id }: any) => {
  return (
    <div className="mx-1">
      <EventDetailsNavBar event_id={id} />
      EventSettings
    </div>
  );
};

export default EventSettings;
