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

const DetailsView = () => {
  const { id } = useParams();

  const { data: queryData, isLoading } = useQuery({
    queryKey: ["propertyDetails", id],
    queryFn: () => getDetails(Number(id)),
  });

  console.log({ queryData });

  const { data: similarPropertiesData } = useQuery({
    queryKey: ["simiarProperties", queryData],
    queryFn: () =>
      getSimilarProperties(
        queryData?.data?.property?.property_type?.name ?? "HDB",
        queryData?.data?.property?.price,
        queryData?.data?.property?.area,
        queryData?.data?.property?.bed_room ?? 1
      ),
  });
  const { data: featuredProperties } = useQuery({
    queryKey: ["featuredProperties", queryData],
    queryFn: () =>
      getFeaturedProperties(queryData?.data?.property?.property_type?.name),
  });
  console.log({ queryData });
  console.log({ featuredProperties });
  console.log({ similarPropertiesData });
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
      <div>
        <CarouselComponent images={carouselData} />
      </div>
      <div className="sm:grid sm:grid-cols-3 lg:px-[50px] md:gap-x-[40px] md:px-[20px] xl:px-[150px] sm:gap-x-[60px] sm:py-[80px] sm:px-[150px] py-[34px] px-[20px] bg-[#E2E6F1]">
        <div className="flex flex-col col-span-2 align-start gap-[24px]">
          <DetailedCard
            id={queryData?.data?.property?.id}
            property_name={queryData?.data?.property?.property_name}
            address={queryData?.data?.property?.address}
            price={queryData?.data?.property?.price}
            bed_room={queryData?.data?.property?.bed_room}
            bath_room={queryData?.data?.property?.bath_room}
            area={queryData?.data?.property?.area}
            walking_distance={queryData?.data?.property?.walking_distance}
            area_unit={queryData?.data?.property?.area_unit}
          />
          <MainContentWrapper title={"Description"}>
            <DetailedDescription
              details={queryData?.data?.property?.description}
            />
          </MainContentWrapper>
          <MainContentWrapper title={"Property Details"}>
            <PropertyDetails
              id={queryData?.data?.property?.id}
              price={queryData?.data?.property?.price}
              bath={queryData?.data?.property?.bath_room}
              type={queryData?.data?.property?.property_type?.name}
              room={queryData?.data?.property?.room}
              garage={queryData?.data?.property?.garage}
              status={queryData?.data?.property?.status}
              bedroom={queryData?.data?.property?.bed_room}
              yearBuilt={queryData?.data?.property?.created_at}
              subType={queryData?.data?.property?.property_subtype?.name}
            />
          </MainContentWrapper>
          <MainContentWrapper title={"Amenities"}>
            <Amenities amenities={queryData?.data?.property?.amenities} />
          </MainContentWrapper>
          <MainContentWrapper title={"Floor Plan"}>
            <FloorPlan imgLink="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </MainContentWrapper>
          <MainContentWrapper title={"What's Nearby"}>
            <NearbyInfo nearbyInfo={nearbyInformation} />
          </MainContentWrapper>
          <MainContentWrapper title={"Property Video"}>
            <PropertyVideo url="https://www.youtube.com/watch?v=leIK1aUOF-Q" />
          </MainContentWrapper>
          {/* <MainContentWrapper title={"address"}>
            <Mapaddress lat={20} long={100} />
          </MainContentWrapper> */}
          <MainContentWrapper title={"Price Insights"}>
            <PriceInsignts />
          </MainContentWrapper>
          <MainContentWrapper title={"Rating"}>
            <Ratings ratings={ratingData} />
          </MainContentWrapper>
          <MainContentWrapper title={"3 Reviews"}>
            <Reviews reviews={reviewData} />
          </MainContentWrapper>
          <MainContentWrapper title={"Add Review"}>
            <AddReivew agentId={1} propertyId={Number(id)} />
          </MainContentWrapper>
        </div>

        <div className="col-span-1 ">
          <div className="sticky top-[80px] ">
            <div className="flex flex-col gap-y-[24px]">
              <MainContentWrapperSidebar>
                <ButtonCluster />
              </MainContentWrapperSidebar>
              <MainContentWrapperSidebar>
                {/* currently we don't have agentId so just send 1 */}
                <ScheduleTour agentId={1} propertyId={Number(id)} />
              </MainContentWrapperSidebar>
              <MainContentWrapperSidebar>
                <AgentInformation agentId={1} propertyId={Number(id)} />
              </MainContentWrapperSidebar>
              <MainContentWrapperSidebar>
                <FeaturedProperties items={featuredProperties?.data} />
              </MainContentWrapperSidebar>
            </div>
          </div>
        </div>
        {/* maxitems is  3 for similar propertes...but it is not working right now so similar propeites layout */}
        {/* is mixed up */}
        <div className="col-span-3 h-full">
          <SimiarProperties items={similarPropertiesData?.data} />
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
