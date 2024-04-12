import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "../../components/ui/use-toast";
import { addNewTour } from "../../api/details/scheduleTourAPI";
import { TourScheduleData } from "../../types";

export const useCreateNewTour = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: TourScheduleData) => await addNewTour(data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "A tour was scheduled successfully",
      });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Error!",
            description: "Failed to schedule a tour",
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Error!",
            description: "Failed to schedule a tour",
            variant: "destructive",
          });
        } else if (error?.response?.status === 422) {
          toast({
            title: "Error!",
            description: "Failed to schedule a tour",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error!",
            description: "Failed to schedule a tour",
            variant: "destructive",
          });
        }
      }
    },
  });
};
