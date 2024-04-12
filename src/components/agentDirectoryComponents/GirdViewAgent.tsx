import propertyImg from "../../../public/property.jpg";
import { AgentListCardProps, AgentListItemProp } from "../../types";
import AgentListCard from "./AgentListCard";

const GridViewAgent: React.FC<AgentListItemProp> = ({ items }) => {
  console.log(items, "agent card");
  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {items?.map((item: AgentListCardProps, index: number) => (
        <AgentListCard
          key={index}
          id={item?.id}
          profile_pic_path={propertyImg}
          companyImage={propertyImg}
          fullname={item?.fullname}
          email={"sadjoe@gamil.com"}
          phone={"+23232323223"}
          salesNumber={21}
          rentLisiting={40}
          companyName={"HissLidnsof Relators"}
          reviewNumber={21}
          cea_number={"REC89762"}
          agent_id={item?.agent_id}
          estate_agency={""}
        />
      ))}
    </div>
  );
};

export default GridViewAgent;
