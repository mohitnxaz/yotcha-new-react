import React from "react";
// import addressIcon from "../../../../public/icons/pin.svg.svg";
import addressIcon from "../../../public/icons/pin.svg.svg";
import bedIcon from "../../../public/icons/fleat-icon.svg";
import bathIcon from "../../../public/icons/fleat-icon (1).svg";
import moveIcon from "../../../public/icons/move-icon.svg";
import personOne from "../../../public/icons/person1.png";
import calender from "../../../public/icons/ep_calendar.svg";
import { PropertyListCardProps } from "../../types";
import { Link } from "react-router-dom";
import { dateFormatter } from "../../utils/general/dateFormatter";
import GreenButton from "../GreenButton";

const PropertyListCard: React.FC<PropertyListCardProps> = ({
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
  const textColor = isFromDetailsPage ? "text-secondary" : "text-primary";
  const bgColor = isFromDetailsPage ? "bg-secondary" : "bg-primary";
  return (
    <Link to={`/listing/${id}`}>
      <div className="min-h-[484px] rounded-[8px] relative bg-[white] hover:cursor-pointer shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)] z-10 overflow-hidden hover:scale-[1.01] transition duration-200 delay-100">
        <div>
          <img src={image} alt={""} className="w-full" />
        </div>
        <div className="flex py-[15px] px-[24px] flex-col gap-[20px]">
          <div className="flex flex-col gap-y-[12px]">
            <div className="text-black-title text-[18px] font-[600] leading-[25px] text-ellipsis whitespace-nowrap overflow-hidden">
              {name}
            </div>
            <div
              className={` text-[22px] font-[600] leading-[30px] ${textColor}`}
            >
              ${price}
            </div>
            <div className="flex items-center py-[1px] gap-[10px]">
              <div className="w-[18px] h-[18px]">
                <img src={addressIcon} alt="Locaiton" />
              </div>

              <div className="text-black-subTitle text-[14px] font-[400] leading-[22px]">
                {address}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between  gap-[19px]">
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
          <div className="flex items-center justify-between border-t-2 flex-wrap">
            <div className="flex items-center justify-end gap-[7px] mt-[20px] mb-[5px]">
              <img src={personOne} alt="" />
              <div className="text-black-subTitle leading-[21px] font-[400] text-[14px]">
                Jane Doe
              </div>
            </div>
            <div className="flex items-center justify-end gap-[7px] mt-[20px]">
              <img src={calender} alt="" />
              <div className="text-black-subTitle leading-[21px] font-[400] text-[13px]">
                {addedDate ? dateFormatter(addedDate) : "-"}
              </div>
            </div>
          </div>
        </div>

        <div>
          <GreenButton
            buttonText={"for sale"}
            className={`absolute left-[17px] top-[22px] z-20 px-[16px] h-[25px] hover:bg-[#00C5B6] hover:text-white uppercase  text-[13px] font-[500] ${bgColor}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default PropertyListCard;
