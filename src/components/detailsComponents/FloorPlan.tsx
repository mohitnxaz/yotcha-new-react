import { FloorPlanProps } from "../../types";


const FloorPlan: React.FC<FloorPlanProps> = ({ imgLink }) => {
  return (
    <div>
      <img src={imgLink} />
    </div>
  );
};

export default FloorPlan;
