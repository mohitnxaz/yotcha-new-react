
import profilePic from "../../../public/icons/ktjpeg.jpeg";
import addressIcon from "../../../public/icons/mdi_taxi.svg";
import callIcon from "../../../public/icons/ic_baseline-phone.svg";
import emailIcon from "../../../public/icons/simple-line-icons_envolope.svg";

import * as yup from "yup";

import { useFormik } from "formik";

import { useSelector } from "react-redux";
import { InquiryData } from "../../types";
import { AuthState } from "../../store/slices/auth/authSlice.reducers";
import { useCreateInquiry } from "../../hooks/details/useInquiry";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import GreenButton from "../GreenButton";

interface AgentInformationProps {
  agentId: number;
  propertyId: number;
}

const validataionScheme = yup.object({});

const AgentInformation: React.FC<AgentInformationProps> = ({
  agentId,
  propertyId,
}) => {
  const email = useSelector((state: AuthState) => state.email);
  console.log({ email });
  const { mutate } = useCreateInquiry();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      message: "",
      email: "",
    },
    // validationSchema: validataionScheme,
    onSubmit: (values, helpers) => {
      //api still being fixed so tesing dummy data without validation

      const inquiryData: InquiryData = {
        full_name: values.fullName ?? "",
        phone_no: values.phone ?? "",
        email: values.email ?? "",
        message: values.message ?? "",
        agent_id: agentId,
        property_id: propertyId,
      };
      console.log({ inquiryData });
      mutate(inquiryData);
      helpers.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-[33px]">
        <div className="text-[#222] text-[18px] font-[600] leading-[21.6px] border-b pb-[20px] pt-[1px]">
          Agent Information
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[10px]">
            <img
              src={profilePic}
              alt={""}
              className="rounded-full sm:w-[85px] w-[50px]"
            />
            <div className="flex flex-col gap-[3px]">
              <div className="text-[#222] text-[18px] font-[600] leading-[21.6px]">
                Lisa Clark
              </div>
              <div className="text-black-body text-[15px] font-[400] leading-[26px]">
                Agent of Property
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] flex-wrap py-[10px]">
            <img src={addressIcon} alt={""} />
            <div className="text-black-body text-[15px] font-[400] leading-[22.5px] ">
              302 Av Par, New York
            </div>
          </div>
          <div className="flex gap-[10px] flex-wrap py-[10px]">
            <img src={callIcon} alt={""} />
            <div className="text-black-body text-[15px] font-[400] leading-[22.5px] ">
              (234) 0200 17813
            </div>
          </div>
          <div className="flex gap-x-[10px] flex-wrap py-[10px]">
            <img src={emailIcon} alt={""} />
            <div className="text-black-body text-[15px] font-[400] leading-[22.5px] ">
              lisa@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col py-[21px] gap-[16px] border-t">
          <div>Request Inquiry</div>
          <Input
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            className="border-[#DDD] h-[48px] text-[15px] rounded-[4px] text-[#6C757D] font-[400] border-solid"
            placeholder="Full Name"
          />
          <Input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="border-[#DDD] h-[48px] text-[15px] rounded-[4px] text-[#6C757D] font-[400] border-solid"
            placeholder="Phone Number"
          />
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border-[#DDD] h-[48px] text-[15px] rounded-[4px] text-[#6C757D] font-[400] border-solid"
            placeholder="Email Address"
          />
          <Textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="min-h-[100px] border-[#DDD] h-[48px] text-[15px] rounded-[4px] text-[#6C757D] font-[400] border-solid"
            placeholder="Message"
          />
          <GreenButton
            type="submit"
            buttonText={"Submit Request"}
            className="hover:bg-primary-hover hover:text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default AgentInformation;
