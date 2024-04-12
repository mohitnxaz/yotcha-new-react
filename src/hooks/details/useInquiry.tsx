

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "../../components/ui/use-toast";
import {  addNewInquiry } from "../../api/details/inquiryAPI";
import { InquiryData } from "../../types";

export const useCreateInquiry = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InquiryData) => await addNewInquiry(data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "An inquiry was successfully sent",
      });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Error!",
            description: "Failed to create an inquiry",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Error!",
            description: "Failed to create an inquiry",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error!",
          description: "Failed to create an inquiry",
          variant: "destructive",
        });
      }
    },
  });
};
