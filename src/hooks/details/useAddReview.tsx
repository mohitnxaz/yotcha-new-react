import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "../../components/ui/use-toast";
import {addNewReviews } from "../../api/details/addReviewAPI";
import { AddReview } from "../../types";

export const useAddNewReview = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: AddReview) => await addNewReviews(data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your review was successfully added",
      });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Error!",
            description: "Failed to add your review",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Error!",
            description: "Failed to add your review",
            variant: "destructive",
          });
        } else if (error?.response?.status === 422) {
          toast({
            title: "Error!",
            description: "Failed to add your review",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error!",
            description: "Failed to add your review",
            variant: "destructive",
          });
        }
      }
    },
  });
};
