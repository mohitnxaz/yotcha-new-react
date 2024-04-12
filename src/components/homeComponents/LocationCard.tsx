import React from "react";
import { addressCardProps } from "../../types";
import { Link } from "react-router-dom";

const addressCard: React.FC<addressCardProps> = ({
  image,
  address,
  propertynumber,
}) => {
  return (
    <Link to={`/listing?address=${encodeURIComponent("bhaktapur")}`}>
      <div className="relative w-auto h-[245px] md:w-[360px] md:h-[350px] rounded-[8px] overflow-hidden group">
        <img
          src={image}
          alt={""}
          className="group-hover:grayscale-[70%] group-hover:scale-[1.02] group-hover:blur-[1px] z-10 transition ease-in-out duration-300"
        />
        <div className="absolute translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] z-20 text-white text-center select-none">
          <p className="text-[20px] font-[700] leading-[26px] capitalize md:w-[240px] w-[220px]">
            {address}
          </p>
          {propertynumber <= 1 ? (
            <p>{propertynumber} property</p>
          ) : (
            <p>{propertynumber} properties</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default addressCard;
