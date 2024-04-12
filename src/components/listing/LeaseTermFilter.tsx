import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { AddFilterToUrlReturnQueryString, updateQueryUsingJs } from "../../utils/filter";
import React from "react";
import WhiteButton from "../WhiteButton";
interface LeaseTermFilterProp {}

const LeaseTermFilter: React.FC<LeaseTermFilterProp> = ({}) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state: any) => state.filter.selectedFilters.lease_term
  );
  const data = [
    { id: 0, name: "any" },
    { id: 1, name: "99-103 yrs" },
    { id: 2, name: "999 yrs" },
    { id: 3, name: "Freehold" },
  ];

  const [selectedButtons, setSelectedButtons] =
    useState<number[]>(selectedFilters);

  const handleClickEvent = async (index: number) => {
    const alreadySelected: boolean = selectedButtons?.includes(index);
    const newSelectedButtons = alreadySelected
      ? selectedButtons.filter((buttonIndex:number) => buttonIndex !== index)
      : [...selectedButtons, index];
    setSelectedButtons(newSelectedButtons);
    // dispatch(setFilterBedroom(newSelectedButtons));
    dispatch(
      setFilterFields({
        lease_term: newSelectedButtons,
      })
    );

    // dispatch(getFilteredListings(response?.data));
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

export default LeaseTermFilter;
