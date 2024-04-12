import axiosInstance from "../../config/axios/axios.config";
import { LogoutData, OtpLoginData } from "../../types";



//api call for login
export const postLogin = async (data: OtpLoginData) => {
  const response = await axiosInstance.get(
    `/api/auth/verify_otp_login?email=${data.email}&otp=${data.otp}`
  );
  return response.data;
};

export const postLogout = async (data: LogoutData) => {
  const response = await axiosInstance.post("employee/logout/", data);
  return response.data;
};
