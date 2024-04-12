
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/use-toast";
import { setAuthTokens } from "../../store/slices/auth/authSlice.reducers";
import { postRegister } from "../../api/auth/accountRegister";
import { AccountLoginDataType, AccountRegisterDataType } from "../../types";
import { postAgentLogin, postUserLogin } from "../../api/auth/agentLogin";

export const useUserRegistration = () => {
  const router = useNavigate();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: AccountRegisterDataType) =>
      await postRegister(data),
    onSuccess: async (data) => {
      const { role }: { role: string } = data;
      toast({
        title:
          "Account created successfully. Now use the same credentials to login",
      });
      //push to differnt login screens based on the type of role selcted while registering account
      router(`/login/${role.toLowerCase()}-login`);
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        } else if (error.response.status === 401) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Registration Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    },
  });
};

export const useUserLogin = () => {
  const { toast } = useToast();
  const router = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (data: AccountLoginDataType) => await postUserLogin(data),
    onSuccess: async (data) => {
      const { access_token, refresh_token } = data;
      const role = "USER";
      dispatch(setAuthTokens({ access_token, refresh_token, role }));
      toast({ title: "Welcome back" });
      router("/");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Login Failed",
            description: "User Not Found",
            variant: "destructive",
          });
        } else if (error.response.status === 401) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    },
  });
};

export const useAgentLogin = () => {
  const { toast } = useToast();
  const router = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (data: AccountLoginDataType) =>
      await postAgentLogin(data),
    onSuccess: async (data) => {
      const { access_token, refresh_token } = data;
      alert("Login as Agent Successful");
      const role = "AGENT";
      dispatch(setAuthTokens({ access_token, refresh_token, role }));
      toast({ title: "Welcome back" });
      router("/");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Login Failed",
            description: "User Not Found",
            variant: "destructive",
          });
        } else if (error.response.status === 401) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Login Failed",
            description: "Invalid Credentials",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid Credentials",
          variant: "destructive",
        });
      }
    },
  });
};
