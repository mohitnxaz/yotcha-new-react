import axiosInstance from "../../config/axios/axios.config";
import { AccountRegisterDataType } from "../../types";

export const postRegister = async (data: AccountRegisterDataType) => {
  const response = await axiosInstance.post("/api/auth/register", data);
  return response.data;
};
