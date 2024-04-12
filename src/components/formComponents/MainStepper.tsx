import React, { useEffect, useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import next from "../../../public/formNext.svg";
import back from "../../../public/formBack.svg";
import SubStep1 from "./SubStep1";
import SubStep2 from "./SubStep2";
import SubStep3 from "./SubStep3";
import SubStep4 from "./SubStep4";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useCreateProperty } from "../../hooks/property/useProperty";
import { PropertyListing } from "../../api/addProperty/propertyApi";

export interface PropertyType {
  id: number;
  name: string;
  created_by_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface AmenitySelection {
  amenityId: number;
  amenityName: string;
  selectedSubAmenities: { id: number; name: string }[];
}

interface PropertySubType {
  name: string;
  property_type_id: number | null;
  id: number | null;
  created_at: string;
  updated_at: string;
  created_by_id: number | null;
}

export interface Property {
  property: any;
  selectedAmenities: AmenitySelection[];
  property_name: string;
  property_status: string;
  project_status: string;
  walking_distance: string;
  price: string;
  currency: string;
  area: string;
  area_unit: string;
  bed_room: number;
  bath_room: number;
  address: string;
  country: string;
  listed_id: number | null;
  unit_number: string;
  tenure: string;
  listed_on: string;
  total_units: number | null;
  current_tenanted: boolean;
  floor_level: string;
  furnished_status: string;
  build_year: string;
  description: string;
  latitude: number | null;
  longitude: number | null;
  dynamic_amenities: string[];
  city: string;
  state: string;
  contact_name: string;
  username: string;
  email: string;
  contact_no: number | null;
  contact_latitude: number | null;
  contact_longitude: number | null;
  listing_feature: string;
  developer: string;
  tag: string[];
  listed_type: string;
  completion_year: string;
  project_stage: string;
  id: number | null;
  created_at: string;
  updated_at: string;
  created_by_id: number;
  propety_status: string;
  property_type: PropertyType;
  property_subtype: PropertySubType;
  amenities: any[];
  photos: File[];
  videos: File[];
  additionalPhotos: File[];
}

interface img {
  id: number | null;
  url: string;
}

export interface MainStepperForm {
  property: Property;
}

const MainStepper = () => {
  const { mutate: createProperty, isSuccess, isError } = useCreateProperty();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const totalSteps = 4;
  const totalSubStepsInStep1 = 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep === 1 && currentSubStep < totalSubStepsInStep1) {
      setCurrentSubStep(currentSubStep + 1);
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep === 1 && currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepNumber: React.SetStateAction<number>) => {
    setCurrentStep(stepNumber);
  };

  const renderStepComponent = () => {
    if (currentStep === 1) {
      switch (currentSubStep) {
        case 0:
          return <SubStep1 next={nextStep} />;
        case 1:
          return (
            <SubStep2
              next={nextStep}
              prev={prevStep}
              setSearchQuery={setSearchQuery}
              setSearchResult={setSearchResult}
            />
          );
        case 2:
          return (
            <SubStep3
              next={nextStep}
              prev={prevStep}
              searchResult={searchResult}
            />
          );
        case 3:
          return <SubStep4 prev={prevStep} />;
        default:
          return null;
      }
    }
    // Keep existing switch for other steps
    switch (currentStep) {
      case 2:
        return <Step2 next={nextStep} prev={prevStep} />;
      case 3:
        return <Step3 next={nextStep} prev={prevStep} />;
      case 4:
        return <Step4 prev={prevStep} />;
      default:
        return null;
    }
  };

  const stepDetails = [
    { number: "Step 1", name: "Property Details", index: 1 },
    { number: "Step 2", name: "Upload Images", index: 2 },
    { number: "Step 3", name: "Set Price", index: 3 },
    { number: "Step 4", name: "Confirmation", index: 4 },
  ];

  const initialMainStepperValues: MainStepperForm = {
    property: {
      photos: [],
      videos: [],
      additionalPhotos: [],
      selectedAmenities: [],
      property_name: "",
      property_status: "",
      project_status: "",
      walking_distance: "",
      price: "",
      area: "",
      area_unit: "",
      bed_room: 0,
      bath_room: 0,
      address: "",
      total_units: null,
      floor_level: "",
      furnished_status: "",
      build_year: "",
      description: "",
      latitude: null,
      longitude: null,
      city: "",
      state: "",
      contact_name: "",
      username: "",
      email: "",
      contact_no: null,
      contact_latitude: null,
      contact_longitude: null,
      listing_feature: "",
      tag: [],
      listed_type: "",
      completion_year: "",
      project_stage: "",
      propety_status: "",
      property_type: {
        id: 0,
        name: "",
        created_by_id: 0,
        created_at: "",
        updated_at: "",
      },
      property_subtype: {
        name: "",
        property_type_id: null,
        id: null,
        created_at: "",
        updated_at: "",
        created_by_id: null,
      },
      amenities: [],
      unit_number: "",
      created_at: "",
      updated_at: "",
      created_by_id: 0,
      property: undefined,
      currency: "",
      country: "",
      listed_id: null,
      tenure: "",
      listed_on: "",
      current_tenanted: false,
      dynamic_amenities: [],
      developer: "",
      id: null,
    },
  };

  function getNextListedId(): number {
    // Try to get the current listed_id from localStorage
    const currentId = parseInt(localStorage.getItem("listed_id") || "0", 10);
    const nextId = currentId + 1;

    // Save the nextId back to localStorage for the next use
    localStorage.setItem("listed_id", nextId.toString());

    return nextId;
  }

  const validationSchema = Yup.object().shape({
    property: Yup.object().shape({
      property_type: Yup.number().required("Property type is required"),
      price: Yup.number().required("Price is required"),
    }),
  });

  const handleSubmit = (values: {
    property: {
      price: any;
      property_status: any;
      area: any;
      bed_room: any;
      bath_room: any;
      address: any;
      unit_number: any;
      description: any;
      property_type: {
        id: any;
        name: any;
        created_by_id: any;
        created_at: any;
        updated_at: any;
      };
      selectedAmenities: any[];
      photos: any[];
    };
  }) => {
    // Prepare the data to match the expected format
    const postData: PropertyListing = {
      property: {
        price: Number(values.property.price),
        property_status: values.property.property_status,
        area: Number(values.property.area),
        bed_room: Number(values.property.bed_room),
        bath_room: Number(values.property.bath_room),
        address: values.property.address,
        unit: values.property.unit_number,
        description: values.property.description,
        property_type: {
          id: values.property.property_type.id,
          name: values.property.property_type.name,
          created_by_id: values.property.property_type.created_by_id,
          created_at: values.property.property_type.created_at,
          updated_at: values.property.property_type.updated_at,
        },
        amenities: values.property.selectedAmenities.flatMap((a) =>
          a.selectedSubAmenities.map((sa: { id: any }) => sa.id)
        ),
        id: 0,
        listed_id: getNextListedId(),
        photos: values.property.photos.map((photo) => ({
          url: photo.name,
        })),
        videos: [],
        additionalPhotos: [],
      },
    };

    // Use the createProperty function from the hook to submit the data
    createProperty(postData, {
      onSuccess: () => {
        console.log("Property successfully created");

        // Handle success (e.g., redirect to a success page or show a success message)
      },
      onError: (error) => {
        console.error("Error creating property:", error);
        console.log({ postData });
      },
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Formik
      initialValues={initialMainStepperValues}
      onSubmit={handleSubmit}
      // validationSchema={validationSchema}
    >
      <Form className="w-full">
        <div className="w-[100%]">
          {renderStepComponent()}
          <div className="w-full mt-[84px] flex sticky bottom-[40px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.20)]">
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center justify-center gap-[6px] max-w-[full] w-[60%] bg-white  border-r-[1px] border-[_rgba(0,0,0,0.20)]"
            >
              <img src={back} alt={""} />
              <p className="text-primary font-[500] text-[15px] leading-[24px]">
                Back
              </p>
            </button>

            {screenSize > 650
              ? stepDetails.map((detail, index) => (
                  <span
                    key={index}
                    onClick={() => goToStep(index + 1)}
                    className={`max-w-full w-full h-[100px] flex flex-col items-center justify-center hover:cursor-pointer  ${
                      currentStep === index + 1
                        ? "text-white bg-primary"
                        : "bg-white  border-r-[1px] border-[_rgba(0,0,0,0.20)]"
                    }`}
                  >
                    <p className="text-[16px] font-[300] select-none">
                      {detail.number}
                    </p>
                    <p className="text-[16px] font-[400] select-none">
                      {detail.name}
                    </p>
                  </span>
                ))
              : stepDetails
                  .filter((item: any) => item.index === currentStep)
                  .map((detail, index) => (
                    <span
                      className={`text-white bg-primary max-w-full w-full h-[100px] flex flex-col items-center justify-center hover:cursor-pointer`}
                    >
                      <p className="text-[16px] font-[300] select-none">
                        {detail.number}
                      </p>
                      <p className="text-[16px] font-[400] select-none">
                        {detail.name}
                      </p>
                    </span>
                  ))}

            {currentStep === totalSteps ? (
              <button
                type="submit"
                className="flex items-center justify-center gap-[6px] max-w-full w-[60%] bg-white"
              >
                <p className="text-primary font-[500] text-[18px] leading-[24px] bg-transparent">
                  Submit
                </p>
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center justify-center gap-[6px] max-w-full w-[60%] bg-white"
              >
                <img src={next} alt={""} />
                <p className="text-primary font-[500] text-[15px] leading-[24px]">
                  Next
                </p>
              </button>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default MainStepper;
