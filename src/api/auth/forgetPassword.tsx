import axiosInstance from "../../config/axios/axios.config";

export interface VerifyOtpDataType {
  email: string;
  otp: string;
  password?: string;
}

export const verifyOtp = async (data: VerifyOtpDataType) => {
  try {
    const response = await axiosInstance.post(
      `/api/auth/verify-otp?email=${data.email}&otp=${data.otp}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const setNewPassword = async (data: VerifyOtpDataType) => {
  try {
    const response = await axiosInstance.post(
      `/api/auth/forget-password?email=${data.email}&password=${data.password}&otp=${data.otp}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
