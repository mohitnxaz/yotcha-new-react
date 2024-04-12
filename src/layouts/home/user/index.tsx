import { useEffect } from "react";
import { siteConfig } from "../../../constants/navigation";
import { HomeProps } from "../../../types";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { getFilterOptionsAsync } from "../../../store/slices/filter/filterThunk";

const HomeLayout = ({ children }: HomeProps) => {


  return (
    <div className="w-full min-h-screen">
      <Topbar items={siteConfig?.mainNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
