import { RatingProps } from "../../types";
import ProgressBarRating from "./ProgressBarRating";
import StarIcons from "./StarIcon";


const Ratings: React.FC<RatingProps> = ({ ratings }) => (
  <div className="sm:grid sm:grid-cols-6 gap-x-[50px]">
    <div className="col-span-2 flex items-center flex-col py-[9px] px-[11px] sm:border-e-2 2xl:col-span-1">
      <div className="text-[#2A2F3A] text-[40px] font-[600] leading-[58px]">
        {ratings.average}
      </div>
      <div className="text-[#4E5C79] text-[14.414px] font-[600] leading-[58px]">
        out of 5.0
      </div>
      <div className="leading-[15px]">
        <StarIcons rating={ratings.average} />
      </div>
    </div>
    <div className="col-span-4 flex justify-between flex-wrap p-[5px 0 0 15px] ">
      <div className="flex flex-col w-[218px] ">
        <div className="text-[#4C4F5A] text-[13.3414px] font-[600] leading-[22px]">
          Property
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <ProgressBarRating rating={1} />
          </div>
          <div
            className="bg-[#F4F5F7] rounded-full w-[30px] h-[30px] flex items-center justify-center 
          text-[#4C4F5A] text-[12px] font-[600]"
          >
            {ratings.property}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[218px] ">
        <div className="text-[#4C4F5A] text-[13.3414px] font-[600] leading-[22px]">
          Value for money
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <ProgressBarRating rating={4} />
          </div>
          <div
            className="bg-[#F4F5F7] rounded-full w-[30px] h-[30px] flex items-center justify-center 
          text-[#4C4F5A] text-[12px] font-[600]"
          >
            {ratings.valueforMoney}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[218px] ">
        <div className="text-[#4C4F5A] text-[13.3414px] font-[600] leading-[22px]">
          address
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <ProgressBarRating rating={4} />
          </div>
          <div
            className="bg-[#F4F5F7] rounded-full w-[30px] h-[30px] flex items-center justify-center 
          text-[#4C4F5A] text-[12px] font-[600]"
          >
            {ratings.address}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[218px] ">
        <div className="text-[#4C4F5A] text-[13.3414px] font-[600] leading-[22px]">
          Support
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <ProgressBarRating rating={5} />
          </div>
          <div
            className="bg-[#F4F5F7] rounded-full w-[30px] h-[30px] flex items-center justify-center 
          text-[#4C4F5A] text-[12px] font-[600]"
          >
            {ratings.support}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ratings;
