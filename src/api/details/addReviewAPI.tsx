import { AddReview } from "../../types";
import axiosInstance from "../../config/axios/axios.config";

export const addNewReviews = async (data: AddReview) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) {
      formData.append(key, String(data[key]));
    }
  });

  const response = await axiosInstance.post("/api/review/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

//import axiosInstance from "../../config/axios/axios.config";
