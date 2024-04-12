import axiosInstance from "../../config/axios/axios.config";

export const getPropertyType = () => {
  try {
    const response = axiosInstance.get(`/api/property_types`);
    return response;
  } catch (e) {
    alert(e);
  }
};

export const getPropertySubType = () => {
  try {
    const response = axiosInstance.get(`/api/property_subtypes`);
    return response;
  } catch (e) {
    alert(e);
  }
};

export const getFeatures = () => {
  try {
    const response = axiosInstance.get("/api/amenities/subtype");
    return response;
  } catch (e) {
    alert(e);
  }
};

export const getFilteredListing = async (data: any) => {
  try {
    // Filter out attributes with values of 0, [], or ''
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => {
        if (
          value === 0 ||
          value === null ||
          // value === NaN ||
          (Array.isArray(value) && value.length === 0) ||
          value === ""
        ) {
          return false; // Exclude this attribute
        }
        return true; // Include this attribute
      })
    );

    const response = await axiosInstance.get(`/api/properties/`, {
      params: filteredData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getListingBasedOnAddress = async (data: string) => {
  try {
    const response = await axiosInstance.get(`api/properties?address=${data}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
