import WhiteButton from "../components/WhiteButton";
import React from "react";

interface FormSingleSelectButtonProps {
  options: string[];
  title?: string;
  selected?: string;
  onSelect: (selected: string) => void;
}

const FormSingleSelectButton: React.FC<FormSingleSelectButtonProps> = ({
  options,
  title,
  selected,
  onSelect,
}) => {
  const handleClickEvent = (option: string) => {
    onSelect(option);
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
            click={() => handleClickEvent(item)}
            buttonText={item}
            className={`text-[14px] text-[#00C5B4] rounded-none font-[400] border-[rgba(0,0,0,0.10)] border-[1px] py-[14px] px-[20px] ${
              selected === item ? "text-[#fff] bg-[#00C5B4]" : ""
            } ${index === 0 ? "rounded-[4px_0px_0px_4px]" : ""}  
            ${index === options.length - 1 ? "rounded-[0px_4px_4px_0px]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormSingleSelectButton;
