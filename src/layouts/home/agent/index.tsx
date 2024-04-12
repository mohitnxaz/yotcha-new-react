import { siteConfig } from "../../../constants/navigation";
import { HomeProps } from "../../../types";
import Footer from "./Footer";
import Topbar from "./Tobbar";

const Home = ({ children }: HomeProps) => {
  return (
    <div className="w-full min-h-screen">
      <Topbar items={siteConfig?.mainNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Home;
