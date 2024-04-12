import axiosInstance from "../../config/axios/axios.config";

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface LoginApiData {
  email: string;
}

export const callLoginApi = async (data: LoginApiData) => {
  try {
    const response = await axiosInstance.get(
      `/api/auth/query?email=${data.email}`
    );
    return response.data as ApiResponse;
  } catch (error) {
    console.error("Error calling Next.js API:", error);
    throw error;
  }
};

export const callForgotPasswordApi = async (data: string) => {
  try {
    const response = await axiosInstance.post(
      `/api/auth/forget-password-send-otp?email=${data}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
