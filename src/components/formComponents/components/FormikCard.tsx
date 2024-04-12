import React from "react";

interface FormCardProps {
  title?: string;
  children: React.ReactNode;
}

const FormikCard: React.FC<FormCardProps> = ({ title, children }) => {
  return (
    <div
      className={`flex flex-col md:gap-y-[60px] gap-y-[30px]  border-[1px] border-[#e6eaf1] rounded-[6px]  shadow-[0px_0px_10px_rgba(71,85,95,0.08)] py-[30px] md:py-[60px] px-[15px] md:px-[50px] bg-white items-center max-w-[full] w-full`}
    >
      <div className="flex justify-center w-[80%]">
        <p className="font-[700] text-[32px] md:text-[48px]  text-center ">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
};

export default FormikCard;
