import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import GreenButton from "./GreenButton";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 import { setFilterFields } from "../store/slices/filter/filter.reducers";
import { DetailedCardProps } from "../types";
import { getListingBasedOnAddress } from "../api/filter/filterAPI";

interface HomePageSerachBarProps {}

const HomePageSerachBar: React.FC<HomePageSerachBarProps> = ({}) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<DetailedCardProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    dispatch(
      setFilterFields({
        address: searchQuery,
      })
    );
    router(`/listing?address=${searchQuery}`);
  };

  const handleSelectedTerm = (name: string) => {
    setSearchQuery(name);
    setResults([]);
  };

  const handleSearchTextChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      const response = await getListingBasedOnAddress(value);
      setResults(response?.data?.properties);
      console.log(response?.data?.properties);
    } else {
      setResults([]);
    }
  };

  // Remove the searched terms if clicked outside the component
  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-[500000]">
      <div
        className={`bg-white p-[9px_18px] h-[50px] md:h-[69px] ${
          results.length > 0
            ? "border-solid border-b-[3px] border-gray-300  "
            : ""
        } rounded-none flex`}
      >
        <Input
          ref={inputRef}
          value={searchQuery}
          className="bg-transparent border-none md:h-[50px] [40px] shadow-none text-[16px] font-[400]"
          placeholder="Type to search..."
          onChange={handleSearchTextChange}
        />
        <GreenButton
          className="mr-[-8px] md:mr-0 md:px-[26px] bg-primary hover:bg-primary-hover text-[white] hover:text-[white] md:py-[12px] md:text-[15px] text-[12px] font-[500] md:h-[48px] h-[33px]"
          buttonText={"Search"}
          onClick={handleSearchClick}
        />
      </div>
      <div
        className={`mt-[2px] ${
          results.length > 0
            ? "max-h-[350px] overflow-y-scroll overflow-x-hidden"
            : ""
        } `}
      >
        {Array.isArray(results) &&
          results.length > 0 &&
          results.map((item, index) => (
            <div
              key={index}
              ref={inputRef}
              onClick={() => handleSelectedTerm(item?.address)}
              className="p-[8px] hover:bg-gray-200 cursor-pointer"
            >
              {item.address}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePageSerachBar;
