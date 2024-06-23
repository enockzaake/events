import { paramProps } from "@/types";

const EventOverview = ({ params }: paramProps) => {
  return <div>{params.id}</div>;
};

export default EventOverview;
