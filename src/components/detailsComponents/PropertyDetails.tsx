import { dateFormatter } from "../../utils/general/dateFormatter";

interface PropertyDetailsProps {
  id: string;
  price: number;
  bath: number;
  type: string;
  room: number;
  garage: number;
  subType: string;
  status: string;
  bedroom: number;
  yearBuilt: string;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  id = "-",
  price = "-",
  bath = "-",
  type = "-",
  subType = "-",
  room = "-",
  garage = "-",
  status = "-",
  bedroom = "-",
  yearBuilt = "-",
}) => {
  return (
    <div className="flex align-start gap-y-[10px] flex-wrap">
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Property ID:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {id}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Property Type:
        </div>

        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {type}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Property Subtype:
        </div>

        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {subType}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Property status:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {status}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Property Price:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          ${price}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Room:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {room}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Bedrooms:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {bedroom}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Bath:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {bath}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Garages:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {garage}
        </div>
      </div>
      <div className="flex w-[230px] align-start gap-[5px]">
        <div className="text-[#555] text-[15px] font-[700] leading-[36px]">
          Year Built:
        </div>
        <div className="text-black-body text-[15px] font-[400] leading-[36px]">
          {dateFormatter(yearBuilt)}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
