import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type PictureCarouselProps = {
    images: string[];
    forBlog?: boolean;
};

function PictureCarousel({images, forBlog=false} : PictureCarouselProps) {
    const itemClass = forBlog ? "md:basis-1/2 lg:basis-1/3 pt-5" : "";
    return (
        <Carousel className="relative">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem className={itemClass}>
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover rounded shadow" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
        </Carousel>
    );
}
export default PictureCarousel