// import bedIcon from "../../../../public/icons/fleat-icon.svg";
import bedIcon from "../../../public/icons/fleat-icon.svg";
import bathIcon from "../../../public/icons/fleat-icon (1).svg";
import moveIcon from "../../../public/icons/move-icon.svg";
import personOne from "../../../public/icons/person1.png";
import calender from "../../../public/icons/ep_calendar.svg";
import { Link } from "react-router-dom";
import { PropertyListCardProps } from "../../types";
import { dateFormatter } from "../../utils/general/dateFormatter";

const PropertyListCardHorizontal: React.FC<PropertyListCardProps> = ({
  image = "-",
  id,
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
    <Link to={`/listing/${id}`}>
      <div className="grid grid-cols-9 rounded-[8px] bg-[white] hover:cursor-pointer shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)] z-10 overflow-hidden hover:scale-[1.01] transition duration-200 delay-100">
        <div className="col-span-4">
          <img src={image} alt={""} className="w-full h-full" />
        </div>
        <div className="flex col-span-5 w-full flex-col pt-[30px] pb-[20px] px-[24px] gap-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-[#4E5C79] text-[13.8px] font-[400] leading-[21px]">
                {forRent ? "Rent" : "Sell"}
              </div>
              <div className="text-black-title text-[18px] font-[600] leading-[22.4px]">
                {name}
              </div>
            </div>
            <div
              className={` text-[22px] font-[600] leading-[30px] text-primary`}
            >
              ${price}
            </div>
          </div>
          <div className="text-black-subTitle text-[14px] font-[400] leading-[22.5px]">
            {address}
          </div>
          <div className="flex justify-between mt-[11px] gap-[34px]">
            <div className="flex items-center gap-x-[7px]">
              <img src={bedIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                {beds} Beds
              </div>
            </div>

            <div className="flex items-center gap-x-[7px]">
              <img src={bathIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                {baths} Baths
              </div>
            </div>

            <div className="flex items-center gap-x-[7px]">
              <img src={moveIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                {area} {areaUnit}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-2 ">
            <div className="flex items-center justify-end gap-[7px] mt-[20px] mb-[5px]">
              <img src={personOne} alt="" />
              <div className="text-black-subTitle leading-[21px] font-[400] text-[14px]">
                Jane Doe
              </div>
            </div>
            <div className="flex items-center justify-end gap-[7px] mt-[20px]">
              <img src={calender} alt="" />
              <div className="text-black-subTitle leading-[21px] font-[400] text-[13px]">
                {dateFormatter(addedDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyListCardHorizontal;
