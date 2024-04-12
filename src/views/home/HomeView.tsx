// import BusinessTimes from "../../../public/image1.svg";
import BusinessTimes from "../../../public/image1.svg";
import media from "../../../public/image2.svg";
import channel from "../../../public/image3.svg";
import middle from "../../../public/image4.svg";
import disrupt from "../../../public/image5.svg";
import straits from "../../../public/image6.svg";

import sanFran from "../../../public/sanFran.png";
import sanFran1 from "../../../public/sanFran1.png";
import sanFran2 from "../../../public/sanFran2.png";
import youtube from "../../../public/youtube.svg";
import WH1 from "../../../public/WH1.svg";
import WH2 from "../../../public/WH2.svg";
import WH3 from "../../../public/WH3.svg";
import WH4 from "../../../public/WH4.svg";

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import ReactPlayer from "react-player";
import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WhiteButton from "../../components/WhiteButton";
import HomePageSerachBar from "../../components/HomePageSearchBar";
import GreenButton from "../../components/GreenButton";
import { Button } from "../../components/ui/button";
import WhyChooseCard from "../../components/homeComponents/WhyChooseUsCard";
import LocationCard from "../../components/homeComponents/LocationCard";
import GridViewListing from "../../components/common/GridViewListing";
import { getLatestListing } from "../../api/listing/listingAPI";
import { useEffect, useState } from "react";
import CarouselComponent from "../../components/CarouselComponent";
import Autoplay from "embla-carousel-autoplay";

const HomeView = () => {
  const router = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { data: latestListing } = useQuery({
    queryKey: ["latestListing"],
    queryFn: () => {
      return getLatestListing();
    },
  });

  const role = useSelector((state: any) => state.auth.tokens.role);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLatestListingClick = () => {
    router("/listing");
  };

  return (
    <div className="w-full">
      <section className=" bg-[url('/hero.png')] bg-center bg-scroll h-[432px] md:h-[700px] bg-cover overflow">
        <div className="flex flex-col gap-y-[36px] absolute translate-x-[-50%] translate-y-[-140%] md:translate-y-[-50%]  top-[50%] left-[50%] items-center">
          <div className="">
            <p className="text-center text-white text-[28px] lg:text-[60px] md:text-[45px] font-[700] select-none">
              Find Your Dream Home
            </p>
            <p className="lg:text-[25px] md:text-[22px] text-[16px] font-[500] text-center text-white select-none">
              We Have Over Million Properties For You.
            </p>
          </div>
          {/* Search */}
          {/* <div className="px-[30px] md:py-[40px] flex flex-col gap-y-[18px] md:w-full w-auto"> */}
          <div className="w-auto md:w-full">
            <div className="flex gap-x-[11px] justify-center">
              <WhiteButton
                className="px-[37px] py-[10px] text-[15px] font-[500] md:h-[50px] h-[45px] w-[20%]"
                buttonText={"Buy"}
              />
              <WhiteButton
                className="px-[37px] py-[10px] text-[15px] font-[500] md:h-[50px] h-[45px] w-[20%]"
                buttonText={"Rent"}
              />
              <WhiteButton
                className="px-[37px] py-[10px] text-[15px] font-[500] md:h-[50px] h-[45px] w-[20%]"
                buttonText={"Sell"}
              />
            </div>
            <div className="bg-[rgba(255,255,255,0.19)] p-[9px] rounded-[5px] md:h-[92px] h-[70px] w-[320px] md:w-auto">
              <div className="bg-[white]  rounded-[5px] shadow-md p-[0px_4px_4px_4px] h-[50px] md:h-[69px]">
                <HomePageSerachBar />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partnerBar bg-[#EAEAEA] ">
        {screenSize < 500 ? (
          <div className="h-[100px] px-11">
            <CarouselComponent
              isAuto={true}
              images={[BusinessTimes, media, channel, middle, disrupt, straits]}
            />
          </div>
        ) : screenSize < 800 ? (
          <div className="h-[100px] px-11">
            <CarouselComponent
              isAuto={true}
              images={[BusinessTimes, media, channel, middle, disrupt, straits]}
            />
          </div>
        ) : screenSize < 1300 ? (
          <div className="h-[100px] px-11">
            <CarouselComponent
              isAuto={true}
              images={[BusinessTimes, media, channel, middle, disrupt, straits]}
            />
          </div>
        ) : (
          <div className="flex justify-center gap-x-[50px] py-[40px] w-auto flex-wrap">
            <img src={BusinessTimes} alt={""} />
            <img src={media} alt={""} />
            <img src={channel} alt={""} />
            <img src={middle} alt={""} />
            <img src={disrupt} alt={""} />
            <img src={straits} alt={""} />
          </div>
        )}
      </section>
      <section className="propertyListing md:container flex flex-col items-center px-[20px] md:py-[100px] py-[50px] w-full">
        <div>
          <p className="uppercase text-black-title text-[25px] md:text-[32px] font-[700] leading-[35px] select-none">
            LATEST PROPERTY LISTINGS
          </p>
        </div>
        <div className="md:py-[60px] py-[30px] gap-[30px] ">
          <GridViewListing items={latestListing?.data} />
        </div>
        <div className="w-[218px]">
          <GreenButton
            onClick={handleLatestListingClick}
            className="rounded-[30px] w-full bg-primary text-white p-[20px_52px] md:h-[60px] hover:bg-primary-hover hover:text-white"
            buttonText={"Load More"}
          />
        </div>
      </section>
      <section className="addresssListing bg-[#E2E6F1] p-[10px]">
        <div className="lg:container flex flex-col items-center md:py-[100px] py-[50px]">
          <div>
            <p className="capitalize text-black-title md:text-[32px] text-[24px] font-[700] leading-[35px] select-none">
              Find By Locations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[20px] md:gap-[30px] pt-[63px]">
            <LocationCard
              image={sanFran}
              address={"san francisco, california"}
              propertynumber={1}
            />
            <LocationCard
              image={sanFran1}
              address={"san francisco, california"}
              propertynumber={0}
            />
            <LocationCard
              image={sanFran2}
              address={"san francisco, california"}
              propertynumber={3}
            />
            <LocationCard
              image={sanFran}
              address={"san francisco, california"}
              propertynumber={1}
            />
            <LocationCard
              image={sanFran1}
              address={"san francisco, california"}
              propertynumber={0}
            />
            <LocationCard
              image={sanFran2}
              address={"san francisco, california"}
              propertynumber={3}
            />
          </div>
        </div>
      </section>
      <section className="bg-[url('/Video.jpg')] h-[600px]  bg-scroll bg-cover flex items-center relative p-[10px]">
        <div className="md:container ">
          <div className="bg-white md:w-[391px] w-[300px] md:h-[236px] rounded-[5px] md:p-[30px] p-[15px] z-10">
            <p className="text-start text-primary text-[18px] font-[600] select-none capitalize pb-[10px]">
              Let’s Take A Tour
            </p>
            <p className="md:text-[28px] text-[24px] font-[400] select-none capitalize pb-[30px] leading-[37px]">
              Search Property Smarter, Quicker & Anywhere
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="p-0 group bg-transparent hover:bg-transparent">
                  <div className="flex justify-between items-center gap-x-[10px] group-hover:scale-[1.1] transition duration-[5ms] ease-in-out ">
                    <img src={youtube} alt={""} className="" />
                    <p>Play video</p>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="absolute top-0 left-0 w-full h-full">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url="https://www.youtube.com/watch?v=mJVuZiK9a6I"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <section className="choose bg-[#E2E6F1]">
        <div className="lg:container py-[100px] flex flex-col items-center">
          <p className="select-none text-black-title font-[700] text-[24px] md:text-[32px] leading-[35px] capitalize pb-[63px]">
            Why Choose Us
          </p>
          <div className="flex flex-wrap gap-[30px] justify-center">
            <WhyChooseCard
              logo={WH1}
              title={"Trusted By Thousands"}
              detail={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
              }
            />
            <WhyChooseCard
              logo={WH2}
              title={"Trusted By Thousands"}
              detail={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
              }
            />
            <WhyChooseCard
              logo={WH3}
              title={"Trusted By Thousands"}
              detail={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
              }
            />
            <WhyChooseCard
              logo={WH4}
              title={"Trusted By Thousands"}
              detail={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque"
              }
            />
          </div>
        </div>
      </section>
      <section className="bg-[url('/Dream.jpg')] h-[621px] bg-scroll bg-cover bg-center overflow ">
        <div className="flex flex-col items-center gap-y-[15px] pt-[80px] ">
          <p className="md:text-[28px] text-[24px] font-[500] text-center">
            Find Your Dream Home Today
          </p>
          <GreenButton
            onClick={handleLatestListingClick}
            buttonText={"Book Now"}
            className="hover:bg-primary-hover hover:text-white px-[32px] h-[44px] "
          />
        </div>
      </section>
    </div>
  );
};

export default HomeView;
