import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-blue-300 min-h-screen h-[3000px] ">
      Dashboard
      <br></br>
      <p className="my-12 mx-2">
        <Link
          href="/dashboard/create"
          className="bg-green-300 p-4 my-4 rounded"
        >
          New event
        </Link>
      </p>
      <br></br>
      1.Summary of tickets and events 2.Upcoming events 3.Latest orders
    </div>
  );
};

export default Dashboard;
