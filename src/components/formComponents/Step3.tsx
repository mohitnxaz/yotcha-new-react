import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import dollor from "../../../../../public/dollor.svg";
import dollor from "../../../public/dollor.svg";

import FormTableComponent from "../FormTableComponent";
import FormTextArea from "../FormTextArea";
import { useFormikContext } from "formik";
import { Property } from "../../types";
import FormikCard from "./components/FormikCard";

interface Step3Props {
  next: () => void;
  prev: () => void;
}

const Step3: React.FC<Step3Props> = ({}) => {
  const { values, setFieldValue } = useFormikContext<Property>();
  const recentPriceData = [
    {
      date: "Dec 2023 - 1",
      unit: "#11-XX - Blk 15",
      size: 150,
      price: {
        total: "S$ 1.69M",
        psf: "S$ 11,300.00 psf",
      },
      projectName: "Example Project",
      address: "123 Main St",
      propertyType: "Condo",
      tenure: "Freehold",
      typeOfArea: "Built-up",
      areaSqft: 1500,
      priceTotal: "$1,000,000",
      pricePsf: "$666.67",
    },
    {
      date: "Dec 2023 - 2",
      unit: "#13-XX - Blk 25",
      size: 180,
      price: {
        total: "S$ 2.03M",
        psf: "S$ 11,277.78 psf",
      },
      projectName: "Sunset Residences",
      address: "456 Oak St",
      propertyType: "Apartment",
      tenure: "Leasehold",
      typeOfArea: "Carpet",
      areaSqft: 1600,
      priceTotal: "$1,200,000",
      pricePsf: "$750.00",
    },
    {
      date: "Dec 2023 - 3",
      unit: "#14-XX - Blk 30",
      size: 120,
      price: {
        total: "S$ 1.35M",
        psf: "S$ 11,250.00 psf",
      },
      projectName: "Green Gardens",
      address: "789 Pine St",
      propertyType: "Townhouse",
      tenure: "Freehold",
      typeOfArea: "Gross",
      areaSqft: 1300,
      priceTotal: "$900,000",
      pricePsf: "$692.31",
    },
    {
      date: "Dec 2023 - 2",
      unit: "#13-XX - Blk 25",
      size: 180,
      price: {
        total: "S$ 2.03M",
        psf: "S$ 11,277.78 psf",
      },
      projectName: "Sunset Residences",
      address: "456 Oak St",
      propertyType: "Apartment",
      tenure: "Leasehold",
      typeOfArea: "Carpet",
      areaSqft: 1600,
      priceTotal: "$1,200,000",
      pricePsf: "$750.00",
    },
    {
      date: "Dec 2023 - 3",
      unit: "#14-XX - Blk 30",
      size: 120,
      price: {
        total: "S$ 1.35M",
        psf: "S$ 11,250.00 psf",
      },
      projectName: "Green Gardens",
      address: "789 Pine St",
      propertyType: "Townhouse",
      tenure: "Freehold",
      typeOfArea: "Gross",
      areaSqft: 1300,
      priceTotal: "$900,000",
      pricePsf: "$692.31",
    },
  ];

  return (
    <div className="flex flex-col md:gap-y-[50px] gap-y-[20px] w-full">
      <FormikCard title={"Set your price"}>
        <div className="flex flex-col md:gap-y-[29px] gap-y-[20px] md:w-[43%]">
          <p className="text-[20px] text-black font-[500] uppercase text-center">
            Asking Price
          </p>
          <div className="flex h-[60px]">
            <Button className="px-[26px] bg-[#00C5B4] hover:bg-[#3cb4ac] h-full rounded-[4px_0px_0px_4px] ">
              <img src={dollor} alt={""} />
            </Button>
            <Input
              placeholder={"Enter desired selling price"}
              title={""}
              value={values.property.price}
              onChange={(e: { target: { value: any } }) =>
                setFieldValue("property.price", e.target.value)
              }
              className="rounded-[0px_4px_4px_0px] border-[rgba(0,0,0,0.10)] h-full"
            />
          </div>
        </div>
      </FormikCard>
      <div
        className={`flex flex-col border-[1px] border-[#e6eaf1] rounded-[6px]  shadow-[0px_0px_10px_rgba(71,85,95,0.08)] py-[60px] md:px-[50px] px-[20px] bg-white items-center max-w-full`}
      >
        <div className="flex flex-col gap-[42px] w-full">
          <p className="text-[16px]  font-[500] text-black ">
            Here’s some recent transaction in your neighborhood
          </p>
          <div>
            <FormTableComponent data={recentPriceData} />
          </div>
        </div>
      </div>
      <FormikCard>
        <div className="w-full border-[2px] border-dashed border-[#00C5B4] rounded-[6px] flex flex-col items-center md:px-[30px] px-[15px] md:py-[60px] py-[30px]">
          <p className="text-[#0B2C3D] text-[18px] font-[600] leading-[30px] select-none">
            Make a final pitch,
          </p>
          <p className="text-[#0B2C3D] text-[18px] font-[600] leading-[30px] select-none">
            Tell your prospective buyer why your home is worth your listed price
          </p>
          <FormTextArea
            title={""}
            placeholder="You can provide as much details as you want to fill up this space"
            rows={4}
            className="mt-[40px] mb-[10px] w-full"
          />
          <div className="flex justify-start md:w-[80%]">
            <p className="text-[#454545] text-[14px] font-[400] select-none ">
              This information will be shown part of the property listing
              description
            </p>
          </div>
        </div>
      </FormikCard>
    </div>
  );
};

export default Step3;
