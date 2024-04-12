import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import {
  AddFilterToUrlReturnQueryString,
  updateQueryUsingJs,
} from "../../utils/filter";
import React from "react";
import { Input } from "../ui/input";

interface FloorSizeComponentProp {}

const FloorSizeFilterComponent: React.FC<FloorSizeComponentProp> = ({}) => {
  const dispatch = useDispatch();
  const filterData = useSelector((state: any) => state.filter.selectedFilters);
  const min_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.min_size) || null;

  const max_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.max_size) || null;

  const handleMinChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    let newMin = null;

    if (value !== "") {
      newMin = !isNaN(parseInt(value)) ? parseInt(value) : 0;
    }

    dispatch(setFilterFields({ min_size: newMin }));


    // dispatch(getFilteredListings(response?.data));
  };

  const handleMaxChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    let newMax = null;

    if (value !== "") {
      newMax = !isNaN(parseInt(value)) ? parseInt(value) : 0;
    }

    dispatch(setFilterFields({ max_size: newMax }));
    // dispatch(getFilteredListings(response?.data));
  };

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Minimum Size
        </div>
        <div>
          <Input
            className="rounded-[4px] border-[rgba(4,77,88,0.20)] text-[#7C828E] text-[14px] font-[400] leading-[18px]"
            placeholder="Min sqft"
            onChange={handleMinChange}
            value={min_sizee === null ? 0 : min_sizee}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Maximum Size
        </div>
        <div>
          <Input
            className="rounded-[4px] border-[rgba(4,77,88,0.20)] text-[#7C828E] text-[14px] font-[400] leading-[18px]"
            placeholder="Max sqft"
            onChange={handleMaxChange}
            value={max_sizee === null ? 0 : max_sizee}
          />
        </div>
      </div>
    </div>
  );
};

export default FloorSizeFilterComponent;
