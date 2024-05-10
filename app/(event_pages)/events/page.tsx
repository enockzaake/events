import Link from "next/link";
import { paramProps } from "@/types";
import { getEvents } from "@/actions/userActions";

// 1. All events
// 2. Filters -> params & searchParams
// 3. Categories
const AllEvents = async () => {
  const events = await getEvents();
  return (
    <div>
      All events
      <Link href={`/event/${"228eb132-770b-4336-b4b4-41a00f440bf2"}`}>
        <button className="bg-blue-500 p-2 rounded ml-12 mt-4">EVENT 12</button>
      </Link>
      <div className="">
        <pre>{JSON.stringify(events, null, 2)}</pre>
      </div>
    </div>
  );
};

export default AllEvents;
