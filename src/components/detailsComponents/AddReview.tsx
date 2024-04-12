
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useSelector } from "react-redux";
import { AddReivewProps, AddReview } from "../../types";
import { useAddNewReview } from "../../hooks/details/useAddReview";
import GreenButton from "../GreenButton";
import { Textarea } from "../ui/textarea";
import GiveRating from "./GiveRating";

const validataionScheme = yup.object({});

const AddReivew: React.FC<AddReivewProps> = ({ agentId, propertyId }) => {
  const [rating1, setRating1] = React.useState(0);
  const [rating2, setRating2] = React.useState(0);
  const [rating3, setRating3] = React.useState(0);
  const [rating4, setRating4] = React.useState(0);
  const { mutate } = useAddNewReview();
  const email = useSelector((state: any) => state?.auth?.email);
  const formik = useFormik({
    initialValues: {
      message: "",
      title: "",
    },
    validationSchema: validataionScheme,
    onSubmit: (values, helpers) => {
      const reviewData: AddReview = {
        message: values.message,
        email: email,
        property_id: propertyId,
      };
      if (rating1 !== 0) {
        reviewData.property_quality = rating1;
      }
      if (rating2 !== 0) {
        reviewData.value_of_money = rating2;
      }
      if (rating3 !== 0) {
        reviewData.location = rating3;
      }
      if (rating4 !== 0) {
        reviewData.support = rating4;
      }
      console.log({ reviewData });
      mutate(reviewData);
      helpers.resetForm();
      setRating1(0);
      setRating2(0);
      setRating3(0);
      setRating4(0);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-row justify-between">
          <div className="text-black-body text-[15px] font-[400] leading-[22.5px]">
            Your rating for this listing
          </div>
          <div>
            <GreenButton
              className="rounded-[50px] bg-primary text-[14px] text-white py-[11px] px-[18px] hover:bg-primary-hover hover:text-white"
              buttonText={"Upload Photos"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[13px] items-start">
          {/* <Input
            className="border-[#DDD] h-[48px] text-[15px] rounded-[8px] text-[#6C757D] font-[400] border-solid"
            placeholder="Title"
          /> */}
          <Textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="min-h-[211px] border-[#DDD] h-[48px] text-[15px] rounded-[8px] text-[#6C757D] font-[400] border-solid"
            placeholder="message"
          />
          <div className="grid-cols-3 flex w-full">
            <div className="col-span-1">
              <div className="flex">
                <div className="w-[150px]">Property</div>
                <GiveRating
                  count={5}
                  value={rating1}
                  edit={true}
                  isHalf={true}
                  onChange={(value:number) => setRating1(value)}
                />
              </div>
              <div className="flex">
                <div className="w-[150px]">Value of money</div>
                <GiveRating
                  count={5}
                  value={rating2}
                  edit={true}
                  isHalf={true}
                  onChange={(value:number) => setRating2(value)}
                />
              </div>
              <div className="flex">
                <div className="w-[150px]">Location</div>
                <GiveRating
                  count={5}
                  value={rating3}
                  edit={true}
                  isHalf={true}
                  onChange={(value:number) => setRating3(value)}
                />
              </div>
              <div className="flex">
                <div className="w-[150px]">Support</div>
                <GiveRating
                  count={5}
                  value={rating4}
                  edit={true}
                  isHalf={true}
                  onChange={(value:number) => setRating4(value)}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center w-full">
              <div className="font-[600] text-[34px]">
                {(rating1 + rating2 + rating3 + rating4) / 4}
              </div>
              <div className="font-[500] text-[22px]">Overall Rating</div>
            </div>
          </div>
          <GreenButton
            type="submit"
            buttonText={"Submit Review"}
            className="hover:bg-primary-hover hover:text-white w-full sm:w-[20%] mt-4"
          />
        </div>
      </div>
    </form>
  );
};

export default AddReivew;
