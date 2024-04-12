import _ from "lodash";

import React, { useEffect, useRef, useState } from "react";

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
import agentDirectoryBanner from "../../../public/agentBg.jpg";
import adviceIcon from "../../../public/advice-icon.png";
import dropdownIcon from "../../../public/arrow-circle-right (1).svg";
import hotlineIcon from "../../../public/hotline-icon.png";
import insuranceIcon from "../../../public/insurance-icon.png";
import phoneImg from "../../../public/phone-icon.png";
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
import GiveRating from "../../components/detailsComponents/GiveRating";
import AgentDirectoryFilter from "../../components/agentDirectoryComponents/AgentDirectoryFilter";
import ListViewAgent from "../../components/agentDirectoryComponents/ListViewAgent";
import GridViewAgent from "../../components/agentDirectoryComponents/GirdViewAgent";
import {
  setAgentFilterFields,
  setAgentTopFilterFields,
  transferAgentTopFiltersToSelectedFilters,
} from "../../store/slices/agentFilter/agentFilter.reducers";

const validationScheme = yup.object({});

const AgentDirectoryView = () => {
  const scollToRef = useRef<HTMLDivElement>(null);
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
    dispatch(setAgentTopFilterFields(finalTopPartFilters));
    dispatch(setAgentFilterFields(finalFilter));
  }, [location.search, dispatch]);

  //////////cc//////////

  const filteredListing = useSelector(
    (state: any) => state.agentFilter.filteredData
  );
  console.log(filteredListing, "agentss");

  const agentName =
    useSelector((state: any) => state.agentFilter.topFilters.fullname) || "";

  const handleMapVisibility = (mapVisible: boolean) => {
    setMapShown(mapVisible);
  };

  const handleListOrGridView = (option: string) => {
    setItemView(option);
  };
  const [rating1, setRating1] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { address } = useParams();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    validationSchema: validationScheme,
    onSubmit: async (values) => {
      try {
        dispatch(transferAgentTopFiltersToSelectedFilters());
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleAgentNameChange = (event: any) => {
    dispatch(
      setAgentTopFilterFields({
        fullname: event.target.value,
      })
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="bg-[url('/agentBg.jpg')] bg-cover bg-center h-auto">
          {/* inset-0 makes top left bottom right 0 so that div stretches entire parent div */}
          <div className="inset-0 bg-primary bg-opacity-25 w-full">
            <div className="flex flex-col text-white items-center h-full w-full gap-y-12 pt-20 p-6">
              <div className="font-[700] text-center text-[22px] md:text-[32px] md:p-0 pl-[8px] ">
                Singapore Property Agent Directory
              </div>
              <div className="text-[14px] text-center font-[400] max-w-[600px] mt-6 md:text-[18px] md:p-0 pl-[8px] ">
                Looking for an agent to help find, sell or rent your home?
                Appoint the right agent and set your mind at ease! Receive the
                following benefits when you appoint an agent via
              </div>
              <div className="mt-[-40px] text-[14px] md:text-[18px] md:p-0 pl-[8px]">
                Yotcha.com
              </div>
              <div className="flex flex-wrap justify-center gap-y-8 gap-x-9 p-6">
                <div className="flex flex-col items-center gap-2 ">
                  <img src={adviceIcon} className="w-[42px]" />
                  <p className="text-center md:max-w-[150px] text-[14px]">
                    Free legal advice when you encounter problems with your
                    property agent
                  </p>
                </div>
                <div className="flex flex-col items-center  gap-2">
                  <img src={insuranceIcon} className="w-[42px]" />
                  <p className="text-center md:max-w-[150px] text-[14px]">
                    Home owner's incureance of up to S$10,000
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={hotlineIcon} className="w-[42px]" />
                  <p className="text-center md:max-w-[150px] text-[14px]">
                    24-hour hotline to answer any questons you have an dgive you
                    peace of mind
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pr-9">
              <img
                className="hover:cursor-pointer w-[60px] animate-bounce"
                src={dropdownIcon}
                onClick={() =>
                  scollToRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          </div>
          <div ref={scollToRef} className="  bg-primary bg-opacity-80 p-4">
            <div className="md:px-[50px] sm:px-[50px] lg:px-[150px] gap-x-4 flex">
              <img src={phoneImg} className="hidden md:block" />
              <div className="flex flex-col gap-[10px] text-white md:text-[16px] text-[12px]">
                <p>Can't make up your mind?</p>
                <p> Call us for free a non-obligatory advisory service</p>
                <p className="text-[#2A556E] font-[700] text-[20px]">
                  +1 234 567890
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:px-[20px] sm:px-[20px] lg:px-[90px] flex-col  px-[20px] pt-[30px] pb-[40px] gap-[38px]">
          {/* <CustomBreadcrumb
            capitalizeLinks={true}
            homeElement={<Image src={homeIcon} alt={""} />}
          /> */}

          <div className="md:grid md:grid-cols-5 flex flex-col sm:gap-[15px] gap-y-[10px] items-center">
            <Input
              value={agentName}
              onChange={handleAgentNameChange}
              className=" col-span-2 border-[#DDD] h-[48px] text-[15px] rounded-[5px] font-[400] border-solid"
              placeholder="Search agent"
            />
            <div className="w-full ">
              <Select
              // onValueChange={(value: string) => handleSetPropertyType(value)}
              >
                <SelectTrigger className="h-[48px] custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]">
                  <SelectValue
                    className="custom-select"
                    placeholder={"Transaction Type"}
                  />
                </SelectTrigger>
                {/* <SelectContent className="bg-white px-[0px]">
                  {filterValuesPropertyType?.map(
                    (option: any, index: number) => (
                      <SelectItem key={index} value={option.name}>
                        {option?.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent> */}
              </Select>
            </div>
            <div className="w-full ">
              <Select
              // onValueChange={(value: string) => handleSetPropertyType(value)}
              >
                <SelectTrigger className="h-[48px] custom-select border-[rgba(4,77,88,0.2)] rounded-[4px] bg-transparent px-[16px] py-[12px] ${className} text-[14px] font-[400] leading-[18px] tracking-[0.5px]">
                  <SelectValue
                    className="custom-select"
                    placeholder={"Property Type"}
                  />
                </SelectTrigger>
                {/* <SelectContent className="bg-white px-[0px]">
                  {filterValuesPropertyType?.map(
                    (option: any, index: number) => (
                      <SelectItem key={index} value={option.name}>
                        {option?.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent> */}
              </Select>
            </div>
            <div className="w-full">
              <FormSelect
                title={""}
                placeholder="Agent Company"
                className="rounded-[5px] h-[48px] w-full min-w-[10px]"
              >
                <PriceFilterComponent vertical={true} className=" w-full " />
              </FormSelect>
            </div>
            <div className="col-span-5 w-full">
              <div className="flex items-center justify-between gap-x-5 flex-col sm:flex-row gap-y-4">
                <div className="border w-full sm:w-[226px] border-[#DDD] rounded-[5px] p-2 flex items-center gap-x-5 ">
                  <div>Stars:</div>
                  <GiveRating
                    count={5}
                    value={rating1}
                    edit={true}
                    isHalf={true}
                    onChange={(value: number) => setRating1(value)}
                  />
                </div>
                <GreenButton
                  type={"submit"}
                  buttonText={"Search"}
                  className="h-[48px] sm:min-w-[223px] hover:bg-primary-hover hover:text-[white] sm:w-[inherit] w-full"
                />
              </div>
            </div>
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
          className={`md:px-[20px] sm:px-[20px] lg:px-[90px] sm:grid sm:grid-cols-3 sm:gap-[63px] pb-[100px] px-[20px] pr-0bg-[#f5f7fb] sm:pt-[50px] sm:relative  ${
            !mapShown ? "sm:px-[150px]" : "sm:px-[30px] pr-[20px]"
          } `}
        >
          {!mapShown && (
            <div className="sm:block hidden sm:col-span-1">
              <AgentDirectoryFilter />
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
                filteredListing?.agent?.length > 0 ? (
                  <InfiniteScroll
                    // next={handlePagination}
                    next={() => console.log("s")}
                    scrollThreshold={0.7}
                    hasMore={
                      filteredListing?.total !==
                        filteredListing?.properties?.length &&
                      filteredListing?.total !== 0
                    }
                    loader={<div>Loading...</div>}
                    dataLength={filteredListing?.agent?.length ?? 0}
                    endMessage={
                      <div className="text-center mt-10">End of list</div>
                    }
                  >
                    <GridViewAgent items={filteredListing?.agent} />
                  </InfiniteScroll>
                ) : (
                  <div className="text-center mt-[-300px]">
                    No items to show
                  </div>
                )
              ) : filteredListing?.agent.length > 0 ? (
                <InfiniteScroll
                  // next={handlePagination}
                  next={() => console.log("s")}
                  scrollThreshold={0.7}
                  hasMore={
                    filteredListing?.total !==
                      filteredListing?.properties?.length &&
                    filteredListing?.total !== 0
                  }
                  loader={<div>Loading...</div>}
                  dataLength={filteredListing?.properties?.length ?? 0}
                  endMessage={
                    <div className="text-center mt-10">End of list</div>
                  }
                >
                  <ListViewAgent items={filteredListing?.agent} />
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

export default AgentDirectoryView;
