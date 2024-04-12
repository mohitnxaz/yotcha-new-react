import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterFields } from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { AddFilterToUrlReturnQueryString} from "../../utils/filter";
import React from "react";
import DatePickerDemo from "../DatePicker";



interface BuiltYearOptionProp {}

const BuiltYearFilterComponent: React.FC<BuiltYearOptionProp> = ({}) => {
  const [date, setDate] = React.useState<Date>();
  const [date2, setDate2] = React.useState<Date>();
  const dispatch = useDispatch();
  const filterData = useSelector((state: any) => state.filter.selectedFilters);
  const min_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.min_build_year) ||
    "";

  const max_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.max_build_year) ||
    "";

  const debouncedHandleMinChange = async (date: any) => {
    const selectedDateOnly = new Date(date);
    selectedDateOnly.setUTCHours(24, 0, 0, 0);
    console.log(selectedDateOnly, "date");
    dispatch(
      setFilterFields({
        min_build_year: selectedDateOnly,
      })
    );
  };

  const debouncedHandleMaxChange = async (date: any) => {
    const selectedDateOnly = new Date(date);
    selectedDateOnly.setUTCHours(24, 0, 0, 0);
    console.log(selectedDateOnly, "date");
    dispatch(
      setFilterFields({
        max_build_year: selectedDateOnly,
      })
    );
  };

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Minimum Date
        </div>
        <div>
          <DatePickerDemo
            date={min_sizee ? new Date(min_sizee) : null}
            setDate={(date: Date) => debouncedHandleMinChange(date)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Maximum Date
        </div>
        <div>
          <DatePickerDemo
            date={max_sizee ? new Date(max_sizee) : null}
            setDate={(date: Date) => debouncedHandleMaxChange(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltYearFilterComponent;
