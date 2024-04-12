import axiosInstance from "../../config/axios/axios.config";
import { TourScheduleData } from "../../types";

export const addNewTour = async (data: TourScheduleData) => {
  const response = await axiosInstance.post("/api/schedule_meeting/", data);
  return response.data;
};
