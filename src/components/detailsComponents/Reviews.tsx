// import tempImage from "../../../../public/icons/avatar-02.jpg.png";
import tempImage from "../../../public/icons/avatar-02.jpg.png";
import StarIcons from "./StarIcon";

interface ReviewData {
  image: string;
  name: string;
  date: string;
  rating: number;
  review: string;
}

interface ReviewsProps {
  reviews: ReviewData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return reviews.map((item, index) => (
    <div key={index} className="flex flex-col gap-[35px] mb-[4 0px]">
      <div className="flex gap-[36px] ">
        <div>
          <img
            src={tempImage}
            alt={""}
            className="rounded-full sm:w-[85px] w-[300px]"
          />
        </div>
        <div className="flex flex-col pb-[6px] mb-[10px] gap-[10px] ">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[8px] ">
              <div className="text-primary text-[17px] font-[600] leading-[20.4px]">
                {item.name}
              </div>
              <div className="text-black-body text-[15px] font-[400] leading-[26px]">
                {item.date}
              </div>
            </div>
            <div>
              <StarIcons rating={item.rating} />
            </div>
          </div>
          <div className="text-black-body text-[14px] font-[400] leading-[24px]">
            {item.review}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Reviews;
