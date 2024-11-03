"use client";
import React, { useRef, useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface CardData {
  title: string;
  type: string;
  colors: string[];
}

const Cards: React.FC = () => {
  const cardsData: CardData[] = [
    { title: "Abrosexual", type: "abrosexual", colors: ["#ab95c5", "#a3e1d4", "#e7eae4"] },
    { title: "Agender", type: "agender", colors: ["#b9f4b6", "#ffffff", "#b9b9b9", "#000000"] },
    { title: "Androphilic", type: "androphilic", colors: ["#1b0040", "#dbaec2", "#fcdff1"] },
    { title: "Aroace", type: "aroace", colors: ["#ea9c7c", "#fff6ba", "#98d9d3"] },
    { title: "Aroflux", type: "aroflux", colors: ["#3a3f3e", "#77dd77", "#ffffff", "#ffb347", "#ff00ff"] },
    { title: "Aromantic", type: "aromatic", colors: ["#3da542", "#a8d47a", "#ffffff", "#a3a3a3", "#000000"] },
    { title: "Asexual", type: "asexual", colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"] },
    { title: "Bear", type: "bear", colors: ["#d8831a", "#ffdd5c", "#ffffff", "#000000"] },
    { title: "Bigender", type: "bigender", colors: ["#c479a2", "#e3abe6", "#ffffff", "#c0c0c0", "#8f82ff"] },
    { title: "Bisexual", type: "bisexual", colors: ["#d60270", "#9b4f96", "#0038a8"] },
    { title: "Demiromantic", type: "demiromantic", colors: ["#000000", "#a3a3a3", "#ffffff", "#3da542"] },
    { title: "Demisexual", type: "demisexual", colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"] },
    { title: "Finsexual", type: "finsexual", colors: ["#ff008e", "#ffee00", "#00ff81", "#00d7ff", "#0200ff"] },
    { title: "Gayman", type: "gayman", colors: ["#6f00ff", "#00d7ff", "#ffee00", "#ff008e"] },
    { title: "Genderfluid", type: "genderfluid", colors: ["#ff75a2", "#ffffff", "#be18d6", "#000000", "#333ebd"] },
    { title: "Genderqueer", type: "genderqueer", colors: ["#b57edc", "#ffffff", "#4a8123"] },
    { title: "Ginephylic", type: "ginephylic", colors: ["#f0a3bc", "#f2f2f2", "#f9cedc"] },
    { title: "Greysexual", type: "greysexual", colors: ["#000000", "#a3a3a3", "#ffffff", "#bfb5d8"] },
    { title: "Heterosexual", type: "heterosexual", colors: ["#000000", "#ffffff"] },
    { title: "Homosexual", type: "homosexual", colors: ["#d60270", "#9b4f96", "#0038a8"] },
    { title: "Intersex", type: "intersex", colors: ["#ffd800", "#7a00ac"] },
    { title: "Leather", type: "leather", colors: ["#000000", "#3333ff", "#ffffff", "#ff0000"] },
    { title: "Lesbian", type: "lesbian", colors: ["#d62900", "#ff9b55", "#ffffff", "#d362a4", "#a50062"] },
    { title: "Lithosexual", type: "lithosexual", colors: ["#d60270", "#9b4f96", "#a5a5a5", "#000000"] },
    { title: "Minsexual", type: "minsexual", colors: ["#cdffac", "#ffaceb"] },
    { title: "Multisexual", type: "multisexual", colors: ["#ff60af", "#abbcf1", "#69e3f5"] },
    { title: "Neptunic", type: "neptunic", colors: ["#5fbcff", "#1f76ff"] },
    { title: "Ninsexual", type: "ninsexual", colors: ["#ffaceb", "#cdffac", "#acebff"] },
    { title: "Nonbinary", type: "nonbinary", colors: ["#fff430", "#ffffff", "#9c59d1", "#000000"] },
    { title: "Olysexual", type: "olysexual", colors: ["#b6e3ff", "#ff7dce", "#8fffb2"] },
    { title: "Omnisexual", type: "omnisexual", colors: ["#ff9b9b", "#fccbcb", "#7c67e0"] },
    { title: "Pansexual", type: "pansexual", colors: ["#ff1e82", "#ffda00", "#1bb3ff"] },
    { title: "Polyamorous", type: "polyamorous", colors: ["#0000ff", "#ffffff", "#ff0000"] },
    { title: "Polysexual", type: "polysexual", colors: ["#f61cb9", "#07d569", "#1c92f6"] },
    { title: "Sapphic", type: "sapphic", colors: ["#d346d3", "#e9adec"] },
    { title: "Saturnic", type: "saturnic", colors: ["#fb63ae", "#d3abf0", "#cee2ff", "#fdfae0", "#f4df9c"] },
    { title: "Transexual", type: "transexual", colors: ["#55cdfc", "#f7a8b8", "#ffffff", "#f7a8b8", "#55cdfc"] },
    { title: "Uranic", type: "uranic", colors: ["#6666ff", "#9999ff", "#ccccff"] },
    { title: "Vincian", type: "vincian", colors: ["#f468c4", "#000099", "#1eb4fd"] }
  ];

    const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  
  // Track the hovered card index
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

        const scrollAmount = 3;
        if (scrollDirection === 'down') {
          scrollRef.current.scrollBy({
            top: scrollAmount,
            behavior: "smooth",
          });
          if (scrollTop + 1 >= scrollHeight - clientHeight) {
            setScrollDirection('up');
          }
        } else {
          scrollRef.current.scrollBy({
            top: -scrollAmount,
            behavior: "smooth",
          });
          if (scrollTop <= 0) {
            setScrollDirection('down');
          }
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollDirection]);

  const scrollUp = () => {
    scrollRef.current?.scrollBy({
      top: -250,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    scrollRef.current?.scrollBy({
      top: 250,
      behavior: "smooth",
    });
  };

  const handleScroll = (e: WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: e.deltaY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref?.addEventListener("wheel", handleScroll);
    
    return () => {
      ref?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <span className="font-poppins font-bold text-2xl mb-4">All our flags</span>
      <div className="relative flex flex-col items-center">
        <button onClick={scrollUp} className="text-gray-600 hover:text-gray-800 mb-2">
          <FaChevronUp size={24} />
        </button>

        <div ref={scrollRef} className="h-[510px] overflow-y-scroll scrollbar-hide">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              className="relative w-[393px] h-[250px] overflow-hidden mb-4 shadow-lg rounded-lg group cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${item.colors.join(", ")})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                <p
                  className={`text-2xl font-semibold transition-all duration-300 ${
                    hoveredIndex === index ? "text-transparent text-4xl" : "text-white"
                  }`}
                  style={{
                    background: `linear-gradient(to right, ${item.colors.join(", ")})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: hoveredIndex === index ? "transparent" : "white",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <button onClick={scrollDown} className="text-gray-600 hover:text-gray-800 mt-2">
          <FaChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Cards;