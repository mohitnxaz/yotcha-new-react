
import axiosInstance from "../../config/axios/axios.config";

interface PropertyType {
  id: number;
  name: string;
  created_by_id: number | null;
  created_at: string;
  updated_at: string;
}

interface Amenity {}

interface Image {
  id?: number;
  url: string;
}

interface PropertyData {
  property_status: string;
  price: number;
  area: number;
  bed_room: number;
  bath_room: number;
  address: string;
  unit: string;
  description: string;
  id: number;
  property_type: PropertyType;
  amenities: number[];
  listed_id: number;
  photos: Image[];
  videos: File[];
  additionalPhotos: File[];
  files?: any[];
}

export interface PropertyListing {
  property: PropertyData;
}

export const addNewProperty = async (data: PropertyListing) => {
  const formData = new FormData();
  console.log(data.property, "data to send");
  data.property.photos.forEach((photo: any, index) => {
    formData.append(`files[${index}]`, photo);
  });
  formData.append("property_status", data.property.property_status);
  formData.append("price", data.property.price.toString());
  formData.append("area", data.property.area.toString());
  formData.append("bed_room", data.property.bed_room.toString());
  formData.append("bath_room", data.property.bath_room.toString());
  formData.append("address", data.property.address);
  formData.append("unit", data.property.unit);
  formData.append("description", data.property.description);
  formData.append(
    "property_type_id",
    data.property.property_type.id.toString()
  );
  formData.append("listed_id", data.property.listed_id.toString());
  formData.append("amenities", data.property.amenities.toString());
  const response = await axiosInstance.post("/api/properties", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log({ data });
  return response.data;
};

export const getAmenities = async () => {
  try {
    const response = await axiosInstance.get(`/api/amenities/subtype/`);
    return response.data;
  } catch (e) {
    alert(e);
  }
};

export const getPropertyTypes = async () => {
  try {
    const response = await axiosInstance.get(`/api/property_types/`);
    return response.data;
  } catch (e) {
    alert(e);
  }
};
