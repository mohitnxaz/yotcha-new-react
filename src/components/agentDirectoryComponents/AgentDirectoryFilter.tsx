import { useDispatch } from "react-redux";
import { clearFilters } from "../../store/slices/filter/filter.reducers";
import AccordianComponent from "../AccordianComponent";
import WhiteButton from "../WhiteButton";
import CheckboxComponent from "../CheckboxComponent";
import Checkbox from "./Checkbox";
import RegionTab from "./RegionTab";
import DistrictTab from "./DistrictTab";

const AgentDirectoryFilter = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.has("bed_room"));
  const keepOpenKeys = ["item-1"];
  const handleButtonClick = () => {
    //clearning the filter also called the api again as it is defined in layout component..so on
    //dispatch causes re-render (as values change so the components that are subscribed to those values rerender)
    // and since layout copoent wraps everything..it also
    //gets re-rendered causing new data to be fetched automatically
    dispatch(clearFilters());
  };

  return (
    <div className="border w-full border-[#DDD] rounded-[5px]">
      <div className="flex flex-col justify-between mb-[10px] mt-[19px] gap-y-[14px] px-[15px] ">
        <Checkbox label="Include agents with no reviews" />
        <Checkbox label="Only include agents who have completed at least 1 transaction" />
        <div className="border-t p-0 m-0" />
      </div>
      <AccordianComponent
        title={"Alphabet"}
        classNamee="text-[16px]"
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <div className="flex flex-col justify-between  ">
        <div className="border-b text-black-title leading-[26px] font-[600] text-[16px] mt-[18px] mb-[20px] pb-[4px]">
          <span className="mx-[15px] ">REGION AND PLANNING AREA</span>
        </div>
        <RegionTab />
      </div>

      <div className="flex flex-col justify-between  ">
        <div className="border-b text-black-title leading-[26px] font-[600] text-[16px] mt-[18px] mb-[20px] pb-[4px]">
          <span className="mx-[15px] ">DISTRICT</span>
        </div>
        <DistrictTab />
      </div>

      <div className="flex justify-between mb-[10px] mt-[9px] px-[15px] ">
        <WhiteButton
          click={handleButtonClick}
          buttonText={"Clear All"}
          className="text-red hover:bg-transparent hover:text-[#D92747] p-0"
        />
        {/* <GreenButton
          buttonText={"Search"}
          className="hover:bg-primary-hover hover:text-[white]"
        /> */}
      </div>
    </div>
  );
};

export default AgentDirectoryFilter;
