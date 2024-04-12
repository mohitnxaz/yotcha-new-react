import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginApiData, callLoginApi } from "../../api/requestotp/requestOtp";
import { useToast } from "../../components/ui/use-toast";

import { setAuthTokens } from "../../store/slices/auth/authSlice.reducers";
import { OtpLoginData } from "../../types";
import { postLogin } from "../../api/requestotp/otpLogin";


export const useLoginApi = () => {
  // const { toast } = useToast();

  const router =  useNavigate();

  return useMutation({
    mutationFn: async (data: LoginApiData) => await callLoginApi(data),
    onSuccess: () => {
      // toast({ title: "Login successful!" });
       router("/login/otp");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          // toast({ title: "Login failed", description: error.message });
        } else if (error.response.status === 400) {
          // toast({ title: "Login failed", description: error.message });
        }
      } else {
        // toast({ title: "Login failed", description: error.message });
      }
    },
  });
};

export const useUserLoginOtp = () => {
  const { toast } = useToast();
  const router =  useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (data: OtpLoginData) => await postLogin(data),
    onSuccess: async (data) => {
      const { access_token, refresh_token } = data;
      console.log(data);
      const role = "USER";
      //dispatch takes a action
      //You're dispatching an action created by the action creator setAuthTokens. This action contains an object with access_token and refresh_token.
      //In Redux, actions can be created without explicitly defining action creators. When you directly dispatch an action object, it's considered an inline action, and you don't need to define a separate action creator function.
      dispatch(setAuthTokens({ access_token, refresh_token, role }));
       router("/");
      toast({ title: "Welcome" });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Login failed",
            description: error.message,
            variant: "destructive",
          });
        } else if (error.response.status === 401) {
          toast({
            title: "Login failed",
            description: error.message,
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Login failed",
            description: "Invalid or expired token",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    },
  });

  return { ...mutation };
};
