import axiosInstance from "../../config/axios/axios.config";
import { AccountLoginDataType } from "../../types";



export const postUserLogin = async (data: AccountLoginDataType) => {
  const response = await axiosInstance.post("/api/auth/login", data);
  return response.data;
};

export const postAgentLogin = async (data: AccountLoginDataType) => {
  const response = await axiosInstance.post("/api/auth/login/agent", data);
  return response.data;
};
