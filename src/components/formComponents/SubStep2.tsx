import React, { useEffect } from "react";
import search from "../../../public/SearchIcon.svg";
import { useFormikContext } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { useToast } from "../ui/use-toast";
import { setError } from "../../store/slices/addProperty/addProperty.reducers";
import FormikCard from "./components/FormikCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Property, PropertyTypesFormik } from "../../types";

export interface FormValues {
  property: {
    property_status: Option;
    address: string;
    property_type: any;
  };
}

type Option = "SALE" | "RENT" | null;

interface SubStep2Props {
  next: () => void;
  prev?: () => void;
  setSearchQuery: (query: string) => void;
  setSearchResult: (result: { lat: number; lng: number }) => void;
}

const SubStep2: React.FC<SubStep2Props> = ({
  next,
  prev,
  setSearchQuery,
  setSearchResult,
}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const isErrorPresent = useSelector((state: any) => state.addProperty.isError);
  const { values, setFieldValue, errors, touched, handleSubmit } =
    useFormikContext<PropertyTypesFormik>();

  useEffect(() => {
    if (errors.property?.address || values.property.address === null || "") {
      dispatch(setError(true));
    }
  }, [errors, dispatch]);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(); // Trigger Formik validation
    if (!isErrorPresent && !errors.property?.address) {
      const result = { lat: 40.7128, lng: -74.006 };
      setSearchQuery(values.property.address);
      setSearchResult(result);
      next();
    }
  };

  return (
    <FormikCard title={"Find property address "}>
      <div className="w-full text-center">
        <div className="flex w-[51.12%] h-[60px] m-auto">
          <Input
            name="property.address"
            value={values.property.address}
            onChange={(e) => setFieldValue("property.address", e.target.value)}
            onBlur={() => dispatch(setError(false))}
            placeholder={"Search by building name, address or postal code"}
            title={""}
            className={`${
              errors?.property?.address
                ? "border-[rgba(0,0,0,0.10)]"
                : "border-[rgba(0,0,0,0.10)] "
            } rounded-[4px_0px_0px_4px] h-full`}
          />
          <Button
            onClick={handleSearch}
            className="px-[26px] bg-[#00C5B4] hover:bg-[#3cb4ac] h-full rounded-[0px_4px_4px_0px]"
          >
            <img src={search} alt={""} />
          </Button>
        </div>
        {errors.property?.address && (
          <div className="text-red">{errors.property?.address}</div>
        )}
      </div>

      <div className="flex justify-center items-center bg-[rgba(0,197,180,0.46)] px-[15px] py-[14px] rounded-[4px] w-[51.12%] h-[60px]">
        <p className="text-[14px] font-[400] text-[#808080] ">
          Cannot find your address? Contact us via live@yotcha.com
        </p>
      </div>
    </FormikCard>
  );
};

export default SubStep2;
