import { FormListCardProps } from "../../../types";
import bedIcon from "../../../../public/greenBeds.svg";
import bathIcon from "../../../../public/greenBaths.svg";
import moveIcon from "../../../../public/greenArea.svg";
import timeIcon from "../../../../public/greenTime.svg";
import pin from "../../../../public/location.svg";
import GreenButton from "../../GreenButton";

const FormListCard: React.FC<FormListCardProps> = ({
  image,
  name,
  address,
  price,
  beds,
  baths,
  area,
  buttonText,
  areaUnit,
}) => {
  return (
    <div className="grid md:grid-cols-5 w-full  select-none">
      <div className="md:col-span-2 col-span-3">
        <img
          src={image}
          alt={""}
          className="w-full h-[250px] object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="flex col-span-3 w-full flex-col pt-[30px] pb-[20px] md:px-[24px] md:gap-[16px]">
        <div className="text-black-title text-[18px] font-[600] leading-[22.4px]">
          {name}
        </div>

        <div className={` text-[22px] font-[600] leading-[30px] text-primary`}>
          ${price}
        </div>

        <div className="text-black-subTitle text-[15px] font-[400] leading-[22.5px] flex items-center gap-x-[10px]">
          <img src={pin} alt="pin" />
          {address}
          <GreenButton
            buttonText={`${buttonText}`}
            className="rounded-[50px] h-[23px] text-[14px] font-[400] leading-[21px] capitalize hover:bg-primary hover:text-white"
          />
        </div>
        <div className="flex  mt-[40px] gap-[34px] flex-wrap">
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
          <div className="flex items-center gap-x-[7px]">
            <img src={timeIcon} alt="beds" />
            <div className="text-black-subTitle leading-[21px] text-[13px] font-[600]">
              {area} {areaUnit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormListCard;
