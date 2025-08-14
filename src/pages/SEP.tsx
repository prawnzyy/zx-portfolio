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

import { useState, useEffect, useCallback } from "react"

import type { EmblaCarouselType } from "embla-carousel"

import Niagara1 from "@/assets/images/sep/niagara-1.jpg"
import Niagara2 from "@/assets/images/sep/niagara-2.jpg"
import Niagara3 from "@/assets/images/sep/niagara-3.jpg"
import Niagara4 from "@/assets/images/sep/niagara-4.jpg"

import Banff1 from "@/assets/images/sep/banff-1.jpg"
import Banff2 from "@/assets/images/sep/banff-2.jpg"
import Banff3 from "@/assets/images/sep/banff-3.jpg"
import Banff4 from "@/assets/images/sep/banff-4.jpg"
import Banff5 from "@/assets/images/sep/banff-5.jpg"
import Banff6 from "@/assets/images/sep/banff-6.jpg"
import Banff7 from "@/assets/images/sep/banff-7.jpg"

import NYC1 from "@/assets/images/sep/nyc-1.jpg"
import NYC2 from "@/assets/images/sep/nyc-2.jpg"
import NYC3 from "@/assets/images/sep/nyc-3.jpg"
import NYC4 from "@/assets/images/sep/nyc-4.jpg"
import NYC5 from "@/assets/images/sep/nyc-5.jpg"

import Quebec1 from "@/assets/images/sep/quebec-1.jpg"
import Quebec2 from "@/assets/images/sep/quebec-2.jpg"
import Quebec3 from "@/assets/images/sep/quebec-3.jpg"
import Quebec4 from "@/assets/images/sep/quebec-4.jpg"
import Quebec5 from "@/assets/images/sep/quebec-5.jpg"
import Quebec6 from "@/assets/images/sep/quebec-6.jpg"
import Quebec7 from "@/assets/images/sep/quebec-7.jpg"

import Tobermory1 from "@/assets/images/sep/tobermory-1.jpg"
import Tobermory2 from "@/assets/images/sep/tobermory-2.jpg"
import Tobermory3 from "@/assets/images/sep/tobermory-3.jpg"
import Tobermory4 from "@/assets/images/sep/tobermory-4.jpg"

import PictureCarousel from "@/components/PictureCarousel"

type SEPCard = {
    date ?: string;
    progress ?: number;
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
            progress: 11.6,
            images: [Niagara1, Niagara2, Niagara3, Niagara4],
            description: "This was my first trip to the Niagara Falls and it did not disappoint. It was truly a sight to behold and have never seen a waterfall of such a scale before."
        },
        {
            date: "22-25 Sep 2024",
            title: "Banff",
            progress: 19.1,
            images: [Banff1, Banff2, Banff3, Banff4, Banff5, Banff6, Banff7],
            description: "This trip to me was by far the best. The views that Banff offered was nothing that I had ever seen and definitely something that I will never forget."
        },
        {
            date: "10-17 Oct 2024",
            title: "USA",
            progress: 35.8,
            images: [NYC1, NYC2, NYC3, NYC4, NYC5],
            description: "The trip to the US was definitely a sudden one, but also a fun one. NYC was definitely worth the hype and Washington is interesting if you enjoy history",
        },
        {
            date: "25-30 Nov 2024",
            title: "Montreal & Qucbec",
            progress: 73.3,
            images: [Quebec1, Quebec2, Quebec3, Quebec4, Quebec5, Quebec6, Quebec7],
            description: "Towards the end of november we headed towards the Quebec Province to visit both Montreal and Quebec. It is a place filled with vintage and old vibes."
        },
        {
            date: "16 Dec 2024",
            title: "Tobermory",
            progress: 88.3,
            images: [Tobermory1, Tobermory2, Tobermory3, Tobermory4],
            description: "The final major trip before the end of SEP. This was a simple one day trip with everyone and while a long drive, was the first time we hiked in snow"
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

    const watchOuterDrag = useCallback(
    (_api: EmblaCarouselType, evt: MouseEvent | TouchEvent) => {
      const el = evt.target as Element | null
      if (!el) return true

      const isInsideInner = el.closest("[data-nested-carousel]") !== null
      return !isInsideInner
    },
    []
  )
    
    return (
        <div className="flex flex-col container justify-self-center items-center mb-4 px-4">
            <div className="font-bold text-xl underline my-3">Student Exchange Program (SEP)</div>
            <div className="my-3 w-xs md:w-xl lg:w-4xl items-center">
                <div className="justify-self-start text-start mb-4 -translate-x-1/2 relative border-2 p-3 rounded-md border-black overflow-hidden" style={{left: `${isMd ? (timelineContent[selected - 1].progress) || 0 : 50}%`}}>
                    <div className="font-bold">{timelineContent[selected - 1].title}</div>
                    <div>{timelineContent[selected - 1].date}</div>
                </div>
                <div className="hidden md:block justify-self-start text-start mb-4 timeline-arrow relative" style={{left: `${(timelineContent[selected - 1].progress) || 0}%`}}></div>
                <Progress value={timelineContent[selected - 1].progress}></Progress>
                <div className="flex flex-row">
                    <span>Sep 2024</span>
                    <span className="ms-auto me-0">Dec 2024</span>
                </div>
            </div>
            <Carousel className="max-w-screen-sm" setApi={setApi} opts={{
                align: "center", // this ensures first and last center
                loop: true,      // can enable loop if desired
                watchDrag: watchOuterDrag,
            }}>
                <CarouselContent className="sm:w-[500px] w-[300px]">
                    {timelineContent.map((content, index) => (
                        <CarouselItem key={index} className="sm:basis-[90%] md:basis-[75%]">
                            <Card className="gap-0 relative">
                                <CardHeader data-nested-carousel>
                                    <div className="mb-2 text-xl font-bold underline">{content.title}</div>
                                    <PictureCarousel images={content.images}></PictureCarousel>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center p-6">
                                    {content.description}
                                </CardContent>
                                <CardFooter className="justify-center flex flex-row">
                                    {/* <CarouselPrevious className="relative mt-6 sm:hidden"/> */}
                                    <span className="text-md">{index + 1} / {count}</span>
                                    {/* <CarouselNext className="relative mt-6 sm:hidden"/> */}
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                <CarouselPrevious className="absolute left-3 top-[86%] sm:top-1/2 -translate-y-1/2 z-10 !bg-black !text-white shadow-md hidden sm:flex"/>
                <CarouselNext className="absolute right-3 top-[86%] sm:top-1/2 -translate-y-1/2 z-10 !text-white !bg-black shadow-md hidden sm:flex"/>
            </Carousel>
        </div>
    )
}