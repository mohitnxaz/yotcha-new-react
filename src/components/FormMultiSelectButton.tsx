import WhiteButton from "../components/WhiteButton";
import React, { useState } from "react";

interface FormMultiSelectButtonProps {
  options: string[];
  title?: string;
}

const FormMultiSelectButton: React.FC<FormMultiSelectButtonProps> = ({
  options,
  title,
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
    <div>
      <p className="text-[#2A3C51] leading-[16px] text-[14px] font-[400] pb-[8px]">
        {title}
      </p>
      <div className="flex flex-wrap gap-y-[10px] rounded-[4px]">
        {options.map((item, index) => (
          <WhiteButton
            key={index}
            click={() => handleClickEvent(index)}
            buttonText={item}
            className={` text-[14px] text-[#00C5B4] rounded-none font-[400] border-[rgba(0,0,0,0.10)] border-[1px] py-[14px] px-[20px]  ${
              selectedButtons.includes(index)
                ? "text-[#fff] bg-[#00C5B4] "
                : ""
            }  ${index === 0 ? "rounded-[4px_0px_0px_4px]" : ""}  
          ${index === options.length - 1 ? "rounded-[0px_4px_4px_0px]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormMultiSelectButton;
