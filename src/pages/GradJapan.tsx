import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PictureCarousel from "@/components/PictureCarousel";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";

import JapanMap from "../assets/images/grad-japan/jp_1.svg?react";
import MapTokyo from "../assets/images/grad-japan/Map_Tokyo.jpg";
import MapGujo from "../assets/images/grad-japan/Map_Gujo.jpg";
import MapKyoto from "../assets/images/grad-japan/Map_Kyoto.jpg";
import MapHiroshima from "../assets/images/grad-japan/Map_Hiroshima.jpg";
import MapEhime from "../assets/images/grad-japan/Map_Ehime.jpg";

import Takao1 from "../assets/images/grad-japan/Takao_1.jpg";
import Takao2 from "../assets/images/grad-japan/Takao_2.jpg";
import Takao3 from "../assets/images/grad-japan/Takao_3.jpg";

import Enoshima1 from "../assets/images/grad-japan/Enoshima_1.jpg";
import Enoshima2 from "../assets/images/grad-japan/Enoshima_2.jpg";
import Enoshima3 from "../assets/images/grad-japan/Enoshima_3.jpg";
import Enoshima4 from "../assets/images/grad-japan/Enoshima_4.jpg";
import Enoshima5 from "../assets/images/grad-japan/Enoshima_5.jpg";
import Enoshima6 from "../assets/images/grad-japan/Enoshima_6.jpg";

import GujoYamato1 from "../assets/images/grad-japan/GujoYamato_1.jpg"
import GujoYamato2 from "../assets/images/grad-japan/GujoYamato_2.jpg"
import GujoYamato3 from "../assets/images/grad-japan/GujoYamato_3.jpg"
import GujoYamato4 from "../assets/images/grad-japan/GujoYamato_4.jpg"
import GujoYamato5 from "../assets/images/grad-japan/GujoYamato_5.jpg"
import GujoYamato6 from "../assets/images/grad-japan/GujoYamato_6.jpg"
import GujoYamato7 from "../assets/images/grad-japan/GujoYamato_7.jpg"

import GujoHachiman1 from "../assets/images/grad-japan/GujoHachiman_1.jpg"
import GujoHachiman2 from "../assets/images/grad-japan/GujoHachiman_2.jpg"
import GujoHachiman3 from "../assets/images/grad-japan/GujoHachiman_3.jpg"
import GujoHachiman4 from "../assets/images/grad-japan/GujoHachiman_4.jpg"
import GujoHachiman5 from "../assets/images/grad-japan/GujoHachiman_5.jpg"
import GujoHachiman6 from "../assets/images/grad-japan/GujoHachiman_6.jpg"
import GujoHachiman7 from "../assets/images/grad-japan/GujoHachiman_7.jpg"

import Toyosato1 from "../assets/images/grad-japan/Toyosato_1.jpg"
import Toyosato2 from "../assets/images/grad-japan/Toyosato_2.jpg"
import Toyosato3 from "../assets/images/grad-japan/Toyosato_3.jpg"
import Toyosato4 from "../assets/images/grad-japan/Toyosato_4.jpg"
import Toyosato5 from "../assets/images/grad-japan/Toyosato_5.jpg"

import Fushimi1 from "../assets/images/grad-japan/Fushimi_1.jpg"
import Fushimi2 from "../assets/images/grad-japan/Fushimi_2.jpg"
import Fushimi3 from "../assets/images/grad-japan/Fushimi_3.jpg"

import Kiyomizu1 from "../assets/images/grad-japan/Kiyomizu_1.jpg"
import Kiyomizu2 from "../assets/images/grad-japan/Kiyomizu_2.jpg"
import Kiyomizu3 from "../assets/images/grad-japan/Kiyomizu_3.jpg"
import Kiyomizu4 from "../assets/images/grad-japan/Kiyomizu_4.jpg"

import Ine1 from "../assets/images/grad-japan/Ine_1.jpg"
import Ine2 from "../assets/images/grad-japan/Ine_2.jpg"
import Ine3 from "../assets/images/grad-japan/Ine_3.jpg"
import Ine4 from "../assets/images/grad-japan/Ine_4.jpg"
import Ine5 from "../assets/images/grad-japan/Ine_5.jpg"

import Amano1 from "../assets/images/grad-japan/Amano_1.jpg"
import Amano2 from "../assets/images/grad-japan/Amano_2.jpg"
import Amano3 from "../assets/images/grad-japan/Amano_3.jpg"
import Amano4 from "../assets/images/grad-japan/Amano_4.jpg"
import Amano5 from "../assets/images/grad-japan/Amano_5.jpg"

import Uji1 from "../assets/images/grad-japan/Uji_1.jpg"
import Uji2 from "../assets/images/grad-japan/Uji_2.jpg"
import Uji3 from "../assets/images/grad-japan/Uji_3.jpg"
import Uji4 from "../assets/images/grad-japan/Uji_4.jpg"
import Uji5 from "../assets/images/grad-japan/Uji_5.jpg"
import Uji6 from "../assets/images/grad-japan/Uji_6.jpg"
import Uji7 from "../assets/images/grad-japan/Uji_7.jpg"
import Uji8 from "../assets/images/grad-japan/Uji_8.jpg"
import Uji9 from "../assets/images/grad-japan/Uji_9.jpg"

import Hiroshima1 from "../assets/images/grad-japan/Hiroshima_1.jpg"
import Hiroshima2 from "../assets/images/grad-japan/Hiroshima_2.jpg"
import Hiroshima3 from "../assets/images/grad-japan/Hiroshima_3.jpg"
import Hiroshima4 from "../assets/images/grad-japan/Hiroshima_4.jpg"
import Hiroshima5 from "../assets/images/grad-japan/Hiroshima_5.jpg"

import Miyajima1 from "../assets/images/grad-japan/Miyajima_1.jpg"
import Miyajima2 from "../assets/images/grad-japan/Miyajima_2.jpg"
import Miyajima3 from "../assets/images/grad-japan/Miyajima_3.jpg"
import Miyajima4 from "../assets/images/grad-japan/Miyajima_4.jpg"
import Miyajima5 from "../assets/images/grad-japan/Miyajima_5.jpg"
import Miyajima6 from "../assets/images/grad-japan/Miyajima_6.jpg"
import Miyajima7 from "../assets/images/grad-japan/Miyajima_7.jpg"
import Miyajima8 from "../assets/images/grad-japan/Miyajima_8.jpg"
import Miyajima9 from "../assets/images/grad-japan/Miyajima_9.jpg"
import Miyajima10 from "../assets/images/grad-japan/Miyajima_10.jpg"
import Miyajima11 from "../assets/images/grad-japan/Miyajima_11.jpg"

import Shimanami1 from "../assets/images/grad-japan/Shimanami_1.jpg"
import Shimanami2 from "../assets/images/grad-japan/Shimanami_2.jpg"
import Shimanami3 from "../assets/images/grad-japan/Shimanami_3.jpg"
import Shimanami4 from "../assets/images/grad-japan/Shimanami_4.jpg"
import Shimanami5 from "../assets/images/grad-japan/Shimanami_5.jpg"
import Shimanami6 from "../assets/images/grad-japan/Shimanami_6.jpg"
import Shimanami7 from "../assets/images/grad-japan/Shimanami_7.jpg"
import Shimanami8 from "../assets/images/grad-japan/Shimanami_8.jpg"
import Shimanami9 from "../assets/images/grad-japan/Shimanami_9.jpg"

import Matsuyama1 from "../assets/images/grad-japan/Matsyama_1.jpg"
import Matsuyama2 from "../assets/images/grad-japan/Matsyama_2.jpg"
import Matsuyama3 from "../assets/images/grad-japan/Matsyama_3.jpg"
import Matsuyama4 from "../assets/images/grad-japan/Matsyama_4.jpg"

interface MapData {
  name: string,
  description: string[],
  time_period: string,
  imageSrc: string,
}

type ContentCard = {
  title ?: string;
  images ?: string[];
  description ?: string;
};

type ContentTab = {
  title ?: string;
  content ?: ContentCard[];
}

function GradJapanPage() {
  const [selected, setSelected] = useState("");
  const [hovered, setHovered] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const jumpTargetRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [loading, setLoading] = useState(true);
  
  const tabs: Record<string, string> = {
    JP13 : "Tokyo",
    JP21 : "Gujo",
    JP26 : "Kyoto",
    JP34 : "Hiroshima",
    JP38 : "Ehime",
  }

  const paths: Record<string, MapData> = {
    JP13 : {name : "Tokyo", time_period: "8-12 May", description: ["Mt Takao", "Enoshima", "Akihabara"], imageSrc: MapTokyo},
    JP21 : {name : "Gujo", time_period: "12-14 May", description: ["Gujo Yamato", "Gujo Hachiman"], imageSrc: MapGujo},
    JP26 : {name : "Kyoto", time_period: "14-18 May", description: ["Toyosato", "Fushimi-Inari", "Kiyomizudera", "Ine to Funaya", "Amanohashidate", "Uji"], imageSrc: MapKyoto},
    JP34 : {name : "Hiroshima & Miyajima", time_period: "18-20 May", description: ["Hiroshima", "Miyajima"], imageSrc: MapHiroshima},
    JP38 : {name : "Omishima & Matsuyama", time_period: "20-22 May", description: ["Shimanamikaido", "Matsuyama"], imageSrc: MapEhime},
  }

  const day_content : Record<string, ContentTab> = {
    JP13 : {
      title : "Oh its Mt Fuji", 
      content : [
        {title : "Mt Takao", images : [Takao1, Takao2, Takao3], description : "Climbing it in summer this time round was slightly more challenging due to the heat but the views were breathtaking nonetheless"},
        {title : "Kamakura & Enoshima", images : [Enoshima1, Enoshima2, Enoshima3, Enoshima4, Enoshima5, Enoshima6], description : "The view from the island was as great as before and the ramune ice cream was nice"},
      ]
    },
    JP21 : {
      title : "Gujo, the castle town of water and a dance", 
      content : [
        {title : "Gujo Yamato", images : [GujoYamato1, GujoYamato2, GujoYamato3, GujoYamato4, GujoYamato5, GujoYamato6, GujoYamato7], description : "We decided to escape the hustle and bustle of the main city and made our way over to Gujo. We stayed at Gujo Yamato as the lodging was hard to find in the main city. Even in the outsides, the countryside views and vibes did not disappoint"},
        {title : "Gujo Hachiman", images : [GujoHachiman1, GujoHachiman2, GujoHachiman3, GujoHachiman4, GujoHachiman5, GujoHachiman6, GujoHachiman7], description : "The main town of Gujo itself was stunning. The river runs right through the main town and the castle at the top gives you an aerial view of not just the entire town, but also of the valley that it sits within"}
      ]
    },
    JP26 : {
      title : "Kyoto or around Kyoto?", 
      content : [
        {title : "Toyosato", images : [Toyosato1, Toyosato2, Toyosato3, Toyosato4, Toyosato5], description : "Located in the middle of nowhere, this former elementary school is the inspiration for the hit show K-On and is now a cultural icon. The dedication of the fans is quite something though"},
        {title : "Fushimi-inari & Kiyomizudera", images : [Fushimi1, Fushimi2, Fushimi3, Kiyomizu1, Kiyomizu2, Kiyomizu3, Kiyomizu4], description : "Both Fushimi Inari and Kiyomizudera had so many people that it was hard to take photos or walk. Maybe winter when there are slightly less people is better"},
        {title : "Ine to Funaya", images : [Ine1, Ine2, Ine3, Ine4, Ine5], description : "Ine to Funaya, a quaint little fishing village 1hr out of Amanohashidate. The views of the sea were quite something"},
        {title : "Amanohashidate", images : [Amano1, Amano2, Amano3, Amano4, Amano5], description : "One of the nihon sankei (Top 3 views of Japan), this sandbar was pretty unique. We did not have much time and could not fully walk the entire length of the sandbar but managed to catch some nice photos"},
        {title : "Uji", images : [Uji1, Uji2, Uji3, Uji4, Uji5, Uji6, Uji7, Uji8, Uji9], description : "A place known for matcha, while the matcha was nice, I found the views to be the greater draw. Though we later found out that the matcha kitkat could be found at Donki"},
      ]
    },
    JP34 : {
      title : "Another Castle and mistakes were made", 
      content : [
        {title : "Hiroshima", images : [Hiroshima1, Hiroshima2, Hiroshima3, Hiroshima4, Hiroshima5], description : "Since we only had one day in hiroshima, we headed for the most prominent feature which were hiroshima castle and then the peace memorial"},
        {title : "Miyajima", images : [Miyajima1, Miyajima2, Miyajima3, Miyajima4, Miyajima5, Miyajima6, Miyajima7, Miyajima8, Miyajima9, Miyajima10, Miyajima11], description : "Another one of the nihon sankei (Top 3 views of Japan), which for some reason I only realised just as we were about to leave. The view from the top of Mt Misen was truly something, though the trailrunning up and down was questionable to say the least."},
      ]
    },
    JP38 : {
      title : "Sowing the mistakes from hiroshima and rain", 
      content : [
        {title : "Shimanamikaido", images : [Shimanami1, Shimanami2, Shimanami3, Shimanami4, Shimanami5, Shimanami6, Shimanami7, Shimanami8, Shimanami9], description : "The finale of our trip was a 70++km cycle from onomichi in Hiroshima all the way down to Imabari in Ehime. This was truly an experience, with day 2 culminating with a nice torrential rain right at the end. However, the views were great and would do it all over again (with battery assisted)."},
        {title : "Matsuyama", images : [Matsuyama1, Matsuyama2, Matsuyama3, Matsuyama4], description : "Nothing much was done here, we just shopped a little till it was time to head to the airport and head back. But the plane 2.5hrs so there was that"}
      ]
    },
  }

  // Add all images to an array to preload
  const allImages = Object.values(day_content)
    .flatMap(tab => tab.content?.flatMap(section => section.images))
    .filter((img): img is string => img !== undefined);

  // Manually add for those in map
  allImages.push(MapEhime, MapGujo, MapHiroshima, MapKyoto, MapTokyo)

  // Handle preloading of images
  useEffect(() => {
    Promise.all(
      allImages.map(
        src =>
          new Promise<void>((resolve) => {
            const img = new Image();

            img.onload = () => resolve();
            img.onerror = () => resolve();

            img.src = src;
          })
      )
    ).then(() => {
      setLoading(false);
    });
  }, []);

  // Handle coloring and travel lines
  useEffect(() => {
    if (loading) return
    const container = containerRef.current;
    const svg = container?.querySelector("svg") as SVGSVGElement;
    if (!container || !svg) return;

    svgRef.current = svg;

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        const g = svg.querySelector("g");
        if (g) {
          d3.select(g).attr("transform", event.transform.toString());
        } else {
          // if no <g> wrapper, apply to all children
          d3.select(svg)
            .selectAll("path")
            .attr("transform", event.transform.toString());
        }
      });

    d3.select(svg).call(zoom);

    d3.select(svg).call(
      zoom.transform,
      d3.zoomIdentity.translate(-1300, -1450).scale(4)
    );
    // const svg = svgRef.current;
    // if (!svg) return;

    // Color the visited paths
    Object.keys(paths).forEach((id) => {
      const path = svg.querySelector(`#${id}`) as SVGPathElement;
      if (path) path.style.fill = "green";
    });

    // Get center point of each path using getBBox
    const centers = Object.keys(paths).map((id) => {
      const path = svg.querySelector(`#${id}`) as SVGPathElement;
      if (!path) return null;
      const bbox = path.getBBox();
      return {
        id,
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };
    }).filter(Boolean) as { id: string; x: number; y: number }[];

    // Remove any existing travel overlay
    d3.select(svg).select("#travel-overlay").remove();
    d3.select(svg).select("#travel-defs").remove();

    // Add arrowhead marker definition
    const defs = d3.select(svg).append("defs").attr("id", "travel-defs");
    defs.append("marker")
      .attr("id", "arrowhead")
      .attr("markerWidth", "6")
      .attr("markerHeight", "4")
      .attr("refX", "6")
      .attr("refY", "2")
      .attr("orient", "auto")
      .append("polygon")
      .attr("points", "0 0, 6 2, 0 4")
      .attr("fill", "red");

    // Append overlay to zoom group so it moves with pan/zoom
    const zoomG = svg.querySelector("g");
    const g = d3.select(zoomG).append("g").attr("id", "travel-overlay").attr("pointer-events", "none");

    // Draw lines between consecutive centers
    for (let i = 0; i < centers.length - 1; i++) {
      const from = centers[i];
      const to = centers[i + 1];

      g.append("line")
        .attr("x1", from.x)
        .attr("y1", from.y)
        .attr("x2", to.x)
        .attr("y2", to.y)
        .attr("stroke", "red")
        .attr("stroke-width", "1")
        .attr("stroke-dasharray", "3 2")
        .attr("marker-end", "url(#arrowhead)");
    }

    // Draw dots at each stop
    centers.forEach((c) => {
      g.append("circle")
        .attr("cx", c.x)
        .attr("cy", c.y)
        .attr("r", 2)
        .attr("fill", "red");
    });
    return () => {
      d3.select(svg).on(".zoom", null);
    };
  }, [loading]);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGPathElement;
    if (target.tagName === "path") {
      setSelected(target.id);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGPathElement;
    if (target.tagName === "path") {
      setHovered(target.id);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGPathElement;
    if (target.tagName === "path") {
      setHovered("");
    }
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // reset all paths first
    svg.querySelectorAll("path").forEach((path) => {
      path.style.opacity = "1";
      path.style.filter = "none";
    });

    if (!hovered) return;

    const path = svg.querySelector(`#${hovered}`) as SVGPathElement;
    if (!path) return;

    if (hovered in paths) {
      path.style.opacity = "0.7";
      path.style.filter = "brightness(1.3)";
    }
  }, [hovered]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // reset all paths first
    svg.querySelectorAll("path").forEach((path) => {
      path.style.stroke = "none";
      path.style.strokeWidth = "none";
    });

    if (!selected) return;

    const path = svg.querySelector(`#${selected}`) as SVGPathElement;
    if (!path) return;

    if (selected in paths) {
      path.style.stroke = "black";
      path.style.strokeWidth = "1px";
      path.style.paintOrder = "fill";
      jumpTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <>
    {loading && 
      <section className="flex flex-col justify-center items-center self-center flex-grow text-xl xl:text-2xl gap-2">
        Loading in progress. It may take awhile.
        <Spinner className="size-6 xl:size-8"></Spinner>
      </section>}
    {!loading && <section className="lg:w-4/5 xl:w-3/4 2xl:w-7/10 max-w-[1400px] mx-auto flex flex-col items-center justify-center">
    <div className="text-3xl font-semibold py-4">Grad Trip Japan 2026</div>
    <div className="flex flex-row gap-2 pb-2 font-semibold md:flex hidden">
      <ArrowBigDown />
      View the map below to see where we went and what we did!
      <ArrowBigDown />
    </div>
    <div className="w-full items-center justify-center md:visible invisible md:h-auto h-0">
      <div ref={containerRef} className="h-[500px] flex justify-center relative">
        {hovered in paths && paths[hovered] && (
            <div className="flex flex-col items-start" style={{
              position: "absolute", top: 10, left: 10,
              background: "color-mix(in srgb, var(--foreground) 80%, transparent)", color: "var(--background)",
              padding: "4px 10px", borderRadius: "6px", pointerEvents: "none"
            }}>
              <div>
              {paths[hovered].name}
              </div>
              <div>
                {paths[hovered].time_period}
              </div>
              <div className="flex flex-row items-start pt-1 gap-2 pb-1">
                <img className="w-50 h-auto" src={paths[hovered].imageSrc}/>
                <ul className="items-start ps-5 list-disc">
                {paths[hovered].description.map((area) => (
                  <li className="self-start text-justify">{area}</li>
                ))}
                </ul>
              </div>
            </div>
          )}
        <JapanMap
          onClick={handleClick}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          className="japangradmap w-full h-auto border rounded-md"
        />
      </div>
    </div>
    <div className="mt-5 self-start w-full scroll-mt-20" ref={jumpTargetRef}>
      <Tabs defaultValue="JP13" value={selected} onValueChange={setSelected}>
        <TabsList className="md:hidden flex flex-wrap self-center h-auto gap-1 travelTabBg">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsTrigger value={key} className="travelTabBtn">
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
        {selected === "" && (
          <div className="flex flex-row gap-2 self-center md:hidden">
            <ArrowBigUp />
            <div>
              Click on one of the tabs to see what we did there!
            </div>
            <ArrowBigUp />
          </div>
        )}
        {Object.keys(day_content).map((key) => (
          <TabsContent value={key} className={selected === key ? "w-full" : "w-full hidden"} forceMount>
            <div className="pb-6 font-bold underline text-xl">
              {day_content[key].title}
            </div>
            <div className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,theme(spacing.96)),1fr))]">
              {day_content[key].content?.map((card_content) => (
                <Card className="grow">
                  <CardHeader>
                      <div className="mb-2 text-xl font-bold underline">{card_content.title}</div>
                      <PictureCarousel images={card_content.images} forBlog={false}/>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-6">
                    {card_content.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
    </section>}
    </>
  );
}

export default GradJapanPage;