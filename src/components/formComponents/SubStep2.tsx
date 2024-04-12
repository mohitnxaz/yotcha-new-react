// import { Button } from "@/components/ui/button";
// import FormikCard from "@/sharedUIComponents/FormikCard";
// import  img from "next/image";
// import React, { useEffect } from "react";
// import search from "../../../../../public/SearchIcon.svg";
// import { Input } from "@/components/ui/input";
// import { useFormikContext } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { setError } from "@/store/addProperty/addProperty.reducers";
// import { useToast } from "../ui/use-toast";

// interface FormValues {
//   property: {
//     property_status: Option;
//     address: string;
//   };
// }

// type Option = "SALE" | "RENT" | null;

// interface SubStep2Props {
//   next: () => void;
//   prev?: () => void;
//   setSearchQuery: (query: string) => void;
//   setSearchResult: (result: { lat: number; lng: number }) => void;
// }

// const SubStep2: React.FC<SubStep2Props> = ({
//   next,
//   prev,
//   setSearchQuery,
//   setSearchResult,
// }) => {
//   const dispatch = useDispatch();
//   const { toast } = useToast();
//   const isErrorPresent = useSelector((state: any) => state.addProperty.isError);
//   const { values, setFieldValue, errors, touched, handleSubmit } =
//     useFormikContext<FormValues>();

//   useEffect(() => {
//     if (touched && errors.property?.address) {
//       dispatch(setError(true));
//     }
//   }, [touched, errors, dispatch]);

//   const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     handleSubmit(); // Trigger Formik validation
//     if (!isErrorPresent && !errors.property?.address) {
//       const result = { lat: 40.7128, lng: -74.006 };
//       setSearchQuery(values.property.address);
//       setSearchResult(result);
//       next();
//     }
//   };

//   return (
//     <FormikCard title={"Find property address "}>
//       <div className="flex w-[51.12%] h-[60px]">
//         <Input
//           name="property.address"
//           value={values.property.address}
//           onChange={(e) => setFieldValue("property.address", e.target.value)}
//           onBlur={() => dispatch(setError(false))}
//           placeholder={"Search by building name, address or postal code"}
//           title={""}
//           className="rounded-[4px_0px_0px_4px] border-[rgba(0,0,0,0.10)] h-full"
//         />
//         <Button
//           onClick={handleSearch}
//           className="px-[26px] bg-[#00C5B4] hover:bg-[#3cb4ac] h-full rounded-[0px_4px_4px_0px]"
//         >
//           < img src={search} alt={""} />
//         </Button>
//       </div>
//       {touched.property?.address && errors.property?.address && (
//         <div className="text-red">{errors.property.address}</div>
//       )}
//       <div className="flex justify-center items-center bg-[rgba(0,197,180,0.46)] px-[15px] py-[14px] rounded-[4px] w-[51.12%] h-[60px]">
//         <p className="text-[14px] font-[400] text-[#808080] ">
//           Cannot find your address? Contact us via live@yotcha.com
//         </p>
//       </div>
//     </FormikCard>
//   );
// };

// export default SubStep2;

import React, { useEffect } from "react";
// import search from "../../../../../public/SearchIcon.svg";
import search from "../../../public/SearchIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../ui/use-toast";
import { setError } from "../../store/slices/addProperty/addProperty.reducers";
import FormikCard from "./components/FormikCard";
import { Input } from "../ui/input";

interface SubStep2Props {
  next: () => void;
  prev?: () => void;
  setSearchQuery: (query: string) => void;
  setSearchResult: (result: { lat: number; lng: number }) => void;
}

const SubStep2: React.FC<SubStep2Props> = ({
  next,
  setSearchQuery,
  setSearchResult,
}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const isErrorPresent = useSelector((state: any) => state.addProperty.isError);

  const [address, setAddress] = React.useState("");
  const [addressError, setAddressError] = React.useState("");

  useEffect(() => {
    if (addressError || address === null || address === "") {
      setAddressError("Please enter an address");
      dispatch(setError(true));
    } else {
      dispatch(setError(false));
    }
  }, [addressError, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!address.trim()) {
      setAddressError("Please enter an address");
    } else {
      setAddressError("");
      const result = { lat: 40.7128, lng: -74.006 };
      setSearchQuery(address);
      setSearchResult(result);
      next();
    }
  };

  return (
    <FormikCard title={"Find property address "} >
      <div className="flex md:w-[51.12%] h-[60px]">
        <Input
          value={address}
          onChange={handleInputChange}
          placeholder={"Search by building name, address or postal code"}
          title={""}
          className="rounded-[4px_0px_0px_4px] border-[rgba(0,0,0,0.10)] h-full"
        />
        <button
          onClick={handleSearch}
          className="px-[26px] bg-[#00C5B4] hover:bg-[#3cb4ac] h-full rounded-[0px_4px_4px_0px]"
        >
          <img src={search} alt={""} />
        </button>
      </div>
      {addressError && <div className="text-red">{addressError}</div>}
      <div className="flex w-full justify-center items-center bg-[rgba(0,197,180,0.46)] px-[15px] md:py-[14px] py-[20px] rounded-[4px] md:w-[51.12%] md:h-[60px]">
        <p className="text-[14px] font-[400] text-[#808080] ">
          Cannot find your address? Contact us via live@yotcha.com
        </p>
      </div>
    </FormikCard>
  );
};

export default SubStep2;
