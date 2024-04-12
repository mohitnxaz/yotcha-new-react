import React from "react";
// import addressIcon from "../../../../public/icons/pin.svg.svg";
import addressIcon from "../../../public/icons/pin.svg.svg";
import bedIcon from "../../../public/icons/fleat-icon.svg";
import bathIcon from "../../../public/icons/fleat-icon (1).svg";
import moveIcon from "../../../public/icons/move-icon.svg";
import { Button } from "../ui/button";
import { DetailedCardProps } from "../../types";

const DetailedCard: React.FC<DetailedCardProps> = ({
  property_name = "-",
  address = "-",
  price = "-",
  bed_room = "-",
  bath_room = "-",
  area_unit = "-",
  area = "-",
  walking_distance,
}) => {
  return (
    <div className="flex py-[30px] px-[24px] flex-col items-start gap-[34px] rounded-[6px] border border-[#E6EAF1] bg-[white] shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)]">
      <div className="flex flex-col gap-y-[12px]">
        <div className="w-[55px] mb-[-2px]">
          <Button className="py-[4px] px-[20px] rounded-[30px] bg-[rgba(82,133,60,0.20)] border-none text-primary hover:bg-secondary-hover hover:text-[white] leading-[21px] font-[400] text-[14px]">
            Sale
          </Button>
        </div>
        <div className="text-black-title text-[18px] font-[600] leading-[25px]">
          {property_name}
        </div>
        <div className="flex items-center py-[1px] gap-[10px]">
          <div className="w-[18px] h-[18px]">
            <img src={addressIcon} alt="Locaiton" />
          </div>
          <div className="text-black-subTitle text-[14px] font-[400] leading-[22px]">
            {address}
          </div>
        </div>
        <div className="text-black-subTitle text-[13px] font-[400] leading-[22px]">
          {walking_distance}
        </div>
        <div className="text-primary text-[22px] font-[600] leading-[30px]">
          ${price}
        </div>
      </div>
      <div className="flex sm:gap-[34px] gap-[10px] sm:items-start ">
        <div className="flex items-center gap-[7px] flex-wrap">
          <img src={bedIcon} alt="beds" />
          <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
            {bed_room} Beds
          </div>
        </div>

        <div className="flex items-center gap-[7px] flex-wrap">
          <img src={bathIcon} alt="beds" />
          <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
            {bath_room} Baths
          </div>
        </div>

        <div className="flex items-center gap-[7px] flex-wrap">
          <img src={moveIcon} alt="beds" />
          <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
            {area} {area_unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
