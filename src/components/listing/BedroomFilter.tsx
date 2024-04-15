import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import {  setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { AddFilterToUrlReturnQueryString} from "../../utils/filter";
import WhiteButton from "../WhiteButton";


interface BedRoomFilterProp {}

const BedRoomFilter: React.FC<BedRoomFilterProp> = ({}) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state: any) => state.filter.selectedFilters.bed_room
  );
  const data = [
    { id: 0, name: "any" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5+" },
  ];

  const [selectedButtons, setSelectedButtons] =
    useState<number[]>(selectedFilters);
  const handleClickEvent = async (index: number) => {
    const alreadySelected: boolean = selectedButtons?.includes(index);
    const newSelectedButtons = alreadySelected
      ? selectedButtons.filter((buttonIndex) => buttonIndex !== index)
      : [...selectedButtons, index];
    setSelectedButtons(newSelectedButtons);
    dispatch(
      setFilterFields({
        bed_room: newSelectedButtons,
      })
    );
  };
  useEffect(() => {
    setSelectedButtons(selectedFilters);
  }, [selectedFilters]);
  return (
    <div className="flex flex-wrap gap-[12px]">
      {data.map((item: any, index: number) => (
        <WhiteButton
          key={index}
          click={() => handleClickEvent(index)}
          buttonText={item?.name}
          className={`text-[#000] text-[14px] leading-[16.5px] font-[400] rounded-[16px] bg-[#EFEEEE] py-[6px] px-[20px] h-min ${
            selectedButtons?.includes(index)
              ? "text-primary bg-[rgba(0,197,180,0.17)]"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default BedRoomFilter;