import React from "react";
// import addressIcon from "../../../../public/icons/pin.svg.svg";
import addressIcon from "../../../public/icons/pin.svg.svg";
import bedIcon from "../../../public/icons/fleat-icon.svg";
import bathIcon from "../../../public/icons/fleat-icon (1).svg";
import moveIcon from "../../../public/icons/move-icon.svg";
import personOne from "../../../public/icons/person1.png";
import calender from "../../../public/icons/ep_calendar.svg";
import avatarAgent from "../../../public/agentIcon.png";
import { AgentListCardProps } from "../../types";
import { Link } from "react-router-dom";
import { dateFormatter } from "../../utils/general/dateFormatter";
import GreenButton from "../GreenButton";
import StarIcons from "../detailsComponents/StarIcon";

const AgentListCard: React.FC<AgentListCardProps> = ({
  agent_id,
  id,
  profile_pic_path,
  companyImage,
  fullname,
  email,
  phone,
  salesNumber,
  rentLisiting,
  companyName,
  reviewNumber,
  estate_agency,
  cea_number,
}) => {
  return (
    <Link to={`/agent-directory/${id}`}>
      <div className="min-h-[484px] rounded-[8px] relative bg-[white] hover:cursor-pointer shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)] z-10 overflow-hidden hover:scale-[1.01] transition duration-200 delay-100">
        <div>
          <img
            src={avatarAgent}
            alt={""}
            className="w-full h-[120px] object-contain"
          />
        </div>
        <div className="flex py-[15px] px-[24px] flex-col gap-[20px]">
          <div className="flex flex-col gap-y-[12px]">
            <div className="flex flex-wrap justify-between">
              <div className="text-black-title text-[18px] font-[600] leading-[25px] text-ellipsis whitespace-nowrap overflow-hidden">
                {fullname}
              </div>
              <div className="flex justify-between w-full flex-wrap mt-2">
                <div className="flex gap-4 items-center ">
                  <StarIcons rating={4} />
                  <div className="text-black-subTitle text-[14px] font-[400] leading-[22px]">
                    200 reivews
                  </div>
                </div>
                <div className="text-black-title text-[16px] text-ellipsis">
                  {cea_number}
                </div>
              </div>
            </div>

            <div className="flex items-center py-[1px] gap-[10px]">
              <div className="w-[18px] h-[18px]">
                <img src={addressIcon} alt="Locaiton" />
              </div>

              <div className="text-black-subTitle text-[14px] font-[400] leading-[22px]">
                Real Estate Compnay Name
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between  gap-[8px]">
            <div className="flex items-center gap-x-[7px]">
              <img src={bedIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                johndoe@gmail.com
              </div>
            </div>

            <div className="flex items-center gap-x-[7px]">
              <img src={bathIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                P+977 23423423423
              </div>
            </div>
            <div className="flex items-center gap-x-[7px]">
              <img src={bathIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                30 Sales Listings
              </div>
            </div>
            <div className="flex items-center gap-x-[7px]">
              <img src={bathIcon} alt="beds" />
              <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
                40 Rent Listings
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-2 flex-wrap pt-[14px]">
            <div className="text-black-subTitle leading-[21px] font-[400] text-[14px]">
              Are you a client?
            </div>
            <Link to={"/"}>
              <div className="text-primary leading-[21px] font-[400] text-[14px] hover:underline">
                {" "}
                Submit a review
              </div>
            </Link>

            {/* <div className="flex items-center justify-end gap-[7px] mt-[20px]">
              <img src={calender} alt="" />
              <div className="text-black-subTitle leading-[21px] font-[400] text-[13px]">
                {addedDate ? dateFormatter(addedDate) : "-"}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AgentListCard;
