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
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import { useState, useEffect, useCallback } from "react"

import type { EmblaCarouselType } from "embla-carousel"

import JiuZhaiGou1 from "../assets/images/grad-china/JiuZhaiGou_1.jpg"
import JiuZhaiGou2 from "../assets/images/grad-china/JiuZhaiGou_2.jpg"
import JiuZhaiGou3 from "../assets/images/grad-china/JiuZhaiGou_3.jpg"
import JiuZhaiGou4 from "../assets/images/grad-china/JiuZhaiGou_4.jpg"
import JiuZhaiGou5 from "../assets/images/grad-china/JiuZhaiGou_5.jpg"
import JiuZhaiGou6 from "../assets/images/grad-china/JiuZhaiGou_6.jpg"
import JiuZhaiGou7 from "../assets/images/grad-china/JiuZhaiGou_7.jpg"
import JiuZhaiGou8 from "../assets/images/grad-china/JiuZhaiGou_8.jpg"
import JiuZhaiGou9 from "../assets/images/grad-china/JiuZhaiGou_9.jpg"
import JiuZhaiGou10 from "../assets/images/grad-china/JiuZhaiGou_10.jpg"

import Dufu1 from "../assets/images/grad-china/Dufu_1.jpg"
import Dufu2 from "../assets/images/grad-china/Dufu_2.jpg"
import Dufu3 from "../assets/images/grad-china/Dufu_3.jpg"
import Dufu4 from "../assets/images/grad-china/Dufu_4.jpg"

import Jinli1 from "../assets/images/grad-china/Jinli_1.jpg"
import Jinli2 from "../assets/images/grad-china/Jinli_2.jpg"
import Jinli3 from "../assets/images/grad-china/Jinli_3.jpg"
import Jinli4 from "../assets/images/grad-china/Jinli_4.jpg"
import Jinli5 from "../assets/images/grad-china/Jinli_5.jpg"

import Panda1 from "../assets/images/grad-china/Panda_1.jpg"
import Panda2 from "../assets/images/grad-china/Panda_2.jpg"
import Panda3 from "../assets/images/grad-china/Panda_3.jpg"
import Panda4 from "../assets/images/grad-china/Panda_4.jpg"
import Panda5 from "../assets/images/grad-china/Panda_5.jpg"

import SanXingDui1 from "../assets/images/grad-china/SanXingDui_1.jpg"
import SanXingDui2 from "../assets/images/grad-china/SanXingDui_2.jpg"
import SanXingDui3 from "../assets/images/grad-china/SanXingDui_3.jpg"
import SanXingDui4 from "../assets/images/grad-china/SanXingDui_4.jpg"

import PictureCarousel from "@/components/PictureCarousel"

type GradChinaCard = {
    title ?: string;
    images ?: string[];
    description ?: string;
};

export default function GradChinaPage() {
    const [api, setApi] = useState<CarouselApi>()
    const [count, setCount] = useState(0)

    const timelineContent : GradChinaCard[] = [
        {
            title: "JiuZhaiGou",
            images: [JiuZhaiGou1, JiuZhaiGou2, JiuZhaiGou3, JiuZhaiGou4, JiuZhaiGou5, JiuZhaiGou6, JiuZhaiGou7, JiuZhaiGou8, JiuZhaiGou9, JiuZhaiGou10],
            description: "The first part of the trip and it did not disappoint. The scenery was amazing, though some parts lacked water due to the season."
        },
        {
            title: "Dufu Thatched Cottage",
            images: [Dufu1, Dufu2, Dufu3, Dufu4],
            description: "A famous poet back in 700AD, he was Li bai's good friend and also inspired many after him. 'Who is li Bai' will continue to haunt me."
        },
        {
            title: "Jinli Ancient Street",
            images: [Jinli1, Jinli2, Jinli3, Jinli4, Jinli5],
            description: "An ancient street filled with vibes. This place with all its lights was quite nice at night.",
        },
        {
            title: "Panda Base",
            images: [Panda1, Panda2, Panda3, Panda4, Panda5],
            description: "The mandatory panda visit. There were pandas, red pandas, monkeys and even peacocks for some reason. But the red pandas were the cutest."
        },
        {
            title: "SanXingDui",
            images: [SanXingDui1, SanXingDui2, SanXingDui3, SanXingDui4],
            description: "An archaeological area, this was where many ancient relics were found and displayed. The relics looked like something out of a sci-fi movie."
        }
    ]

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
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
        <div className="mx-auto flex flex-col items-center mb-4 px-4 max-w-7xl overflow-auto">
            <div className="font-bold text-xl underline my-3">Grad Trip China</div>
            <div className="mb-2">
                Swipe left and right to see where we went!
            </div>
            <section className="w-full">
            <Carousel className="w-full overflow-hidden mx-auto" setApi={setApi} opts={{
                align: "center", // this ensures first and last center
                loop: true,      // can enable loop if desired
                watchDrag: watchOuterDrag,
            }}>
                <CarouselContent className="items-stretch">
                    {timelineContent.map((content, index) => (
                        <CarouselItem key={index} className="flex sm:basis-3/4 md:basis-1/2 lg:basis-1/3">
                            <Card className="gap-0 relative flex flex-col w-full">
                                <CardHeader data-nested-carousel>
                                    <div className="mb-2 text-xl font-bold underline">{content.title}</div>
                                    <PictureCarousel images={content.images}></PictureCarousel>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center p-6 flex-1">
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
                <CarouselPrevious className="absolute left-1 top-[86%] top-1/15 sm:top-1/2 -translate-y-1/2 z-10 picCarouselBtn flex"/>
                <CarouselNext className="absolute right-1 top-[86%] top-1/15 sm:top-1/2 -translate-y-1/2 z-10 picCarouselBtn flex"/>
            </Carousel>
            </section>
        </div>
    )
}