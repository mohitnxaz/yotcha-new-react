import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { AddFilterToUrlReturnQueryString, updateQueryUsingJs } from "../../utils/filter";
import React from "react";
import WhiteButton from "../WhiteButton";

interface FurnishingSelectOptionProps {}

const FurnishingSelectOption: React.FC<FurnishingSelectOptionProps> = ({}) => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(
    (state: any) => state.filter.selectedFilters.furnished_status
  );
  const [selectedButton, setSelectedButton] = useState<
    "UNFURNISHED" | "PARTIAL_FURNISHED" | "FULLY_FURNISHED" | null
  >(selectedFilter);

  //furnishing also hardcoded values so no need to use opitons from api

  // const amenitiesData: any[] = useSelector(
  //   (state: any) => state?.filter?.filterValues?.features
  // );
  const data = [
    { id: 0, name: "unfurnished", value: "UNFURNISHED" },
    { id: 1, name: "partially furnished", value: "PARTIAL_FURNISHED" },
    { id: 2, name: "fully furnished", value: "FULLY_FURNISHED" },
  ];
  const handleClickEvent = async (value: any) => {
    if (selectedButton === value) {
      setSelectedButton(null);
    } else {
      setSelectedButton(value);
    }
    dispatch(
      setFilterFields({
        furnished_status: selectedButton === value ? null : value,
      })
    );

    // dispatch(getFilteredListings(response?.data));
  };

  // Filter amenities for "Furnishing" category
  // const furnishingCategory = amenitiesData?.find(
  //   (category) => category?.name === "Furnishing"
  // );
  // const furnishingAmenities =
  //   furnishingCategory?.amenities?.map((amenity: any) => amenity?.name) || [];

  useEffect(() => {
    setSelectedButton(selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="flex flex-wrap gap-[12px]">
      {data.map((item: any) => (
        <WhiteButton
          key={item?.id}
          click={() => handleClickEvent(item?.value)}
          buttonText={item?.name}
          className={`text-[#000] text-[14px] leading-[16.5px] font-[400] rounded-[16px] bg-[#EFEEEE] py-[6px] px-[20px] h-min ${
            selectedButton === item.value
              ? "text-primary bg-[rgba(0,197,180,0.17)]"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default FurnishingSelectOption;
