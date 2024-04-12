// const AgentDetailsView = () => {
//   return <div>AgentDetailsView</div>;
// };

// export default AgentDetailsView;
import profilePic from "../../../public/icons/ktjpeg.jpeg";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getDetails,
  getFeaturedProperties,
  getSimilarProperties,
} from "../../api/details/detailsAPI";
import CarouselComponent from "../../components/CarouselComponent";
import DetailedCard from "../../components/detailsComponents/DetailsCard";
import MainContentWrapper from "../../components/detailsComponents/MainContentWrapper";
import DetailedDescription from "../../components/detailsComponents/DetailedDescription";
import PropertyDetails from "../../components/detailsComponents/PropertyDetails";
import FloorPlan from "../../components/detailsComponents/FloorPlan";
import SimiarProperties from "../../components/detailsComponents/SimiarProperties";
import MainContentWrapperSidebar from "../../components/detailsComponents/MainContentWrapperSidebar";
import AgentInformation from "../../components/detailsComponents/AgentInformation";
import ScheduleTour from "../../components/detailsComponents/ScheduleTour";
import FeaturedProperties from "../../components/detailsComponents/FeaturedProperty";
import ButtonCluster from "../../components/detailsComponents/ButtonCluster";
import AddReivew from "../../components/detailsComponents/AddReview";
import Reviews from "../../components/detailsComponents/Reviews";
import Ratings from "../../components/detailsComponents/Ratings";
import PriceInsignts from "../../components/detailsComponents/PriceInsights";
import NearbyInfo from "../../components/detailsComponents/NearbyInfo";
import PropertyVideo from "../../components/detailsComponents/PropertyVideo";
import Amenities from "../../components/detailsComponents/Amenities";
import adviceIcon from "../../../public/advice-icon.png";
import identityIcon from "../../../public/id-icon.png";
import reviewIcon from "../../../public/review-icon.png";
import settingsIcon from "../../../public/settings-4-24.png";
import dropdownIcon from "../../../public/arrow-circle-right (1).svg";
import hotlineIcon from "../../../public/hotline-icon.png";
import insuranceIcon from "../../../public/insurance-icon.png";
import GreenButton from "../../components/GreenButton";
import VerificationComponent from "../../components/agetnDirectoryDetailsComponent/Verifications";
import MoreInfoComponent from "../../components/agetnDirectoryDetailsComponent/MoreInfo";
import AgentBlogs from "../../components/agetnDirectoryDetailsComponent/AgentBlogs";
import { getAgentDetails } from "../../api/agentDetails/agentDetails";

const AgentDetailsView = () => {
  const { id } = useParams();

  const { data: queryData, isLoading } = useQuery({
    queryKey: ["agentDetails", id],
    queryFn: () => getAgentDetails(Number(id)),
  });
  console.log({ queryData });

  // const { data: similarPropertiesData } = useQuery({
  //   queryKey: ["simiarProperties", queryData],
  //   queryFn: () =>
  //     getSimilarProperties(
  //       queryData?.data?.property?.property_type?.name ?? "HDB",
  //       queryData?.data?.property?.price,
  //       queryData?.data?.property?.area,
  //       queryData?.data?.property?.bed_room ?? 1
  //     ),
  // });
  // const { data: featuredProperties } = useQuery({
  //   queryKey: ["featuredProperties", queryData],
  //   queryFn: () =>
  //     getFeaturedProperties(queryData?.data?.property?.property_type?.name),
  // });
  // console.log({ queryData });
  // console.log({ featuredProperties });

  const carouselData = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const reviewData = [
    {
      name: "Wilson Culhane",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "11 Dec 2023",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec laoreet ipsum vestibulum sed.",
    },
    {
      name: "Wilson Culhane",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "11 Dec 2023",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec laoreet ipsum vestibulum sed.",
    },
    {
      name: "Wilson Culhane",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "11 Dec 2023",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec laoreet ipsum vestibulum sed.",
    },
  ];

  const ratingData = {
    average: 3.2,
    property: 1,
    valueforMoney: 5,
    address: 3,
    support: 4,
  };
  const nearbyInformation = {
    education: [
      { name: "School A", distance: 1.5, rating: 4.5 },
      { name: "School B", distance: 2.0, rating: 4.0 },
    ],
    health: [
      { name: "Hospital X", distance: 0.8, rating: 4.8 },
      { name: "Clinic Y", distance: 1.2, rating: 4.2 },
    ],
    transportation: [
      { name: "Bus Stop 1", distance: 0.5, rating: 3.9 },
      { name: "Train Station 2", distance: 1.8, rating: 4.1 },
    ],
  };
  return (
    <div>
      <div className="bg-[url('/agentBg.jpg')] bg-cover bg-center h-auto">
        {/* inset-0 makes top left bottom right 0 so that div stretches entire parent div */}
        <div className="inset-0 bg-primary bg-opacity-25 w-full">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-y-6 py-[30px] items-center px-[50px] sm:px-[20px] md:px-[20px] xl:px-[150px] gap-x-8 flex-wrap">
                <div className="flex flex-col justify-center gap-6">
                  <img
                    src={profilePic}
                    className="rounded-full sm:w-[130px] w-[120px]"
                  />
                  <div>
                    <GreenButton
                      buttonText={"Get in touch"}
                      className={` px-[16px] h-[29px] hover:bg-[#00C5B6] hover:text-white uppercase  text-[13px] font-[500] bg-primary`}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[36px] text-white font-[600] mb-5">
                    Hello, I'm <span>{queryData?.data?.fullname}</span>
                  </div>
                  <div className="flex gap-4 gap-y-3 flex-wrap mb-3">
                    <div>
                      <img src={identityIcon} className="w-[34px]" />
                    </div>
                    <div>
                      <img src={reviewIcon} className="w-[34px]" />
                    </div>
                  </div>
                  <div className="text-[16px] text-[#F1F1F1]">
                    email@gmailc.com
                  </div>
                  <div className="text-[16px] text-[#F1F1F1]">
                    +878 232327222
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[30px] items-center pr-[10px] sm:px-[20px] md:px-[20px] xl:px-[150px] gap-x-8 flex-wrap">
              <img src={settingsIcon} className="w-[30px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:px-[20px] lg:px-[50px] md:gap-x-[40px] md:px-[20px] xl:px-[150px] sm:gap-x-[60px] sm:py-[80px]  py-[34px] px-[20px] bg-[#E2E6F1]">
        <div className="col-span-1 ">
          <div className="sticky top-[80px] ">
            <div className="flex flex-col gap-y-[24px]">
              <MainContentWrapper title="Verifications">
                <VerificationComponent />
              </MainContentWrapper>
              <MainContentWrapper title="Additional Info">
                <MoreInfoComponent
                  agentName={queryData?.data?.fullname}
                  ceaNumber={queryData?.data?.cea_number}
                  estageAgencyLicense={queryData?.data?.estate_agency_license}
                  companyName={queryData?.data?.estate_agency}
                />
              </MainContentWrapper>
              <MainContentWrapperSidebar>
                <div>
                  Last Login{" "}
                  <span className="italic text-primary font-[600]">
                    5 days ago
                  </span>
                </div>
              </MainContentWrapperSidebar>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 align-start gap-[24px]">
          <MainContentWrapper title={"Rating"}>
            <Ratings ratings={ratingData} />
          </MainContentWrapper>
          <MainContentWrapper title={"3 Reviews"}>
            <Reviews reviews={reviewData} />
          </MainContentWrapper>
          <MainContentWrapper title={"My Recent Transactions"}>
            <PriceInsignts />
          </MainContentWrapper>
          <MainContentWrapper title={"My Blogs"}>
            <AgentBlogs />
          </MainContentWrapper>
        </div>

        {/* maxitems is  3 for similar propertes...but it is not working right now so similar propeites layout */}
        {/* is mixed up */}
        <div className="col-span-3 h-full">
          {/* <SimiarProperties items={similarPropertiesData?.data} /> */}
        </div>
      </div>
    </div>
  );
};

export default AgentDetailsView;
