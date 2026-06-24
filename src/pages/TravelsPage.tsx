import { useState } from "react";
import { Link } from 'react-router';

import CustomSection from "../components/CustomSection";
import TravelPic from "../assets/images/home_travel.jpg";
import TravelPic2 from "../assets/images/dec-2024-1.jpg";
import TravelPic3 from "../assets/images/dec-2024-2.jpg";
import TravelPic4 from "@/assets/images/dec-2024-3.jpg"

import Aug20241 from "../assets/images/aug-2024-1.jpg";
import Aug20242 from "../assets/images/aug-2024-2.jpg";
import Aug20243 from "../assets/images/aug-2024-3.jpg";

import Sep1 from "../assets/images/sep-1.jpg";
import Sep2 from "../assets/images/sep-2.jpg";
import Sep3 from "../assets/images/sep-3.jpg";
import Sep4 from "../assets/images/sep-4.jpg";

import GradJap1 from "../assets/images/grad-japan/Map_Tokyo.jpg";
import GradJap2 from "../assets/images/grad-japan/Map_Gujo.jpg";
import GradJap3 from "../assets/images/grad-japan/Map_Kyoto.jpg";
import GradJap4 from "../assets/images/grad-japan/Map_Hiroshima.jpg";
import GradJap5 from "../assets/images/grad-japan/Map_Ehime.jpg";

import GradChina1 from "../assets/images/grad-china/jun-2026_1.jpg";
import GradChina2 from "../assets/images/grad-china/jun-2026_2.jpg";
import GradChina3 from "../assets/images/grad-china/jun-2026_3.jpg";
import GradChina4 from "../assets/images/grad-china/jun-2026_4.jpg";
import GradChina5 from "../assets/images/grad-china/jun-2026_5.jpg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PictureCarousel from "@/components/PictureCarousel";

import "flag-icons/css/flag-icons.min.css";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function TravelsPage() {
    const [tab, setTab] = useState("may-2026");
    const tabMapping : Record<string, React.ReactNode> = {
        "jun-2026" : (<><span className="fi fi-cn"></span> Grad China 2026</>),
        "may-2026" : (<><span className="fi fi-jp"></span> Grad Japan 2026</>),
        "dec-2024" : (<><span className="fi fi-jp"></span> Dec 2024</>),
        "sep-2024" : (<><span className="fi fi-ca"></span> Sep 2024</>),
        "aug-2024" : (<><span className="fi fi-jp"></span> Aug 2024</>)
    }

    return (
        <div className="flex flex-col w-full">
            <CustomSection>
                <div className='w-full md:w-1/2 order-1 md:order-2'>
                        <img src={TravelPic} alt="Lake Ashi" className="max-h-[350px] justify-self-center"/>
                    </div>
                    <div className="w-full md:w-1/2 order-2 md:order-1 m-auto">
                        <div className="font-bold underline text-xl pb-2">Travels</div>
                        This section contains a summary of each of the trips that I have chosen to showcase. 
                        While some will be displayed in the form of a blog, some may be different due to the difference in length of the trip. 
                        Find out more about each trip below.
                        <br></br>
                    </div>
            </CustomSection>
            <CustomSection>
                <div className='w-full'>
                    <div className="md:hidden block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                            {tabMapping[tab]}
                            <ChevronDown size={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {Object.entries(tabMapping).map(([key, value]) => (
                                <DropdownMenuItem onClick={() => setTab(key)}>
                                    {value}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                    <Tabs defaultValue="may-2026" value={tab} onValueChange={setTab}>
                        <TabsList className="md:flex hidden travelTabBg gap-2 flex-wrap h-auto">
                            {Object.entries(tabMapping).map(([key, value]) => (
                                <TabsTrigger value={key} className="w-fit flex-none travelTabBtn">
                                    {value}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value="jun-2026" className={tab === "jun-2026" ? "" : "hidden"} forceMount>
                            <div className='mx-auto flex flex-col sm:flex-row gap-4 py-4'>
                                <div className='w-full sm:w-1/2'>
                                    <PictureCarousel images={[GradChina1, GradChina2, GradChina3, GradChina4, GradChina5]} forBlog={false}>
                                    </PictureCarousel>
                                </div>
                                <div className="w-full sm:w-1/2 m-auto">
                                    After coming back from Japan, I prepared for another short trip but this time, to a country that I have never set foot in before, China
                                    <br></br>
                                    <Link to="./jun-2026" className="btn btn-hover-blue mt-2">Find out more</Link>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="may-2026" className={tab === "may-2026" ? "" : "hidden"} forceMount>
                            <div className='mx-auto flex flex-col sm:flex-row gap-4 py-4'>
                                <div className='w-full sm:w-1/2'>
                                    <PictureCarousel images={[GradJap1, GradJap2, GradJap3, GradJap4, GradJap5]} forBlog={false}>
                                    </PictureCarousel>
                                </div>
                                <div className="w-full sm:w-1/2 m-auto">
                                    Right after the exams were over, we headed straight to Japan for a 2 week Grad Trip that would actually span a decent portion of Japan.
                                    <br></br>
                                    <Link to="./may-2026" className="btn btn-hover-blue mt-2">Find out more</Link>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="dec-2024" className={tab === "dec-2024" ? "" : "hidden"} forceMount>
                            <div className='mx-auto flex flex-col sm:flex-row gap-4 py-4'>
                                <div className='w-full sm:w-1/2'>
                                    <PictureCarousel images={[TravelPic4, TravelPic2, TravelPic3]} forBlog={false}>
                                    </PictureCarousel>
                                </div>
                                <div className="w-full sm:w-1/2 m-auto">
                                    While on the way back from Canada, I once again stopped over in Japan and met up with some friends to explore a slightly different part of Japan. We traveled around Tokyo, Hakone and even down to Kyoto and Osaka.
                                    Counting down to the new year was definitely something that we were looking forward to.
                                    <br></br>
                                    <Link to="./dec-2024" className="btn btn-hover-blue mt-2">Find out more</Link>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="sep-2024" className={tab === "sep-2024" ? "" : "hidden"} forceMount>
                            <div className='mx-auto flex flex-col sm:flex-row gap-4 py-4'>
                                <div className='w-full sm:w-1/2'>
                                    <PictureCarousel images={[Sep1, Sep2, Sep3, Sep4]} forBlog={false}>
                                    </PictureCarousel>
                                </div>
                                <div className="w-full sm:w-1/2 m-auto">
                                    Taking part in the Student Exchange Program (SEP) was really an experience. While it was located in Waterloo, Canada for me, I also did travel around the country and even travelled 
                                    out of the country and to USA as well. The highlights of this 4 month journey are showcased in the link below.
                                    <br></br>
                                    <Link to="./sep-2024" className="btn btn-hover-blue mt-2">Find out more</Link>
                                    {/* <button className="btn btn-hover-blue mt-2" disabled>Coming Soon</button> */}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="aug-2024" className={tab === "aug-2024" ? "" : "hidden"} forceMount>
                            <div className='mx-auto flex flex-col sm:flex-row gap-4 py-4'>
                                <div className='w-full sm:w-1/2'>
                                    <PictureCarousel images={[Aug20241, Aug20242, Aug20243]} forBlog={false}>
                                    </PictureCarousel>
                                </div>
                                <div className="w-full sm:w-1/2 m-auto">
                                    Before heading off for SEP, a few of us decided to stop by Japan and do a quick one week trip before finally heading over to Canada to start our exchange program.
                                    <br></br>
                                    <Link to="./aug-2024" className="btn btn-hover-blue mt-2">Find out more</Link>
                                    {/* <button className="btn btn-hover-blue mt-2" disabled>Coming Soon</button> */}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </CustomSection>
        </div>
    );
}

export default TravelsPage