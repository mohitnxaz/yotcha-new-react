import axiosInstance from "../../config/axios/axios.config";

export const getListing = () => {
  try {
    const response = axiosInstance.get(`/api/properties/`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getLatestListing = () => {
  try {
    const response = axiosInstance.get(`/api/properties-latest?limit=6`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
