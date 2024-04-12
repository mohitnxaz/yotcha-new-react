
import React, {
  ChangeEvent,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";

import FormSingleSelectButton from "../FormSingleSelectButton";
import { useFormikContext } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { getPropertyTypes } from "../../api/addProperty/propertyApi";
import { Property, PropertyType } from "../../types";
import { setError } from "../../store/slices/addProperty/addProperty.reducers";
import FormikCard from "./components/FormikCard";
import FormInput from "../FormInput";
import { Input } from "../ui/input";


interface SearchResult {
  lat: number;
  lng: number;
}

interface SubStep3Props {
  next: () => void;
  prev: () => void;
  searchResult: SearchResult | null;
}

const SubStep3: React.FC<SubStep3Props> = ({  }) => {
  const { data: queryData, isLoading } = useQuery({
    queryKey: ["propertyTypes"],
    queryFn: () => getPropertyTypes(),
  });
  const isErrorPresent = useSelector((state: any) => state.addProperty.isError);
  const dispatch = useDispatch();
  const [inputValueAddress, setInputValueAddress] = useState("");
  const [errorMsgA, setErrorMsgA] = useState("");
  const [inputValueUnitN, setInputValueUnitN] = useState(0);
  const [errorMsgU, setErrorMsgU] = useState("");
  const [inputValueSize, setInputValueSize] = useState(0);
  const [errorMsgS, setErrorMsgS] = useState("");
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);

  useEffect(() => {
    if (queryData) {
      setPropertyTypes(queryData);
    }
  }, [queryData]);

  const handleInputChangeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputValueSize(value);
    setFieldValue("property.area", e.target.value);
    const inputElement = e.target;

    const handleKeyUp = () => {
      const inputValue = inputElement.value.trim();
      if (inputValue === "0") {
        setErrorMsgS("Please enter land area");
        dispatch(setError(true));
      } else {
        setErrorMsgS("");
      }
    };

    inputElement.addEventListener("keyup", handleKeyUp);

    return () => {
      inputElement.removeEventListener("keyup", handleKeyUp);
    };
  };

  useEffect(() => {
    if (
      inputValueAddress !== "" &&
      inputValueUnitN !== Number("0") &&
      inputValueSize !== Number("0")
    ) {
      dispatch(setError(false));
    } else {
      dispatch(setError(true));
    }
  }, [inputValueAddress, inputValueUnitN, inputValueSize]);

  const handleInputChangeU = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputValueUnitN(value);

    const inputElement = e.target;
    setFieldValue("property.unit_number", e.target.value);
    const handleKeyUp = () => {
      const inputValue = inputElement.value.trim();
      if (inputValue === "0") {
        setErrorMsgU("Please enter a unit number");
        dispatch(setError(true));
      } else {
        setErrorMsgU("");
      }
    };

    inputElement.addEventListener("keyup", handleKeyUp);

    return () => {
      inputElement.removeEventListener("keyup", handleKeyUp);
    };
  };

  const handleInputChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValueAddress(value);
    setFieldValue("property.address", e.target.value);
    const inputElement = e.target;

    const handleKeyUp = () => {
      const inputValue = inputElement.value.trim();
      if (inputValue === "") {
        setErrorMsgA("Please enter an address");
        dispatch(setError(true));
      } else {
        setErrorMsgA("");
      }
    };

    inputElement.addEventListener("keyup", handleKeyUp);

    return () => {
      inputElement.removeEventListener("keyup", handleKeyUp);
    };
  };

  const { values, setFieldValue, errors, touched } =
    useFormikContext<Property>();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY",
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <FormikCard title={"Tell us more about your property"}>
      <div className="md:grid grid-cols-9 gap-x-[42px] w-full">
        <div className="col-span-8 md:col-span-5 w-full flex flex-col gap-y-[42px]">
          <FormInput
            title="Address"
            placeholder="25, Kim Yam aRoad, Singapore 2993114, District 09"
            value={inputValueAddress || values.property.address}
            onChange={handleInputChangeA}
          />
          {errorMsgA !== "" && <div className="text-red">{errorMsgA}</div>}
          <FormSingleSelectButton
            title="Property type"
            options={propertyTypes.map((type) => type.name)}
            selected={values.property.property_type.name}
            onSelect={(selected) => {
              const selectedType = propertyTypes.find(
                (type) => type.name === selected
              );
              if (selectedType) {
                setFieldValue("property.property_type", selectedType);
              }
            }}
          />
          <div className="unitNumber">
            <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px]">
              Unit Number
            </p>
            <div className="flex flex-wrap w-full gap-y-[4px] gap-x-[10px] items-center">
              <Input
                className="md:w-[75px] text-center w-full rounded-[4px] border-[1px] border-[#E6E6E6]"
                value={
                  inputValueUnitN
                    ? inputValueUnitN.toString()
                    : values.property.unit_number
                }
                onChange={handleInputChangeU}
              />

              <p className="text-[#000]  text-[12px] font-[400] w-full">
                The unit number will not be displayed with the listing, only
                using fo internal analysis purposes.
              </p>
            </div>
            {errorMsgU !== "" && <div className="text-red">{errorMsgU}</div>}
          </div>
          <div className="land-area">
            <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px]">
              Land area (Sqft)
            </p>
            <div className="flex flex-wrap gap-y-[4px] gap-x-[32px] items-center">
              <Input
                className="w-[152px]"
                value={
                  inputValueSize
                    ? inputValueSize.toString()
                    : values.property.area
                }
                onChange={handleInputChangeS}
              />
              <p className="text-[#000]  text-[12px] font-[400]">
                Dont know your land area? check it out here
              </p>
            </div>
            {errorMsgS !== "" && <div className="text-red">{errorMsgS}</div>}
          </div>
          <FormSingleSelectButton
            title="No of bed rooms"
            options={["Studio", "1", "2", "3", "4", "5"]}
            selected={values.property.bed_room}
            onSelect={(selected) =>
              setFieldValue("property.bed_room", selected)
            }
          />
          <FormSingleSelectButton
            title="No of bath rooms"
            options={["1", "2", "3", "4", "5"]}
            selected={values.property.bath_room}
            onSelect={(selected) =>
              setFieldValue("property.bath_room", selected)
            }
          />
        </div>
        <div className="col-span-4 w-full">
          {/* {searchResult && (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              zoom={15}
              center={{
                lat: searchResult.lat,
                lng: searchResult.lng,ac
              }}
            >
              <Marker
                position={{
                  lat: searchResult.lat,
                  lng: searchResult.lng,
                }}
              />
            </GoogleMap>
          )} */}
        </div>
      </div>
    </FormikCard>
  );
};

export default SubStep3;
