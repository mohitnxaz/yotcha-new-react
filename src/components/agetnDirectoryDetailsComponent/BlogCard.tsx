import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: any;
  date: string;
  title: string;
  linkTo: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, date, linkTo }) => {
  return (
    <div className="bg-white lg:max-w-[340px]  md:w-[330px] relative shadow-[0px_0px_30px_#0000001a] sm:w-full ">
      <div className="">
        <div className="lg:w-full  md:w-full sm:w-full ">
          <img src={image} alt="error" />
        </div>
        <div className="px-[10px] pt-[20px] pb-[40px]">
          <ul className="">
            <li>
              <p className="text-[#848484] text-[16px] font-[500] capitalize">
                {date}
              </p>
            </li>
            <li>
              <p className="text-[#080D41] text-[22px] font-[500] mb-[13px] capitalize ">
                {title}
              </p>
            </li>
            <li className="mt-[30px]">
              <Link to={`${linkTo}`}>
                <button className="text-primary text-[20px] font-[600] absolute bottom-3 left-3  capitalize">
                  read Blog
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
