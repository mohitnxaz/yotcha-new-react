
import React, { useState } from "react";
import WhiteButton from "../WhiteButton";

interface MultiSelectButtonOptionProps {
  options: string[];
  type?: string;
}

const MultiSelectButtonOption: React.FC<MultiSelectButtonOptionProps> = ({
  options,
  type,
}) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
  const handleClickEvent = (index: number) => {
    const indexOfPassedButton = selectedButtons.indexOf(index);
    const alreadySelected: boolean = selectedButtons.includes(index);

    const newSelectedButtons = alreadySelected
      ? selectedButtons.filter((buttonIndex) => buttonIndex !== index)
      : [...selectedButtons, index];
    setSelectedButtons(newSelectedButtons);
    console.log("selected buttons ", selectedButtons);
  };
  return (
    <div className="flex flex-wrap gap-[12px]">
      {options?.map((item, index) => (
        <WhiteButton
          key={index}
          click={() => handleClickEvent(index)}
          buttonText={item}
          className={`text-[#000] text-[14px] leading-[16.5px] font-[400] rounded-[16px] bg-[#EFEEEE] py-[6px] px-[20px] h-min ${
            selectedButtons.includes(index)
              ? "text-primary bg-[rgba(0,197,180,0.17)]"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default MultiSelectButtonOption;
