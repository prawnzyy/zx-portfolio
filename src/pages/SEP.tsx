import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import { useState, useEffect } from "react"

type SEPCard = {
    date ?: string;
    title ?: string;
    images ?: string[];
    description ?: string;
};

export default function SEP() {
    const [api, setApi] = useState<CarouselApi>()
    const [selected, setSelected] = useState(1)
    const [count, setCount] = useState(0)

    const [isMd, setIsMd] = useState(() => window.innerWidth >= 768)

    const timelineContent : SEPCard[] = [
        {
            date: "14 Sep 2024",
            title: "Niagara Falls",
        },
        {
            date: "22-25 Sep 2024",
            title: "Banff",
        },
        {
            date: "10-17 Oct 2024",
            title: "USA",
        },
        {
            date: "25-30 Nov 2024",
            title: "Montreal & Qucbec",
        },
        {
            date: "16 Dec 2024",
            title: "Tobermory",
        }
    ]

    useEffect(() => {
        function checkWidth() {
            const val = window.innerWidth >= 768 // md breakpoint
            setIsMd(val)
        }

        checkWidth()
        window.addEventListener("resize", checkWidth)
        return () => window.removeEventListener("resize", checkWidth)
    }, [])

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setSelected(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setSelected(api.selectedScrollSnap() + 1)
        })
    }, [api])
    
    return (
        <div className="flex flex-col container justify-self-center items-center mb-4 px-4">
            <div className="font-bold text-xl underline my-3">Student Exchange Program (SEP)</div>
            <div className="my-3 w-xs md:w-xl lg:w-4xl items-center">
                <div className="justify-self-start text-start mb-4 -translate-x-1/2 relative border-2 p-3 rounded-md border-black overflow-hidden" style={{left: `${isMd ? (selected / count) * 100 || 0 : 50}%`}}>
                    <div className="font-bold">{timelineContent[selected - 1].title}</div>
                    <div>{timelineContent[selected - 1].date}</div>
                </div>
                <div className="hidden md:block justify-self-start text-start mb-4 timeline-arrow relative" style={{left: `${selected / count * 100 || 0}%`}}></div>
                <Progress value={selected / count * 100}></Progress>
                <div className="flex flex-row">
                    <span>Sep 2024</span>
                    <span className="ms-auto me-0">Dec 2024</span>
                </div>
            </div>
            <Carousel className="max-w-screen-sm" setApi={setApi} opts={{
                align: "center", // this ensures first and last center
                loop: true,      // can enable loop if desired
            }}>
                <CarouselContent className="sm:w-[500px] w-[300px]">
                    {timelineContent.map((_, index) => (
                        <CarouselItem key={index} className="md:basis-[80%] xl:basis-[60%]">
                            <Card>
                                <CardContent className="flex items-center aspect-square justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
            </Carousel>
        </div>
    )
}