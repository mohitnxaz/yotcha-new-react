import tickIcon from "../../../../public/icons/mdi_tick.svg";

interface SubAmenityType {
  id: number;
  name: string;
}

interface AmenityType {
  amenityId: number;
  amenityName: string;
  selectedSubAmenities: SubAmenityType[];
}

interface AmenitiesProps {
  amenities: AmenityType[];
}
const Aminities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <div className="flex flex-wrap">
      {amenities?.map((amenity) => (
        <div
          key={amenity.amenityId}
          className="flex md:flex-row flex-col items-start w-full border-t-[1px] border-[#E6EAF1] py-[10px]"
        >
          <div className="flex items-center gap-[10px] max-w-[260px] w-full mb-4 md:mb-0">
            <div className="font-[400]  text-[15.75px] leading-[27.2px] text-[#4E5c79]">
              {amenity.amenityName}
            </div>
          </div>
          <ul className="md:pl-[30px] flex flex-wrap gap-y-[10px]">
            {amenity.selectedSubAmenities.map((subAmenity) => (
              <li
                key={subAmenity.id}
                className="font-[400] text-[14px] leading-[24px] text-[#4E5c79] flex gap-[10px] w-[250px] "
              >
                <img src={tickIcon} alt="" width={20} height={20} />
                <p className="">{subAmenity.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Aminities;
