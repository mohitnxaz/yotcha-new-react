// import propertyImg from "../../../../public/property.jpg";
import propertyImg from "../../../public/property.jpg";
import { ItemListsProp } from "../../types";
import PropertyListCard from "./PropertyListCard";

const GridViewListing: React.FC<ItemListsProp> = ({ items }) => {
  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
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
          addedDate={item.property_type?.created_at}
          image={propertyImg}
          isFromDetailsPage={false}
        />
      ))}
    </div>
  );
};

export default GridViewListing;
