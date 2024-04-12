import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";


interface FormCarouselProps {
  files: File[];
}

const FormCarousel: React.FC<FormCarouselProps> = ({ files }) => {
  return (
    <div>
      <Carousel
        className="relative"
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="">
          {files.map((item, index) => (
            <CarouselItem key={index} className=" pl-[0px] basis-1/5 mx-[5px]">
              <div className="flex gap-x-[10px]">
                {item.type.startsWith("image") ? (
                  <  img
                    src={URL.createObjectURL(item)}
                    alt={`Uploaded file ${index + 1}`}
                    className="object-cover w-[100%] h-[129px]"
                    width={100}
                    height={100}
                  />
                ) : item.type.startsWith("video") ? (
                  <video
                    controls
                    src={URL.createObjectURL(item)}
                    className="object-fit w-[100%] h-[129px]"
                  />
                ) : (
                  <p>Unsupported file type</p>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-[50%] right-[10%]">
          <CarouselNext className="bg-primary border-none w-[38px] h-[38px] hover:bg-primary-hover" />
        </div>
        <div className="absolute top-[50%] left-[10%]">
          <CarouselPrevious className="bg-primary border-none w-[38px] h-[38px] hover:bg-primary-hover" />
        </div>
      </Carousel>
    </div>
  );
};

export default FormCarousel;
