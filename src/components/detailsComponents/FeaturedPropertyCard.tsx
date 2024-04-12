// import propertyImage from "../../../../public/icons/propertyImage.png";
import propertyImage from "../../../public/icons/propertyImage.png";
import propertyaddress from "../../../public/icons/propertyImage.png";
import { PropertyListCardProps } from "../../types";
import { dateFormatter } from "../../utils/general/dateFormatter";
import { Button } from "../ui/button";

const FeaturedPropertyCardSingle: React.FC<PropertyListCardProps> = ({
  id,
  image = "-",
  name = "-",
  address = "-",
  price = "-",
  beds = "-",
  baths = "-",
  area = "-",
  isFromDetailsPage = "-",
  addedBy = "-",
  addedDate = "-",
  agentImage = "-",
  forRent = "-",
  areaUnit = "-",
}) => {
  return (
    <div className="flex sm:flex-col lg:flex-row pb-[30px] items-center gap-[25px] border-b hover:scale-[1.02] hover:cursor-pointer ease-in-out transition">
      <img src={propertyImage} alt={""} />
      <div className="flex flex-col gap-[6px] flex-wrap">
        <div className="text-black-title sm:text-[16px] text-[14px] font-[700] leading-[16px]">
          {name}
        </div>
        <div className="text-[#4E5C79] sm:text-[12.18px] text-[9px] font-[400] leading-[19.5px]">
          {addedDate ? dateFormatter(addedDate) : "-"}
        </div>
        <div className="flex gap-x-[2px]">
          <img
            src={propertyaddress}
            alt={""}
            className="ml-[-3px] w-[4px] h-[4px]"
          />
          <div className="text-[#4E5C79] sm:text-[12.18px] text-[9px] font-[400] leading-[19.5px]">
            {address}
          </div>
        </div>
        <div>
          <Button className="px-[15px] h-[27px] w-full rounded-[50px] bg-[rgba(3,169,138,0.10)] border-none text-[#03A98A] hover:bg-secondary-hover hover:text-[white] font-[400] sm:text-[13px] text-[10px] ">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyCardSingle;
