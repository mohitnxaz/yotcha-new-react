
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "../../components/ui/use-toast";
import { PropertyListing, addNewProperty } from "../../api/addProperty/propertyApi";

export const useCreateProperty = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: PropertyListing) => await addNewProperty(data),
    onSuccess: () => {
      toast({ title: "Success", description: "Property Added Successfully" });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 404) {
          toast({
            title: "Opps",
            description: `Failed to add new property because ${error.message}`,
            variant: "destructive",
          });
        } else if (error.response.status === 400) {
          toast({
            title: "Opps",
            description: `Failed to add new property because ${error.message}`,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Opps",
          description: `Failed to add new property because ${error.message}`,
          variant: "destructive",
        });
      }
    },
  });
};
