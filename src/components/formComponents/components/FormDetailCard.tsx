import React from "react";

interface FormDetailCardProps {
  children: React.ReactNode;
  title?: string;
}

const FormDetailCard: React.FC<FormDetailCardProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col md:p-[30px] p-[20px] text-start font-[600] text-[19px] leading-[22px] max-w-full capitalize rounded-[8px] border border-[#E6EAF1] bg-[white] shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)]">
      {title}
      <div className="flex justify-start  md:gap-y-[24px]">
        {children}
      </div>
    </div>
  );
};

export default FormDetailCard;
