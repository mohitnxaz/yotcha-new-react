import React from "react";
import healthIcon from "../../../public/icons/fa6-solid_user-doctor.svg";
import transportIcon from "../../../public/icons/mdi_taxi.svg";
import StarIcons from "./StarIcon";

interface NearbyEntry {
  name: string;
  distance: number;
  rating: number;
}

interface NearbyInformation {
  education: NearbyEntry[];
  health: NearbyEntry[];
  transportation: NearbyEntry[];
}

interface NearbyInfoProps {
  nearbyInfo: NearbyInformation;
}

const NearbyInfo: React.FC<NearbyInfoProps> = ({ nearbyInfo }) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[24px] ">
        <div className="flex gap-[7px] items-center">
          <div>
            <img src={healthIcon} alt={""} />
          </div>
          <div className="font-[700] text-[15.5px] leading-[16.4px] text-[#17A2B8]">
            Education
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] font-[500] sm:w-[220px] w-[150px]  leading-[15.84px]">
                Education Mandarin
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              <StarIcons rating={3.5} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] font-[500] sm:w-[220px] w-[150px]  leading-[15.84px]">
                The Kaplan
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={4.5} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] ">
        <div className="flex gap-[7px] items-center">
          <div>
            <img src={healthIcon} alt={""} />
          </div>
          <div className="font-[700] text-[15.5px] leading-[16.4px] text-primary">
            Health and Medical
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] font-[500] sm:w-[220px] w-[150px] leading-[15.84px]">
                Natural Market
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={5} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] sm:w-[220px] w-[150px] font-[500] leading-[15.84px]">
                A Matter of Health
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={0} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] font-[500] sm:w-[220px] w-[150px] leading-[15.84px]">
                Food and Health
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={2} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] ">
        <div className="flex gap-[7px] items-center">
          <div>
            <img src={transportIcon} alt={""} />
          </div>
          <div className="font-[700] text-[15.5px] leading-[16.4px] text-red">
            Transportation
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <div className="flex ">
              <div className="text-black-body text-[14px] sm:w-[220px] w-[150px] font-[500] leading-[15.84px]">
                Airport Transportation
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={5} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px]  sm:w-[220px] w-[150px] font-[500] leading-[15.84px]">
                Airport Transportation
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={3} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div className="text-black-body text-[14px] sm:w-[220px] w-[150px] font-[500] leading-[15.84px]">
                Yatch Service
              </div>
              <div className="text-black-body text-[14px] font-[400] leading-[15.84px]">
                (15.61 miles)
              </div>
            </div>
            <div className="leading-[15.84px]">
              {" "}
              <StarIcons rating={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyInfo;
