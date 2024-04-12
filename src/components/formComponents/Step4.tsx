import React from "react";
import { useFormikContext } from "formik";
import FormCarousel from "../FormCarousel";
import FormVideoPlayer from "./components/FormVideoPlayer";
import { MainStepperForm } from "../../types";
import FormDetailCard from "./components/FormDetailCard";
import FormListCard from "./components/FormListCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import FormPropertyDetails from "./components/FormPropertyDetails";
import FormAmenities from "./components/FormAmenities";

interface Step4Props {
  prev: () => void;
}

const Step4: React.FC<Step4Props> = ({ prev }) => {
  const { values } = useFormikContext<MainStepperForm>();

  const { property } = values;

  const firstPhotoUrl =
    property.photos && property.photos[0]
      ? URL.createObjectURL(property.photos[0])
      : undefined;

  return (
    <div className="flex flex-col gap-y-[30px]">
      <FormDetailCard>
        <FormListCard
          id={0}
          image={firstPhotoUrl}
          name={property.property_name}
          address={property.address}
          price={property.price}
          beds={property.bed_room}
          baths={property.bath_room}
          area={property.area}
          buttonText={property.property_status}
        />
      </FormDetailCard>
      <FormDetailCard title="uploaded images">
        <Tabs defaultValue="main" className="w-full mt-[24px]">
          <TabsList className="grid grid-cols-3 mb-[24px]">
            <TabsTrigger
              value="main"
              className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] text-[16px]"
            >
              Main
            </TabsTrigger>
            <TabsTrigger
              value="sub1"
              className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] text-[16px]"
            >
              Floor Plan
            </TabsTrigger>
            <TabsTrigger
              value="sub2"
              className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] text-[16px]"
            >
              Property Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="main">
            <FormCarousel files={property.photos} />
          </TabsContent>
          <TabsContent value="sub1">
            {" "}
            <FormCarousel files={property.additionalPhotos} />
          </TabsContent>

          <TabsContent value="sub2">
            <FormVideoPlayer files={property.videos} />
          </TabsContent>
        </Tabs>
      </FormDetailCard>

      <FormDetailCard title="description">
        <div className="flex mt-[24px] gap-y-[24px]">
          <p className="text-[#666] text-[15px] font-[400] leading-[26px] text-start">
            {property.description}
          </p>
        </div>
      </FormDetailCard>
      <FormDetailCard title="Property Details">
        <div className="mt-[24px] w-full">
          <FormPropertyDetails
            id={""}
            price={property.price}
            bath={property.bath_room}
            type={property.property_type.name}
            room={0}
            garage={0}
            subType={""}
            status={property.property_status}
            bedroom={property.bed_room}
            yearBuilt={""}
          />
        </div>
      </FormDetailCard>
      <FormDetailCard title="amenities">
        <div className="mt-[24px] w-full">
          <FormAmenities amenities={property.selectedAmenities} />
        </div>
      </FormDetailCard>
      <FormDetailCard title="contact information">
        <div className="mt-[24px] w-full">
          <p className="text-black text-sm md:text-base font-normal leading-[27px]">
            Please ensure that all information provided is correct
          </p>
          <div className="flex flex-col items-start md:gap-y-4 pt-4 md:pt-[24px]">
            <div className="flex flex-wrap md:flex-nowrap gap-x-4 md:gap-x-12">
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-normal w-[50px] md:w-[auto]">
                Name
              </p>
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-semibold w-[100px] md:w-[auto]">
                Lincoln Mango
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-x-4 md:gap-x-12">
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-normal w-[50px] md:w-[auto]">
                Email
              </p>
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-semibold w-[100px] md:w-[auto] overflow-hidden">
                <span className="text-ellipsis">
                  mlincoln@exasdfsfsfsdfmple.com
                </span>
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-x-4 md:gap-x-12">
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-normal w-[50px] md:w-[auto]">
                Phone
              </p>
              <p className="text-[#4E5C79] text-sm md:text-base leading-[27px] font-semibold w-[100px] md:w-[auto]">
                9876543210
              </p>
            </div>
          </div>
        </div>
      </FormDetailCard>
    </div>
  );
};

export default Step4;
