import { paramProps } from "@/types";
import { getEventDetails } from "@/actions/userActions";

const EventPage = async ({ params, searchParams }: paramProps) => {
  const event = await getEventDetails(params?.id as string);

  return (
    <div>
      Event details:{JSON.stringify(event, null, 2)}
      <br></br>
    </div>
  );
};

export default EventPage;
