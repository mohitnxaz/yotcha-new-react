import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { AddFilterToUrlReturnQueryString, updateQueryUsingJs } from "../../utils/filter";
import React from "react";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,  } from "../ui/select";

interface OrderFilterProps {}

const OrderFilter: React.FC<OrderFilterProps> = ({}) => {
  const dispatch = useDispatch();

 
  const selectedSort = useSelector(
    (state: any) => state.filter.selectedFilters.sort
  );
  

  const handleSetSort = async (value: any) => {
    dispatch(
      setFilterFields({
        sort: value,
      })
    );

    // dispatch(getFilteredListings(response?.data));
  };

  const handleSetOrder = async (value: any) => {
    dispatch(
      setFilterFields({
        order: value,
      })
    );
    // dispatch(getFilteredListings(response?.data));
  };


  return (
    <div className="flex gap-5">
      <div className="w-[140px]">
        <Select onValueChange={(value: string) => handleSetSort(value)}>
          <SelectTrigger className="h-[48px] custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]">
            <SelectValue className="custom-select" placeholder={"Sort By"}>
              {selectedSort}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white px-[0px]">
            <SelectItem value={"PRICE"}>PRICE</SelectItem>
            <SelectItem value={"CREATED_AT"}>CREATED_AT</SelectItem>
            <SelectItem value={"UPDATED_AT"}>UPDATED AT</SelectItem>
            <SelectItem value={"AREA"}>AREA</SelectItem>
            <SelectItem value={"PSF"}>PSF</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {selectedSort && (
        <div className="w-[140px]">
          <Select onValueChange={(value: string) => handleSetOrder(value)}>
            <SelectTrigger className="h-[48px] custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]">
              <SelectValue className="custom-select" placeholder={"Order By"} />
            </SelectTrigger>
            <SelectContent className="bg-white px-[0px]">
              <SelectItem value={"ASC"}>Ascending </SelectItem>
              <SelectItem value={"DESC"}>Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
