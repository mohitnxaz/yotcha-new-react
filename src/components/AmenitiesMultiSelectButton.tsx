import WhiteButton from "../components/WhiteButton";
import React from "react";

interface AmenitiesMultiSelectButtonProps {
  options: { id: number; name: string }[];
  title?: string;
  selectedIds: number[];
  onSelectionChange: (selectedIds: number[]) => void;
}

const AmenitiesMultiSelectButton: React.FC<AmenitiesMultiSelectButtonProps> = ({
  options,
  title,
  selectedIds,
  onSelectionChange,
}) => {
  const handleClickEvent = (id: number) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];

    onSelectionChange(newSelectedIds);
  };

  return (
    <div className="md:flex items-center">
      <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px] max-w-[191px] w-full">
        {title}
      </p>
      <div className="flex flex-wrap gap-y-[10px] rounded-[4px]">
        {options.map((item, index) => (
          <WhiteButton
            key={item.id}
            click={() => handleClickEvent(item.id)}
            buttonText={item.name}
            className={` text-[14px] text-[#00C5B4] rounded-none font-[400] border-[rgba(0,0,0,0.10)] border-[1px] py-[14px] px-[20px] 
            ${
              selectedIds.includes(item.id) ? "text-[#fff] bg-[#00C5B4]" : ""
            }  ${index === 0 ? "rounded-[4px_0px_0px_4px]" : ""}  
          ${index === options.length - 1 ? "rounded-[0px_4px_4px_0px]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesMultiSelectButton;
