// import cross from "../../../public/whiteCross.svg";
import cross from "../../../public/whiteCross.svg";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../../public/upload.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useFormikContext } from "formik";
import { Property } from "../../types";
import FormikCard from "./components/FormikCard";

interface Step2Props {
  next: () => void;
  prev: () => void;
}

const Step2: React.FC<Step2Props> = ({}) => {
  const { setFieldValue, values, errors } = useFormikContext<Property>();
  const [filesMain, setFilesMain] = useState<File[]>([]);
  const [filesSub1, setFilesSub1] = useState<File[]>([]);
  const [filesSub2, setFilesSub2] = useState<File[]>([]);

  const handleDropzone1 = (acceptedFiles: File[], maxFiles: number) => {
    const totalFilesAfterAdding =
      values.property.photos.length + acceptedFiles.length;
    const filesToAddCount = maxFiles - values.property.photos.length;
    const filesToAdd = acceptedFiles.slice(
      0,
      filesToAddCount > 0 ? filesToAddCount : 0
    );
    if (totalFilesAfterAdding <= maxFiles) {
      const updatedFiles = [...values.property.photos, ...filesToAdd];
      setFieldValue("property.photos", updatedFiles);
      setFilesMain(updatedFiles);
    } else {
      console.warn(`Cannot add more than ${maxFiles} files.`);
    }
  };

  const handleDropzone2 = (acceptedFiles: File[], maxFiles: number) => {
    const totalFilesAfterAdding =
      values.property.additionalPhotos.length + acceptedFiles.length;
    const filesToAddCount = maxFiles - values.property.additionalPhotos.length;
    const filesToAdd = acceptedFiles.slice(
      0,
      filesToAddCount > 0 ? filesToAddCount : 0
    );
    if (totalFilesAfterAdding <= maxFiles) {
      const updatedFiles = [...values.property.additionalPhotos, ...filesToAdd];
      setFieldValue("property.additionalPhotos", updatedFiles);
      setFilesSub1(updatedFiles);
    } else {
      console.warn(`Cannot add more than ${maxFiles} files.`);
    }
  };

  const handleDropzone3 = (acceptedFiles: File[], maxFiles: number) => {
    const totalFilesAfterAdding =
      values.property.videos.length + acceptedFiles.length;
    const filesToAddCount = maxFiles - values.property.videos.length;
    const filesToAdd = acceptedFiles.slice(
      0,
      filesToAddCount > 0 ? filesToAddCount : 0
    );
    if (totalFilesAfterAdding <= maxFiles) {
      const updatedFiles = [...values.property.videos, ...filesToAdd];
      setFieldValue("property.videos", updatedFiles);
      setFilesSub2(updatedFiles);
    } else {
      console.warn(`Cannot add more than ${maxFiles} files.`);
    }
  };

  const handleDeleteFile = (
    index: number,
    setFiles: React.Dispatch<React.SetStateAction<File[]>>,
    fieldName: string
  ) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index); // newFiles is defined here
      setFieldValue(fieldName, newFiles); // Update Formik's state with newFiles
      return newFiles; // Return newFiles to update local state
    });
  };

  const renderFiles = (
    files: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
  ) => (
    <div className="flex flex-wrap gap-[6px]">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center"
          onClick={() => handleDeleteFile(index, setFiles, "photos")}
        >
          <p className="px-[10px] bg-primary text-white rounded-[5px] h-[40px] flex items-center hover:cursor-pointer gap-1">
            <p className="text-[15px] font-[200]">{file.name}</p>
            <img src={cross} alt={""} />
          </p>
        </div>
      ))}
    </div>
  );

  const { getRootProps: getRootPropsMain, getInputProps: getInputPropsMain } =
    useDropzone({
      onDrop: (acceptedFiles: File[]) => handleDropzone1(acceptedFiles, 25), // Add 'photos' as fieldName
      multiple: true,
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
        "image/webp": [],
      },
    });

  const { getRootProps: getRootPropsSub1, getInputProps: getInputPropsSub1 } =
    useDropzone({
      onDrop: (acceptedFiles: File[]) => handleDropzone2(acceptedFiles, 5), // Assuming 'photos' for sub1 as well
      multiple: true,
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
        "image/webp": [],
      },
    });

  const { getRootProps: getRootPropsSub2, getInputProps: getInputPropsSub2 } =
    useDropzone({
      onDrop: (acceptedFiles: File[]) => handleDropzone3(acceptedFiles, 1), // Use 'videos' for sub2
      multiple: true,
      accept: {
        "video/mp4": [],
        "video/*": [],
      },
    });

  return (
    <div className="w-full">
      <FormikCard
        title={"Upload beautiful photographs and video of your property"}
      >
        <div className="col-span-6 w-full">
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid grid-cols-3 mb-[42px] ">
              <TabsTrigger
                value="main"
                className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] md:text-[16px] text-[12px]"
              >
                Main
              </TabsTrigger>
              <TabsTrigger
                value="sub1"
                className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] md:text-[16px] text-[12px]"
              >
                Floor Plan
              </TabsTrigger>
              <TabsTrigger
                value="sub2"
                className="px-[15px] py-[10px]  border-b-[2px] data-[state=active]:border-b-[#00C5B4] data-[state=active]:font-[500] font-[400] md:text-[16px] text-[12px]"
              >
                Property Video
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="main"
              className="w-full border-[2px] border-dashed border-[#00C5B4] rounded-[6px] "
            >
              <div
                {...getRootPropsMain({ className: "dropzone" })}
                className="flex flex-col gap-y-[25px] items-center py-[63px]"
              >
                <input {...getInputPropsMain({ multiple: true })} />
                <img src={uploadIcon} alt={""} />
                <div className="w-[43%] flex justify-center">
                  <p className="select-none text-[#7c828e] text-[14px] font-[400] text-center">
                    You can upload up to 25 photographs.
                  </p>
                </div>
              </div>
              <aside className="border-t-[2px]  mx-[20px] py-[20px] ">
                <p className="select-none] text-[20px]">Files :</p>
                {renderFiles(values.property.photos, setFilesMain)}
              </aside>
            </TabsContent>

            <TabsContent
              value="sub1"
              className="w-full border-[2px] border-dashed border-[#00C5B4] rounded-[6px] "
            >
              <div
                {...getRootPropsSub1({ className: "dropzone" })}
                className="flex flex-col gap-y-[25px] items-center py-[63px]"
              >
                <input {...getInputPropsSub1({ multiple: true })} />
                <img src={uploadIcon} alt={""} />
                <div className="w-[43%] flex justify-center">
                  <p className="select-none text-[#7c828e] text-[14px] font-[400] text-center">
                    You can upload up to 5 photographs.
                  </p>
                </div>
              </div>
              <aside className="border-t-[2px]  mx-[20px] py-[20px] ">
                <p className="select-none] text-[20px]">Files :</p>
                {renderFiles(values.property.additionalPhotos, setFilesSub1)}
              </aside>
            </TabsContent>

            <TabsContent
              value="sub2"
              className="w-full border-[2px] border-dashed border-[#00C5B4] rounded-[6px] "
            >
              <div
                {...getRootPropsSub2({ className: "dropzone" })}
                className="flex flex-col gap-y-[25px] items-center py-[63px]"
              >
                <input {...getInputPropsSub2()} />
                <img src={uploadIcon} alt={""} />
                <div className="w-[43%] flex justify-center">
                  <p className="select-none text-[#7c828e] text-[14px] font-[400] text-center">
                    You can upload single video.
                  </p>
                </div>
              </div>
              <aside className="border-t-[2px]  mx-[20px] py-[20px] ">
                <p className="select-none] text-[20px]">Files :</p>
                {renderFiles(values.property.videos, setFilesSub2)}
              </aside>
            </TabsContent>
          </Tabs>
        </div>
      </FormikCard>
    </div>
  );
};

export default Step2;
