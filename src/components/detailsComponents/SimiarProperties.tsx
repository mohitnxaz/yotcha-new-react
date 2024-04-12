import propertyImg from "../../../public/property.jpg";
import { ItemListsProp } from "../../types";
import PropertyListCard from "../common/PropertyListCard";

const SimiarProperties: React.FC<ItemListsProp> = ({ items }) => {
  return (
    <div className="mt-[50px] ">
      <div className="text-[#000] leading-[22px] text-[18.8px] font-[600] ">
        Similar Properties
        <div className="w-[50px] h-[3px] bg-secondary mt-[8px] mb-[50px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 min-w-[270px]">
        {items?.map((item, index) => (
          <PropertyListCard
            key={index}
            id={item.id}
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
    </div>
  );
};

export default SimiarProperties;
