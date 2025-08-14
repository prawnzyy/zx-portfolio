import BlogSection from "@/components/BlogSection";
import PictureCarousel from "@/components/PictureCarousel";

import Shibuya1 from "@/assets/images/japan-2/shibuya-1.jpg";
import Shibuya2 from "@/assets/images/japan-2/shibuya-2.jpg";
import Shibuya3 from "@/assets/images/japan-2/shibuya-3.jpg";

import Imperial1 from "@/assets/images/japan-2/imperial-1.jpg";
import Imperial2 from "@/assets/images/japan-2/imperial-2.jpg";
import Imperial3 from "@/assets/images/japan-2/imperial-3.jpg";

import Enoshima1 from "@/assets/images/japan-2/enoshima-1.jpg";
import Enoshima2 from "@/assets/images/japan-2/enoshima-2.jpg";
import Enoshima3 from "@/assets/images/japan-2/enoshima-3.jpg";
import Enoshima4 from "@/assets/images/japan-2/enoshima-4.jpg";
import Enoshima5 from "@/assets/images/japan-2/enoshima-5.jpg";

import Irumashi1 from "@/assets/images/japan-2/irumashi-1.jpg";
import Irumashi2 from "@/assets/images/japan-2/irumashi-2.jpg";
import Irumashi3 from "@/assets/images/japan-2/irumashi-3.jpg";

import Koburi1 from "@/assets/images/japan-2/koburi-1.jpg";
import Koburi2 from "@/assets/images/japan-2/koburi-2.jpg";
import Koburi3 from "@/assets/images/japan-2/koburi-3.jpg";
import Koburi4 from "@/assets/images/japan-2/koburi-4.jpg";

export default function Japan2() {
    return(
        <>
        <div className="container mx-auto">
            <div className="flex flex-col justify-center">
                <div className="text-3xl bold font-semibold py-4">A quick stopover</div>
                <div>20th - 27th Aug</div>
            </div>
            <div className="flex flex-col md:px-12 py-4 px-4">
                <BlogSection title="Day 1: Arriving in Japan">
                    This was the first day we arrived in Japan en route to Canada. We decided to spend about a week here before starting on our SEP for real. 
                    The most notable part of day 1 was visiting Shibuya Sky and taking in the sights.
                    <PictureCarousel forBlog={true} images={[Shibuya1, Shibuya2, Shibuya3]} />
                </BlogSection>
                <BlogSection title="Day 2: Imperial Garden and chilling">
                    We started off the day heading to the Imperial Palace East Gradens for a nice morning walk and exploring the area. In the afternoon, we did some light
                    shopping in the Ginza area and also stopped by Akihabara for dinner and some more shopping.
                    <PictureCarousel forBlog={true} images={[Imperial1, Imperial2, Imperial3]} />
                </BlogSection>
                <BlogSection title="Day 3: Kamakura and Enoshima">
                    For this day, we headed to the town of Kamakura to see the giant buddha statue and also explore this quiant little town. After that we headed straight to
                    the island of Enoshima to enjoy the seaside views and explore the caves. We ended the day in Yokohama for some more light shopping.
                    <PictureCarousel forBlog={true} images={[Enoshima1, Enoshima2, Enoshima3, Enoshima4, Enoshima5]} />
                </BlogSection>
                <BlogSection title="Day 4: Actually chilling">
                    Nothing much took place on this day. Each of us had their own plans and did our own form of exploration. As for me, I just took it chill and walked around.
                </BlogSection>
                <BlogSection title="Day 5: Headed to Irumashi">
                    As we prepared to do a hike in the Saitama area, we decided to move out of Central Tokyo towards Irumashi. It defintely looked very different from the urban landscape that was Central Tokyo,
                    but was still nice nonetheless.
                    <PictureCarousel forBlog={true} images={[Irumashi1, Irumashi2, Irumashi3]} />
                </BlogSection>
                <BlogSection title="Day 6: Koburi Pass">
                    The hike we planned to do was the Koburi Pass. Waking up bright and early, we made our way over to the start point and started our hike up. The path that we chose at the start was certainly interesting, leading us to go along some very steep cliffs and dense vegetation.
                    However, it seemed to be the right path as after an hour of walking, we broke out and found ourselves at a Soba shop where we had lunch. At some point, we realised we could not make it to our designated end point, so we tried to quickly make our way back down. The path we chose
                    was an interesting one. Reminded me of just bashing through the forest while being led by some red markers on the trees.
                    <PictureCarousel forBlog={true} images={[Koburi1, Koburi2, Koburi3, Koburi4]} />
                </BlogSection>
                <BlogSection title="Day 7 & 8: Winding down and heading to Canada">
                    Nothing too much happened on the last 2 days. We took things easy after the tiring hike from the day before and just did some minor exploration and last minute shopping before having to head to the airport and onwards to Canada.
                </BlogSection>
            </div>
        </div>
        </>
    )
}