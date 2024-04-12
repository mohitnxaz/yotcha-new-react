// import propertyImg from "../../../../public/property.jpg";
 import propertyImg from "../../../public/property.jpg";

import { ItemListsProp } from "../../types";
import FeaturedPropertyCardSingle from "./FeaturedPropertyCard";

const FeaturedProperties: React.FC<ItemListsProp> = ({ items }) => {
  return (
    <div className="flex flex-col gap-[30px] ">
      <div className="text-[#222] text-[18px] font-[600] leading-[21.6px] border-b pb-[20px] pt-[1px]">
        Featured Property
      </div>
      {items?.map((item, index) => (
        <FeaturedPropertyCardSingle
          id={item.id}
          key={index}
          name={item.property_name}
          address={item.address}
          price={item.price}
          beds={item.bed_room}
          baths={item.bath_room}
          area={item.area}
          areaUnit={item.area_unit}
          addedDate={item.property_type.created_at}
          image={propertyImg}
          isFromDetailsPage={false}
        />
      ))}
    </div>
  );
};

export default FeaturedProperties;
