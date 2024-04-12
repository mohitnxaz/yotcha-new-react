import { useDispatch, useSelector } from "react-redux";
import { setFilterFields } from "../../store/slices/filter/filter.reducers";
import { Input } from "../ui/input";
import { getFilteredListing } from "../../api/filter/filterAPI";
import {
  AddFilterToUrlReturnQueryString,
  updateQueryUsingJs,
} from "../../utils/filter";
import { useEffect } from "react";

interface PSFFilterComponentProp {}

const PSFFilterComponent: React.FC<PSFFilterComponentProp> = ({}) => {
  const dispatch = useDispatch();
  const filterData = useSelector((state: any) => state.filter.selectedFilters);
  const min_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.min_psf) || null;

  const max_sizee: number =
    useSelector((state: any) => state.filter.selectedFilters.max_psf) || null;

  const debouncedHandleMinChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    let newMinPsf = null;

    if (value !== "") {
      newMinPsf = !isNaN(parseInt(value)) ? parseInt(value) : 0;
    }

    dispatch(setFilterFields({ min_psf: newMinPsf }));

    // dispatch(getFilteredListings(response?.data));
  };

  const debouncedHandleMaxChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    let newMaxPsf = null;

    if (value !== "") {
      newMaxPsf = !isNaN(parseInt(value)) ? parseInt(value) : 0;
    }

    dispatch(setFilterFields({ max_psf: newMaxPsf }));

    // dispatch(getFilteredListings(response?.data));
  };


  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Minimum PSF
        </div>
        <div>
          <Input
            className="rounded-[4px] border-[rgba(4,77,88,0.20)] text-[#7C828E] text-[14px] font-[400] leading-[18px]"
            placeholder="Min sqft"
            onChange={debouncedHandleMinChange}
            value={min_sizee === null ? 0 : min_sizee}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="text-[#2A3C51] text-[14px] font-[400] leading-[16px]">
          Maximum PSF
        </div>
        <div>
          <Input
            className="rounded-[4px] border-[rgba(4,77,88,0.20)] text-[#7C828E] text-[14px] font-[400] leading-[18px]"
            placeholder="Max sqft"
            onChange={debouncedHandleMaxChange}
            value={max_sizee === null ? 0 : max_sizee}
          />
        </div>
      </div>
    </div>
  );
};

export default PSFFilterComponent;
