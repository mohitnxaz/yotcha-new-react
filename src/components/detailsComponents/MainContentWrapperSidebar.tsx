import React from "react";

interface MainContentWrapperSidebarProps {
  children: React.ReactNode;
}

const MainContentWrapperSidebar: React.FC<MainContentWrapperSidebarProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col py-[30px] px-[24px] align-start rounded-[6px] border border-[#E6EAF1] bg-[white] shadow-[0px_0px_10px_1px_rgba(71,85,95,0.08)]">
      <div>{children}</div>
    </div>
  );
};

export default MainContentWrapperSidebar;
