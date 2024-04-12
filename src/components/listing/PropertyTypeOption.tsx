import { Tabs, TabsTrigger, TabsList, TabsContent } from "../ui/tabs";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useState } from "react";
import { useSelector } from "react-redux";

interface PropertyTypeOptonProps {}

const PropertyTypeOpton: React.FC<PropertyTypeOptonProps> = ({}) => {
  const [selectedTabId, setSelectedTabId] = useState("1");
  const filterValuesPropertyType = useSelector(
    (state: any) => state.filter.filterValues.propertyType
  );
  const filterValuesPropertySubType = useSelector(
    (state: any) => state.filter.filterValues.propertySubType
  );

  const handleSelectedTab = (id: number) => {
    setSelectedTabId(id.toString());
    console.log(selectedTabId);
  };
  return (
    <div className="">
      <Tabs defaultValue="all">
        <TabsList className="sm:grid flex flex-wrap mb-[40px] gap-[4px] lg:grid-cols-4 p-0 md:grid-cols-2 sm:gap-x-[10px]">
          {filterValuesPropertyType?.map((option: any, index: number) => (
            <TabsTrigger
              onClick={() => handleSelectedTab(option?.id)}
              key={index}
              value={option?.id.toString()}
              className="text-[14px] font-[400] leading-[16.5px] rounded-[16px] bg-[#CECECE] text-[#000] data-[state=active]:font-[500] data-[state=active]:bg-[rgba(0,197,180,0.24)]"
            >
              {option?.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {filterValuesPropertySubType
          .filter(
            (a: any) =>
              a.property_type_id.toString() === selectedTabId.toString()
          )

          .map((subOption: any, index: number, array: any[]) => (
            <TabsContent key={subOption.id} value={selectedTabId.toString()}>
              <div
                className={`flex justify-between border-b p-[4px] sm:pb-[17px] sm:mt-[25px] ${
                  index === array.length - 1 ? "border-none" : ""
                }`}
              >
                <label
                  htmlFor={subOption?.id}
                  className="text-black-subTitle font-[600] leading-[24px] text-[16px]"
                >
                  {subOption?.name}
                </label>
                <Checkbox
                  id={subOption?.id}
                  className="rounded-[2px] border-2 border-[#DAE3EC] w-[20px] h-[20px]"
                />
              </div>
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
};

export default PropertyTypeOpton;
