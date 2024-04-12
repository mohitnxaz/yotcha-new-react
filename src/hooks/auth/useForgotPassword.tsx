
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callForgotPasswordApi } from "../../api/requestotp/requestOtp";
import { VerifyOtpDataType, setNewPassword, verifyOtp } from "../../api/auth/forgetPassword";

interface ResendOtpHookResult {
  handleResend: () => Promise<void>;
}
interface RootState {
  auth: {
    email: string;
  };
}

export const useForgotPassword = () => {
  const router =   useNavigate();
  return useMutation({
    mutationFn: async (data: string) => await callForgotPasswordApi(data),
    onSuccess: () => {
       router("/forgot-password/otp");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          console.log({ title: "Login failed", description: error.message });
        } else if (error.response.status === 400) {
          console.log({ title: "Login failed", description: error.message });
        }
      } else {
        console.log({ title: "Login failed", description: error.message });
      }
    },
  });
};

export const useResendOtpPassword: () => ResendOtpHookResult = () => {
  const email: string = useSelector((state: RootState) => state.auth.email);
  const { mutate: requestOtp } = useForgotPassword();

  const handleResend = async () => {
    try {
      await requestOtp(email);
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  return { handleResend };
};

export const useVerifyOtp = () => {
  const router =   useNavigate();
  return useMutation({
    mutationFn: async (data: VerifyOtpDataType) => await verifyOtp(data),
    onSuccess: (data: VerifyOtpDataType) => {
       router("/set-new-password");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          console.log({ title: "Login failed", description: error.message });
        } else if (error.response.status === 400) {
          console.log({ title: "Login failed", description: error.message });
        }
      } else {
        console.log({ title: "Login failed", description: error.message });
      }
    },
  });
};

export const useChangePassword = () => {
  const router =   useNavigate();
  return useMutation({
    mutationFn: async (data: VerifyOtpDataType) => await setNewPassword(data),
    onSuccess: () =>  router("/login"),

    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          console.log({ title: "Login failed", description: error.message });
        } else if (error.response.status === 400) {
          console.log({ title: "Login failed", description: error.message });
        }
      } else {
        console.log({ title: "Login failed", description: error.message });
      }
    },
  });
};
