import axiosInstance from "../../config/axios/axios.config";


export const getAgentFilteredListing = async (data: any) => {
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

    const response = await axiosInstance.get(`/api/agent/agent`, {
      params: filteredData,
    });
    console.log(response,'api response agent')
    return response;
  } catch (e) {
    console.log(e);
  }
};
