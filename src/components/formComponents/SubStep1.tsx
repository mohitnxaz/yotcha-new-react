import React, { useEffect, useState } from "react";
// import sell from "../../../../../public/sell.svg";
import sell from "../../../public/sell.svg";

import rent1 from "../../../public/rent.svg";
import rent from "../../../public/rent1.svg";
import sell1 from "../../../public/sell1.svg";

import { useFormikContext } from "formik";
import FormikCard from "./components/FormikCard";

type Option = "SALE" | "RENT" | null;

interface FormValues {
  property: {
    property_status: Option;
  };
}
interface SubStep1Props {
  next: () => void;
}

const SubStep1: React.FC<SubStep1Props> = ({ next }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(null);
  const { values, setFieldValue } = useFormikContext<FormValues>();

  useEffect(() => {
    setSelectedOption(values.property?.property_status || null);
  }, [values.property?.property_status]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setFieldValue("property.property_status", option);
    next();
  };

  return (
    <FormikCard title={"Are you looking to sell or rent? "}>
      <div className="flex justify-center flex-wrap gap-x-[112px] gap-y-[20px] ">
        <div
          className={`bg-[#00C5B4] flex flex-col items-center justify-center h-[200px] w-[200px] rounded-[50%] border-[3px] border-[#00C5B4]  gap-y-[20px] hover:cursor-pointer ${
            selectedOption === "SALE" ? "bg-transparent" : ""
          }`}
          onClick={() => handleOptionClick("SALE")}
        >
          <img src={selectedOption === "SALE" ? sell1 : sell} alt={""} />
          <p
            className={`text-[40px] font-[400] capitalize select-none  ${
              selectedOption === "SALE" ? "text-[#00C5B4]" : "text-white"
            }`}
          >
            Sell
          </p>
        </div>
        <div
          className={`bg-[#00C5B4] flex flex-col items-center justify-center h-[200px] w-[200px] rounded-[50%] border-[3px] border-[#00C5B4]  gap-y-[20px] hover:cursor-pointer ${
            selectedOption === "RENT" ? "bg-transparent" : ""
          }`}
          onClick={() => handleOptionClick("RENT")}
        >
          <img src={selectedOption === "RENT" ? rent1 : rent} alt={""} />
          <p
            className={`text-[40px] font-[400] capitalize select-none  ${
              selectedOption === "RENT" ? "text-[#00C5B4]" : "text-white"
            }`}
          >
            rent
          </p>
        </div>
      </div>
    </FormikCard>
  );
};

export default SubStep1;
