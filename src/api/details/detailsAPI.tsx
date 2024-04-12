import axiosInstance from "../../config/axios/axios.config";

export const getDetails = (id: number) => {
  try {
    const response = axiosInstance.get(`/api/properties/${id}`);
    return response;
  } catch (e) {
    alert(e);
  }
};

export const getSimilarProperties = (
  properType: string,
  price: number,
  floorArea: number,
  beds: number
) => {
  try {
    const response = axiosInstance.get(
      `/api/recommendation?max_items=3&property_type=${properType}&price=${price}0&floor_area=${floorArea}&bed_rooms=${beds}`
    );
    return response;
  } catch (e) {
    alert(e);
  }
};

export const getFeaturedProperties = (propertyType: string) => {
  try {
    const response = axiosInstance.get(
      `/api/feature_properties?max_items=5&property_type=${propertyType}`
    );
    return response;
  } catch (e) {
    alert(e);
  }
};
