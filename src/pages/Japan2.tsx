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
                    This was our first day in Japan, en route to Canada. We decided to spend about a week here before officially starting our SEP. 
                    The highlight of the day was visiting Shibuya Sky and enjoying the stunning views.
                    <PictureCarousel forBlog={true} images={[Shibuya1, Shibuya2, Shibuya3]} />
                </BlogSection>
                <BlogSection title="Day 2: Imperial Garden and chilling">
                    We began the day with a relaxing morning walk at the Imperial Palace East Gardens, taking time to explore the area. 
                    In the afternoon, we did some light shopping in Ginza before heading to Akihabara for dinner and a bit more shopping.
                    <PictureCarousel forBlog={true} images={[Imperial1, Imperial2, Imperial3]} />
                </BlogSection>
                <BlogSection title="Day 3: Kamakura and Enoshima">
                    We spent the day in the town of Kamakura, visiting the famous Great Buddha statue and exploring the quaint streets. 
                    From there, we headed straight to Enoshima Island to enjoy the seaside views and explore its caves. 
                    We ended the day in Yokohama with some light shopping.
                    <PictureCarousel forBlog={true} images={[Enoshima1, Enoshima2, Enoshima3, Enoshima4, Enoshima5]} />
                </BlogSection>
                <BlogSection title="Day 4: Actually chilling">
                    Nothing much took place on this day. Each of us had their own plans and did our own form of exploration. As for me, I just took it easy and walked around.
                </BlogSection>
                <BlogSection title="Day 5: Headed to Irumashi">
                    As we prepared for a hike in the Saitama area, we moved out of central Tokyo towards Irumashi. 
                    The scenery was definitely a change from the bustling urban landscape of central Tokyo, but it had its own charm.
                    <PictureCarousel forBlog={true} images={[Irumashi1, Irumashi2, Irumashi3]} />
                </BlogSection>
                <BlogSection title="Day 6: Koburi Pass">
                    Our planned hike for the day was the Koburi Pass. Waking up bright and early, we made our way to the trailhead and began our ascent. 
                    The path we chose at the start was certainly interesting, taking us along steep cliffs and through dense vegetation. Fortunately, it seemed we were on the right track, because after about an hour we emerged at a soba shop, where we stopped for lunch. 
                    At some point, we realised we would not make it to our intended end point, so we hurried back down. The route we took was another adventure in itself — it felt like bashing through the forest, guided only by red markers on the trees.
                    <PictureCarousel forBlog={true} images={[Koburi1, Koburi2, Koburi3, Koburi4]} />
                </BlogSection>
                <BlogSection title="Day 7 & 8: Winding down and heading to Canada">
                    Nothing too much happened on the last 2 days. We took things easy after the tiring hike from the day before and did some minor exploration and last minute shopping before heading to the airport and onwards to Canada.
                </BlogSection>
            </div>
        </div>
        </>
    )
}