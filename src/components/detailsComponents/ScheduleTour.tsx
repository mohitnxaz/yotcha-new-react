// import calendarIcon from "../../../../public/icons/ep_calendar (1).svg";
import calendarIcon from "../../../public/icons/ep_calendar (1).svg";
import subIcon from "../../../public/icons/minusIcon.png";
import addIcon from "../../../public/icons/addIcon.png";
import { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import React from "react";
import { useCreateNewTour } from "../../hooks/details/useScheduleTour";
import { TourScheduleData } from "../../types";
import DatePickerDemo from "../DatePicker";
import GreenButton from "../GreenButton";

const validataionScheme = yup.object({
  date: yup.string().required("Please select a date"),
  adultMembers: yup.number().required("Please specify number of people coming"),
  propertyId: yup.number().required(),
  agentId: yup.number().required(),
});

interface ScheduleTourProps {
  agentId: number;
  propertyId: number;
}

const ScheduleTour: React.FC<ScheduleTourProps> = ({ agentId, propertyId }) => {
  const [date, setDate] = React.useState<Date>();
  const [count, setCount] = useState(0);
  const [countC, setCountC] = useState(0);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleSubtractCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const handleAddCountC = () => {
    setCountC(countC + 1);
  };
  const handleSubtractCountC = () => {
    setCountC(countC > 0 ? countC - 1 : 0);
  };
  const { mutate } = useCreateNewTour();

  const formik = useFormik({
    initialValues: {},
    // validationSchema: validataionScheme,
    onSubmit: (values, helpers) => {
      //api still being fixed so tesing dummy data without validation
      const tourData: TourScheduleData = {
        // schedule_date: date ? date.toISOString() : "",
        schedule_date: "2024-01-30",
        children_members: countC,
        agent_id: agentId,
        property_id: propertyId,
        adult_members: count,
        schedule_time: "09:21:48.429Z",
      };

      mutate(tourData);
      setCount(0);
      setCountC(0);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-y-[33px]">
        <div className="flex justify-start gap-x-[10px]  border-b-2 pb-[11px]">
          <img src={calendarIcon} alt={""} />
          <div className="text-[#222] text-[18px] leading-[21.6px] font-[600]">
            Schedule a Tour
          </div>
        </div>
        <div className="flex justify-between items-center gap-y-[10px]">
          <div className="w-[42%]">
            <DatePickerDemo date={date} setDate={setDate} />
          </div>
          <div className="rounded-[4px] w-[42%] border-solid border-2 text-[#495057] text-[15px] px-[12px] py-[7px]">
            9:24 am
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-between justify-center items-center gap-y-[20px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[16px] leading-[#24px] font-[400] text-[#000] w-[137px]">
              Adult
            </div>
            <div className="flex justify-between">
              <img
                src={subIcon}
                alt={""}
                onClick={handleSubtractCount}
                className="hover:cursor-pointer"
              />
              <div className="text-[#495057] text-[15px] font-[400]">
                {count}
              </div>
              <img
                src={addIcon}
                alt={""}
                onClick={handleAddCount}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-[16px] leading-[#24px] font-[400] text-[#000] w-[137px]">
              Children
            </div>
            <div className="flex justify-between">
              <img
                src={subIcon}
                alt={""}
                onClick={handleSubtractCountC}
                className="hover:cursor-pointer"
              />
              <div className="text-[#495057] text-[15px] font-[400]">
                {countC}
              </div>
              <img
                src={addIcon}
                alt={""}
                onClick={handleAddCountC}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div>
          <GreenButton
            type="submit"
            buttonText={"Submit Request"}
            className="w-full hover:text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default ScheduleTour;
