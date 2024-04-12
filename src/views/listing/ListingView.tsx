import _ from "lodash";

import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  checkStringTypeAndConvertToArray,
  checkStringTypeAndConvertToDate,
} from "../../utils/filter";
import {
  setFilterFields,
  setTopFilterFields,
  transferTopFiltersToSelectedFilters,
} from "../../store/slices/filter/filter.reducers";
import { getFilteredListing } from "../../api/filter/filterAPI";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import FormSelect from "../../components/FormSelect";
import GreenButton from "../../components/GreenButton";
import PopUpDialog from "../../components/PopUpComponent";
import { Switch } from "../../components/ui/switch";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import GridViewListing from "../../components/common/GridViewListing";
import ListViewListing from "../../components/common/ListViewListing";
import OrderFilter from "../../components/listing/OrderFilter";
import PriceFilterComponent from "../../components/listing/PriceFilterOption";
import FilterComponentListing from "../../components/listing/FilterComponent";

const validationScheme = yup.object({});

const ListingView = () => {
  const [itemView, setItemView] = useState("grid");
  const [mapShown, setMapShown] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  /////////take values from url and refetch buildings////////////
  //cc//

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const finalTopPartFilters: any = {};
    const finalFilter: any = {};
    for (const [key, value] of searchParams.entries()) {
      if (
        key === "bed_room" ||
        key === "bath_room" ||
        key === "lease_term" ||
        key === "amenity_id"
      ) {
        finalFilter[key] = checkStringTypeAndConvertToArray(value);
      } else if (key === "max_build_year" || key === "min_build_year") {
        finalFilter[key] = checkStringTypeAndConvertToDate(value);
      } else {
        finalFilter[key] = isNaN(Number(value)) ? value : Number(value);
        finalTopPartFilters[key] = isNaN(Number(value)) ? value : Number(value);
      }
    }
    dispatch(setTopFilterFields(finalTopPartFilters));
    dispatch(setFilterFields(finalFilter));
  }, [location.search, dispatch]);

  //////////cc//////////

  const filteredListing = useSelector(
    (state: any) => state.filter.filteredData
  );
  const currentCount = filteredListing ? filteredListing.properties.length : 0;

  console.log(currentCount, "current length");
  const hasMore = currentCount <= 30;
  console.log(hasMore, "hasmore");
  const filteraddress =
    useSelector((state: any) => state.filter.topFilters.address) || "";

  const propertyType =
    useSelector((state: any) => state.filter.topFilters.property_type) || "";

  const minPrice =
    useSelector((state: any) => state.filter.topFilters.min_price) || "";

  const maxPrice =
    useSelector((state: any) => state.filter.topFilters.max_price) || "";

  const prevOffset = useSelector(
    (state: any) => state.filter.selectedFilters.offset
  );
  console.log("prevoff", prevOffset);

  const handleMapVisibility = (mapVisible: boolean) => {
    setMapShown(mapVisible);
  };

  const handleListOrGridView = (option: string) => {
    setItemView(option);
  };
  let newOffset = 0;
  const handlePagination = async () => {
    console.log("handle", currentCount, filteredData, filterValues);

    try {
      newOffset =
        prevOffset <= filteredListing.total - 20 ? prevOffset + 10 : prevOffset;
      console.log("handle111111", currentCount, newOffset);

      dispatch(
        setFilterFields({
          offset: newOffset,
        })
      );

      // const response = await getFilteredListing({
      //   ...filterData,
      //   offset: newOffset,
      // });

      // console.log("values", response?.data);
      // dispatch(getPaginatedResults(response?.data?.properties));
    } catch (error) {
      console.error("Error fetching filtered listings:", error);
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  const { address } = useParams();
  useEffect(() => {
    if (address) {
      // Dispatch action to set filter fields
      dispatch(setFilterFields({ address: address.toLocaleString() }));
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [address]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    validationSchema: validationScheme,
    onSubmit: async (values) => {
      try {
        dispatch(transferTopFiltersToSelectedFilters());

        // dispatch(getFilteredListings(response?.data));
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleSetaddress = (event: any) => {
    dispatch(
      setTopFilterFields({
        address: event.target.value,
      })
    );
  };

  const selectedDropDown = useSelector(
    (state: any) => state.filter.selectedFilters.property_type
  );
  console.log({ selectedDropDown });
  const filterValuesPropertyType = useSelector(
    (state: any) => state.filter.filterValues.property_type
  );

  const handleSetPropertyType = (value: string) => {
    dispatch(
      setTopFilterFields({
        property_type: value,
      })
    );
  };

  const { selectedFilters } = useSelector((state: any) => state.filter);
  const { filteredData } = useSelector((state: any) => state.filter);

  const { filterValues } = useSelector((state: any) => state.filter);

  console.log("selectedFilters", filteredData);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full">
        <div className="flex md:px-[50px] sm:px-[50px] lg:px-[150px] flex-col  px-[20px] pt-[30px] pb-[40px] gap-[38px]">
          {/* <CustomBreadcrumb
            capitalizeLinks={true}
            homeElement={<Image src={homeIcon} alt={""} />}
          /> */}

          <div className="sm:grid sm:grid-cols-5 flex flex-col sm:gap-[15px] gap-y-[10px] items-center">
            <Input
              value={filteraddress}
              onChange={handleSetaddress}
              className=" col-span-2 border-[#DDD] h-[48px] text-[15px] rounded-[5px] font-[400] border-solid"
              placeholder="Search address"
            />
            <div className="w-full ">
              <Select
                onValueChange={(value: string) => handleSetPropertyType(value)}
              >
                <SelectTrigger className="h-[48px] custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]">
                  <SelectValue
                    className="custom-select"
                    placeholder={"Property Type"}
                  />
                </SelectTrigger>
                <SelectContent className="bg-white px-[0px]">
                  {filterValuesPropertyType?.map(
                    (option: any, index: number) => (
                      <SelectItem key={index} value={option.name}>
                        {option?.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <FormSelect
                title={""}
                placeholder="Price"
                className="rounded-[5px] h-[48px] w-full min-w-[10px]"
              >
                <PriceFilterComponent vertical={true} className=" w-full " />
              </FormSelect>
            </div>
            <GreenButton
              type={"submit"}
              buttonText={"Search"}
              className="h-[48px] hover:bg-primary-hover hover:text-[white] sm:w-[inherit] w-full"
            />
          </div>

          {(mapShown || isMobile) && (
            <div className="mt-3 ">
              <PopUpDialog
                buttonTitle={"Advanced Search"}
                body={<FilterComponentListing isPopUpFilter={true} />}
                dialogTitle={"Filter"}
              />
            </div>
          )}
        </div>

        <div
          className={`md:px-[50px] sm:px-[50px] lg:px-[150px] sm:grid sm:grid-cols-3 sm:gap-[63px] pb-[100px] px-[20px] pr-0bg-[#f5f7fb] sm:pt-[50px] sm:relative  ${
            !mapShown ? "sm:px-[150px]" : "sm:px-[30px] pr-[20px]"
          } `}
        >
          {!mapShown && (
            <div className="sm:block hidden sm:col-span-1">
              <FilterComponentListing />
            </div>
          )}
          <div className="col-span-2 flex flex-col flex-wrap justify-between gap-[30px]">
            <div className="flex justify-between">
              <div className="flex gap-[10px] sm:items-center flex-wrap-reverse">
                <div className="text-[14px] font-[400] leading-[18px] text-[#000] ">
                  Show map
                </div>
                <div>
                  <Switch
                    className="sm:flex"
                    defaultChecked={false}
                    onCheckedChange={(val: boolean) => handleMapVisibility(val)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-end">
                <div className="flex gap-[20px]">
                  <OrderFilter />
                  <div className="sm:flex sm:gap-x-[16px] hidden">
                    <ButtonWithIcon
                      buttonText={""}
                      className={`rounded-[5px] h-[47px] border-black-border ${
                        itemView === "grid"
                          ? "bg-[rgba(82,133,60,0.13)] hover:bg-[rgba(82,133,60,0.23)] border-primary"
                          : ""
                      }`}
                      icon={itemView === "grid" ? "selectedGrid" : "grid"}
                      onButtonClick={() => handleListOrGridView("grid")}
                    />
                    <ButtonWithIcon
                      buttonText={""}
                      className={`rounded-[5px] h-[47px] border-black-border ${
                        itemView === "list"
                          ? "bg-[rgba(82,133,60,0.13)] hover:bg-[rgba(82,133,60,0.23)] border-primary"
                          : ""
                      }`}
                      icon={itemView === "list" ? "selectedList" : "list"}
                      onButtonClick={() => handleListOrGridView("list")}
                    />
                  </div>
                </div>

                <div className="leading-[18px] font-[400] text-[14px] text-[#000]">
                  1080 Search results
                </div>
              </div>
            </div>
            <div>
              {itemView === "grid" ? (
                filteredListing?.properties.length > 0 ? (
                  <InfiniteScroll
                    next={handlePagination}
                    scrollThreshold={0.7}
                    hasMore={
                      filteredData?.total !==
                        filteredData?.properties?.length &&
                      filteredData?.total !== 0
                    }
                    loader={<div>Loading...</div>}
                    dataLength={filteredData?.properties?.length ?? 0}
                    endMessage={
                      <div className="text-center mt-10">End of list</div>
                    }
                  >
                    <GridViewListing items={filteredListing?.properties} />
                  </InfiniteScroll>
                ) : (
                  <div className="text-center mt-[-300px]">
                    No items to show
                  </div>
                )
              ) : filteredListing?.properties.length > 0 ? (
                <InfiniteScroll
                  next={handlePagination}
                  scrollThreshold={0.7}
                  hasMore={
                    filteredData?.total !== filteredData?.properties?.length &&
                    filteredData?.total !== 0
                  }
                  loader={<div>Loading...</div>}
                  dataLength={filteredData?.properties?.length ?? 0}
                  endMessage={
                    <div className="text-center mt-10">End of list</div>
                  }
                >
                  <ListViewListing items={filteredListing?.properties} />
                </InfiniteScroll>
              ) : (
                <div className="text-center mt-[-300px]">No items to show</div>
              )}
            </div>
          </div>
          {mapShown && <div className="col-span-1">map</div>}
        </div>
      </div>
    </form>
  );
};

export default ListingView;
