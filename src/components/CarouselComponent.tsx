import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
// import testImage from "../../../../public/icons/testCarousel.png";

interface CarouselComponentProps {
  images?: string[];
  src?: string;
  items?: number;
  isAuto?: boolean;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  images,
  src,
  items,
  isAuto,
}) => {
  return (
      <Carousel
        className="relative"
        opts={{
          loop: true,
          slidesToScroll: isAuto ? 1 : 2,
          dragFree: true,
        }}
      >
        <CarouselContent >
          {images?.map((item, index) => (
            <CarouselItem
              key={index}
              className={!isAuto?"md:basis-1/6 lg:basis-1/6  pl-[0px]":"sm:basis-2/3 md:basis-1/4 lg:basis-1/5  pl-[0px]"}
            >
             
                <img
                  src={item}
                  alt={""}
                  className={
                    !isAuto
                      ? `object-cover lg:min-h-[100%] md:min-h-[260px] w-full`
                      : `object-fit mt-[21px] mx-[-60px]`
                  }
                />
              
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isAuto && (
          <div className="absolute top-[50%] left-[80%]">
            <CarouselNext className="bg-secondary border-none w-[38px] h-[38px] hover:bg-primary-hover" />
          </div>
        )}
        {!isAuto && (
          <div className="absolute top-[50%] right-[80%]">
            <CarouselPrevious className="bg-secondary border-none w-[38px] h-[38px] hover:bg-primary-hover" />
          </div>
        )}
      </Carousel>
  );
};

export default CarouselComponent;
