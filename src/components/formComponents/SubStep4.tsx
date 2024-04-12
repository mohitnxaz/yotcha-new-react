import { useFormikContext } from "formik";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useMemo } from "react";
import { getAmenities } from "../../api/addProperty/propertyApi";
import { Property } from "../../types";
import AmenitiesMultiSelectButton from "../AmenitiesMultiSelectButton";
import FormTextArea from "../FormTextArea";
import FormikCard from "./components/FormikCard";


interface SubStep4Props {
  prev: () => void;
}

const SubStep4: React.FC<SubStep4Props> = ({ prev }) => {
  const { data: queryData, isLoading } = useQuery({
    queryKey: ["amenities"],
    queryFn: () => getAmenities(),
  });

  const { values, setFieldValue } = useFormikContext<Property>();

  const handleAmenitiesSelectionChange = useCallback(
    (amenityId: number, selectedSubAmenityIds: number[]) => {
      // Find the full amenity object including its sub-amenities from queryData
      const fullAmenity = queryData.find(
        (a: { id: number }) => a.id === amenityId
      );
      if (!fullAmenity) return; // Guard clause in case the amenity is not found

      // Map selectedSubAmenityIds to their corresponding sub-amenities objects
      const selectedSubAmenities = fullAmenity.amenities
        .filter((subAmenity: { id: number }) =>
          selectedSubAmenityIds.includes(subAmenity.id)
        )
        .map((subAmenity: { id: any; name: any }) => ({
          id: subAmenity.id,
          name: subAmenity.name, // Ensuring each sub-amenity object has an id and a name
        }));

      // First, see if the amenityId already exists in the array
      const existingAmenityIndex = values.property.selectedAmenities.findIndex(
        (a: { amenityId: number }) => a.amenityId === amenityId
      );

      if (existingAmenityIndex !== -1) {
        // If it exists, update the selectedSubAmenities for that amenity
        const updatedAmenities = [...values.property.selectedAmenities];
        updatedAmenities[existingAmenityIndex] = {
          amenityId,
          amenityName: fullAmenity.name, // Include the amenity name
          selectedSubAmenities, // Update to use the full objects including names
        };
        setFieldValue("property.selectedAmenities", updatedAmenities);
      } else {
        // If it doesn't exist, add a new entry with the amenityId, amenityName, and selectedSubAmenities
        setFieldValue("property.selectedAmenities", [
          ...values.property.selectedAmenities,
          {
            amenityId,
            amenityName: fullAmenity.name, // Include the amenity name
            selectedSubAmenities, // Use the full objects including names
          },
        ]);
      }
    },
    [setFieldValue, values.property.selectedAmenities, queryData] // Add queryData to the dependency array
  );

  const sortedAmenities = useMemo(() => {
    if (!queryData) return [];
    return [...queryData].sort((a, b) => {
      return a.id - b.id;
    });
  }, [queryData]);

  return (
    <FormikCard title={"Amenities"}>
    <div className="col-span-5 w-full flex flex-col gap-y-[42px]">
      {sortedAmenities.map((amenity: any) => {
        // Determine the currently selected sub-amenity IDs for this amenity
        const currentAmenitySelection = values.property.selectedAmenities.find((a: { amenityId: any; }) => a.amenityId === amenity.id);
        const selectedSubAmenityIds = currentAmenitySelection ? currentAmenitySelection.selectedSubAmenities.map((sa: { id: any; }) => sa.id) : [];

        return (
          <AmenitiesMultiSelectButton
            key={amenity.id}
            title={amenity.name}
            options={amenity.amenities.map((subAmenity: { id: any; name: any; }) => ({
              id: subAmenity.id,
              name: subAmenity.name,
            }))}
            selectedIds={selectedSubAmenityIds} // Pass the currently selected sub-amenity IDs
            onSelectionChange={(selectedSubAmenityIds) => {
              handleAmenitiesSelectionChange(amenity.id, selectedSubAmenityIds);
            }}
          />
        );
      })}
      <div className="w-full border-[2px] border-dashed border-[#00C5B4] rounded-[6px] flex flex-col items-center px-[30px] py-[60px] ">
        <p className="text-[#0B2C3D] text-[20px] leading-[30px] pb-[40px]">
          Anything else you’d like to share about the amenities?
        </p>
        <FormTextArea
          title={""}
          placeholder="Highlight anything not captured above that make your property"
          rows={5}
          value={values.property.description}
          onChange={(e: { target: { value: any } }) =>
            setFieldValue("property.description", e.target.value)
          }
        />
      </div>
    </div>
  </FormikCard>
  );
};

export default SubStep4;
