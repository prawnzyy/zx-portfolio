import PictureCarousel from "@/components/PictureCarousel";

import gyoen from "../assets/images/japan-1/shinjuku-gyoen.jpg"
import maidCafe from "../assets/images/japan-1/maid-cafe.jpg"
import nightBridge from "../assets/images/japan-1/night-bridge.jpg"

import takao1 from "../assets/images/japan-1/takao-1.jpg"
import takao2 from "../assets/images/japan-1/takao-2.jpg"
import takao3 from "../assets/images/japan-1/takao-3.jpg"
import takao4 from "../assets/images/japan-1/takao-4.jpg"
import catCafe from "../assets/images/japan-1/cat-cafe.jpg"

import hakone1 from "../assets/images/japan-1/hakone-1.jpg"
import hakone2 from "../assets/images/japan-1/hakone-2.jpg"
import hakone3 from "../assets/images/japan-1/hakone-3.jpg"
import hakone4 from "../assets/images/japan-1/hakone-4.jpg"
import hakone5 from "../assets/images/japan-1/hakone-5.jpg"
import tofuKatsu from "../assets/images/japan-1/tofu-katsu.jpg"

import ashi1 from "../assets/images/japan-1/ashi-1.jpg"
import ashi2 from "../assets/images/japan-1/ashi-2.jpg"
import ashi3 from "../assets/images/japan-1/ashi-3.jpg"
import ashi4 from "../assets/images/japan-1/ashi-4.jpg"
import SenNoKaze from "../assets/images/japan-1/sen-to-kaze.jpg"

import nara1 from "../assets/images/japan-1/nara-1.jpg"
import nara2 from "../assets/images/japan-1/nara-2.jpg"
import fushimi1 from "../assets/images/japan-1/fushimi-1.jpg"
import fushimi2 from "../assets/images/japan-1/fushimi-2.jpg"
import fushimi3 from "../assets/images/japan-1/fushimi-3.jpg"
import fushimi4 from "../assets/images/japan-1/fushimi-4.jpg"
import curry from "../assets/images/japan-1/curry.jpg"

import hiei1 from "../assets/images/japan-1/hiei-1.jpg"
import hiei2 from "../assets/images/japan-1/hiei-2.jpg"
import hiei3 from "../assets/images/japan-1/hiei-3.jpg"
import hiei4 from "../assets/images/japan-1/hiei-4.jpg"
import ichiran from "../assets/images/japan-1/ichiran.jpg"

import arashiyama1 from "../assets/images/japan-1/arashiyama-1.jpg"
import arashiyama2 from "../assets/images/japan-1/arashiyama-2.jpg"
import yasaka1 from "../assets/images/japan-1/yasaka-1.jpg"
import yasaka2 from "../assets/images/japan-1/yasaka-2.jpg"

import nambaYasaka1 from "../assets/images/japan-1/namba-yasaka-1.jpg"
import nambaYasaka2 from "../assets/images/japan-1/namba-yasaka-2.jpg"
import dotonbori1 from "../assets/images/japan-1/dotonbori-1.jpg"
import dotonbori2 from "../assets/images/japan-1/dotonbori-2.jpg"


import BlogSection from "@/components/BlogSection";

function Japan1 () {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center">
                    <div className="text-3xl bold font-semibold py-4">Back in Japan</div>
                    <div>24th Dec - 2nd Jan</div>
                </div>
                <div className="flex flex-col md:px-12 py-4 px-4">
                    <BlogSection title="Day 1: Back to Japan">
                        After a long few months in Canada, it was time to head back home but first off,
                        a casual stop over in Japan to meet up with some good friends. By the time the plane landed, it was already 8pm. So nothing
                        much happened, just fell asleep.
                    </BlogSection>
                    <BlogSection title="Day 2: Exploring Shinjuku and Akihabara">
                        First off, Shinjuku. We briefly explored the area around Shinjuku station before heading towards Shinjuku Gyoen National Garden. Despite it being winter, most of the trees still had leaves and were not bare.
                        There was even a greenhouse to house many different types of plants, with a similar vibe to our very own Gardens by the Bay. 
                        <br></br>
                        After exploring the area, we moved over to Akihabara to enjoy some "culture". We ate at a maid cafe. The food was alright, but it was definitely an experience. 
                        <br></br>
                        Nothing much happened in the afternoon, we just walked around Akiba looking at the various anime figurines and toys before getting some okonomiyaki at a nearby restaurant.
                        In the evening, we took a nice stroll along the river to digest before calling it a night.
                        <PictureCarousel images={[gyoen, maidCafe, nightBridge]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 3: Mt Takao and Cats">
                        We woke up bright and early today to head out towards Mt Takao. It is said to be one of the easier mountains to hike up so we felt up to the challenge. The entire journey up and down took us about 4 -5 hours and the view was spectacular
                        There was even a shrine near the top where we managed to get some souvenirs for friends and family. 
                        <br></br>
                        After the hike, we made our way back to the heart of tokyo and dropped by a Cat cafe.
                        <PictureCarousel images={[takao1, takao3, takao2, takao4, catCafe]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 4: Heading to Hakone">
                        The next day, we headed towards our main destination of the day, Hakone. This journey would be quite longer and require us to change trains and even take a bus all the way into Hakone and Lake Ashi. One thing we did not expect was actually the
                        challenge getting there even with bus as there was quite a jam getting in. However, after about 3 - 4 hours, we made it to our hotel, where we quickly dropped off our stuff before trying to scramble to make use of the remaining daylight to explore Hakone.
                        We took the Hakone ropeway and made our way over to the Owakudani sulfur field. The journey along the ropeway was stunning and we could overlook Lake Ashi briefly and even see Mt Fuji. Owakudani too was stunning, being able to see the sulfur plumes rising and the many
                        terraces that spot the landscape, though the smell was quite overpowering. 
                        <br></br>
                        We made our way back down and got dinner, which was tofu katsu, something we had never even seen before. We then tried the onsen back at our hotel and called it a day.
                        <PictureCarousel images={[hakone1, hakone2, hakone3, hakone4, hakone5, tofuKatsu]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 5: From Lake Ashi to Kyoto">
                        We woke up bright and early to take a leisure stroll around Lake Ashi. The morning breeze was really refreshing and there was not many people around, so it was a nice and quite walk around the lake. After which, we headed off back to train station to prepare to take the shinkansen towards Kyoto.
                        <br></br>
                        Once there, we didnt have a lot of time left, so we just walked around and prepared to grab dinner at a ramen place called Sen-no-kaze. The queue was really long of about 2 hours, so we walked around and ended up addicted to some gachapon machines and trying to get a specific keychain. Not the best idea
                        but it was once again an experience. We eventually got to eat our dinner and I must say, it was really good, like one of the best meals of this trip so far.
                        <PictureCarousel images={[ashi1, ashi2, ashi3, ashi4, SenNoKaze]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 6: Nara Park and Fushimi Inari Shrine">
                        Today, we headed off towards Nara park to take a look at the deer and see whats so popular about it. However, what I did not expect was the sheer number of deers that were roaming the entire area. I was expecting to see like maybe fifty or like a hundred in a specific area. They were everywhere.
                        From the garden area all the way to kasugataisha, they are roaming freely around the entire region. Cars would even wait for them to cross the road before moving. 
                        <br></br>
                        The time has come for us to move on and we headed to Fushimi Inari Shrine after lunch. Not gonna lie, this was quite the struggle to get up actually. It was just stair after stair after stair to get to the top. However, the view from up above was spectacular, giving a full view of the city below.
                        <PictureCarousel images={[nara1, nara2, fushimi1, fushimi2, fushimi3, fushimi4, curry]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 7: Climbing Mount Hiei and getting lost?">
                        We started off the day first off thinking of how to scale Mount Hiei. Our idea at the start was to be able to have a good view of Lake Biwa. So wwe took the eizan tram halfway up the mountain before attempting to hike the rest of the way up. However, as we walked around, what we eventually realised
                        was that we were actually very far from where we wanted to go, so we decided to just walk and hopefully get somewhere. We did eventually get to a group of shrines, but eventually turned around as we needed to grab lunch soon.
                        <br></br>
                        The rest of the day was not as eventful, we grabbed lunch over at ichiran and rested for most of the day as we were quite worn out.
                        <PictureCarousel images={[hiei1, hiei2, hiei3, hiei4, ichiran]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 8: Arashiyama and Countdown">
                        It was new year's eve and we wanted to partake in Hatsumode, basically a countdown to the new year. So we decided to do our actvities in the morning and then rest in the afternoon and evening, before heading out to queue to enter the shrine. So first off, we headed to 
                        Arashiyama Bamboo forest. It was very, very crowded and it was honestly very hard to move around with such a crowd. 
                        <br></br>
                        After that, we headed back to our hotel to rest up and prepare to head to the shrine that was open and near to us, Yasaka shrine. Even at 11pm, the queue
                        was out of this world and there were thousands waiting to enter. The vibes were amazing, hearing everyone countdwn, followed by a fireworks display. However, we still needed to wait for another 2 hours before we could enter the shrine. By the time we were done, it was almost 3am.   
                        <PictureCarousel images={[arashiyama1, arashiyama2, yasaka1, yasaka2]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 9: Heading to Osaka">
                        After a long day last night, we decided to only move off during hotel checkout time and headed towards Osaka. When we got there, we visited another shrine, Yasaka shrine to once again get some blessings, before heading to dotonbori to take in the sights and explore the area. However, we
                        once again decided to retire early as not only were we still slightly sleep deprived, but had a very early morning the next day to head to Kansai airport
                        <PictureCarousel images={[nambaYasaka1, nambaYasaka2, dotonbori1, dotonbori2]} forBlog={true}/>
                    </BlogSection>
                    <BlogSection title="Day 10: Back to Singapore">
                        Nothing much happened, we just headed back to Singapore, but did a short transfer at Shanghai where funny enough, we ate Sukiya for lunch
                    </BlogSection>
                </div>
            </div>
        </>   
    );
}
export default Japan1