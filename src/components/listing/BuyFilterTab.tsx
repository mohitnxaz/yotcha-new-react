import { useDispatch } from "react-redux";
import { clearFilters } from "../../store/slices/filter/filter.reducers";
import AccordianComponent from "../AccordianComponent";
import WhiteButton from "../WhiteButton";
import BathRoomFilter from "./BathroomFilter";
import BedRoomFilter from "./BedroomFilter";
import BuiltYearFilterComponent from "./BuiltYearOption";
import FeaturesSelectOption from "./FeaturesSelectOption";
import FloorSizeFilterComponent from "./FloorSizeFilterOption";
import FurnishingSelectOption from "./FurnishingSelectOption";
import LeaseTermFilter from "./LeaseTermFilter";
import PSFFilterComponent from "./PSFFilterOption";

const BuyFilterTab = () => {
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
    <div>
      <div className="px-[15px]">{/* <KeywordFilter /> */}</div>
      {/* <AccordianComponent
        title={"Property Type"}
        body={<PropertyTypeOpton />}
      /> */}
      {/* <AccordianComponent title={"Price"} body={<PriceFilterComponent2 />} /> */}
      {/* <AccordianComponent
        title={"Property Status"}
        body={
          <MultiSelectButtonOption options={["any", "buy", "sell", "rent"]} />
        }
      /> */}
      <AccordianComponent
        title={"Bedroom"}
        body={<BedRoomFilter />}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Bathroom"}
        body={<BathRoomFilter />}
        keepOpen={urlParams.has("bath_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Floor Size"}
        body={<FloorSizeFilterComponent />}
        keepOpen={
          urlParams.has("min_size") || urlParams.has("max_size")
            ? keepOpenKeys
            : undefined
        }
      />
      <AccordianComponent
        title={"PSF"}
        body={<PSFFilterComponent />}
        keepOpen={
          urlParams.has("min_psf") || urlParams.has("max_psf")
            ? keepOpenKeys
            : undefined
        }
      />
      <AccordianComponent
        title={"Lease Term"}
        body={<LeaseTermFilter />}
        keepOpen={urlParams.has("lease_term") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Built Year"}
        body={<BuiltYearFilterComponent />}
        keepOpen={
          urlParams.has("min_build_year") || urlParams.has("max_build_year")
            ? keepOpenKeys
            : undefined
        }
      />
      <AccordianComponent
        title={"Furnishing"}
        body={<FurnishingSelectOption />}
        keepOpen={urlParams.has("furnished_status") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Features"}
        body={<FeaturesSelectOption />}
        keepOpen={urlParams.has("amenity_id") ? keepOpenKeys : undefined}
      />

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

export default BuyFilterTab;
