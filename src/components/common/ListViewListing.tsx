// import horizontalProperty from "../../../../public/icons/Rectangle 2.jpg";
import horizontalProperty from "../../../public/icons/Rectangle 2.jpg";
import { ItemListsProp } from "../../types";
import PropertyListCardHorizontal from "./PropertyListCardHorizontal";

const ListViewListing: React.FC<ItemListsProp> = ({ items }) => {
  return (
    <div className="grid gap-[30px] grid-cols-1">
      {items?.map((item, index: number) => (
        <PropertyListCardHorizontal
          id={item.id}
          name={item.property_name}
          key={index}
          address={item.address}
          price={item.price}
          beds={item.bed_room}
          baths={item.bath_room}
          area={item.area}
          areaUnit={item?.area_unit}
          addedDate={item?.property_type?.created_at}
          image={horizontalProperty}
          isFromDetailsPage={false}
        />
      ))}
    </div>
  );
};

export default ListViewListing;
