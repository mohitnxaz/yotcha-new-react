import axiosInstance from "../../config/axios/axios.config";

export const getAgentDetails = (id: number) => {
  try {
    const response = axiosInstance.get(`/api/agent/agent/${id}`);
    return response;
  } catch (e) {
    alert(e);
  }
};