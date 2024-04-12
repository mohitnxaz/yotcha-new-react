import React from "react";
import tickIcon from "../../../public/icons/mdi_tick.svg";
import { AmenitiesProps } from "../../types";

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  if (!amenities) {
    return <div>Loading...</div>;
  }

  // Organize amenities by their types
  const amenitiesByType = amenities.reduce((acc, amenity) => {
    const {
      amenity_type: { name: typeName },
    } = amenity;
    if (!acc[typeName]) {
      acc[typeName] = [];
    }
    acc[typeName].push(amenity.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="flex flex-wrap">
      {Object.entries(amenitiesByType).map(([typeName, subAmenities]) => (
        <div
          key={typeName}
          className="   w-full border-t-[1px] border-[#E6EAF1] py-[10px]"
        >
          <div className="font-[600]  text-[15.75px] leading-[27.2px] text-[#4E5c79] pb-[3px]">
            {typeName}
          </div>
          <div className="flex flex-wrap gap-y-[10px]">
            {subAmenities.map((subAmenity) => (
              <div
                key={subAmenity}
                className="font-[400] text-[15px] leading-[27px] text-[#4E5c79] flex gap-[10px] w-[250px] "
              >
                <img src={tickIcon} alt="" width={20} height={20} />
                <p>{subAmenity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
