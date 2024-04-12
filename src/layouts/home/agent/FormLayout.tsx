import React from "react";
import Topbar from "./Tobbar";
import { siteConfig } from "../../../constants/navigation";

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div className="w-full min-h-screen">
      <Topbar items={siteConfig?.mainNav} />
      <main>{children}</main>
    </div>
  );
};

export default FormLayout;
