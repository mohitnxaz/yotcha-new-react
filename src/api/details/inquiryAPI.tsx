import axiosInstance from "../../config/axios/axios.config";
import { InquiryData } from "../../types";



export const addNewInquiry = async (data: InquiryData) => {
  const response = await axiosInstance.post("/api/inquiries/", data);
  return response.data;
};
