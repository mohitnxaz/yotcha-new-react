import React from "react";

interface MainContentWrapperProps {
  title: string;
  children: React.ReactNode;
}

const MainContentWrapper: React.FC<MainContentWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col py-[30px] px-[24px] gap-[24px] align-start rounded-[6px] border border-[#E6EAF1] bg-[white] shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)]">
      <div className="text-[#000] leading-[22px] text-[18.8px] font-[600] ">
        {title}
        <div className="w-[50px] h-[3px] bg-primary mt-[8px]" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default MainContentWrapper;
