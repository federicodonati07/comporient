"use client";
import React, { useRef } from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Cards = () => {
    const cardsData = [
        { title: "Abrosexual", type: "abrosexual", bg: "/img/cards/abrosexual.png" },
        { title: "Agender", type: "agender", bg: "/img/cards/agender.png" },
        { title: "Androphilic", type: "androphilic", bg: "/img/cards/androphilic.png" },
        { title: "Aroace", type: "aroace", bg: "/img/cards/aroace.png" },
        { title: "Aroflux", type: "aroflux", bg: "/img/cards/aroflux.png" },
        { title: "Aromatic", type: "aromatic", bg: "/img/cards/aromantic.png" },
        { title: "Asexual", type: "asexual", bg: "/img/cards/asexual.png" },
        { title: "Bear", type: "bear", bg: "/img/cards/bear.png" },
        { title: "Bigender", type: "bigender", bg: "/img/cards/bigender.png" },
        { title: "Bisexual", type: "bisexual", bg: "/img/cards/bisexual.png" },
        { title: "Demiromantic", type: "demiromantic", bg: "/img/cards/demiromantic.png" },
        { title: "Demisexual", type: "demisexual", bg: "/img/cards/demisexual.png" },
        { title: "Finsexual", type: "finsexual", bg: "/img/cards/finsexual.png" },
        { title: "Gayman", type: "gayman", bg: "/img/cards/gayman.png" },
        { title: "Genderfluid", type: "genderfluid", bg: "/img/cards/genderfluid.png" },
        { title: "Genderqueer", type: "genderqueer", bg: "/img/cards/genderqueer.png" },
        { title: "Ginephylic", type: "ginephylic", bg: "/img/cards/ginephylic.png" },
        { title: "Greysexual", type: "greysexual", bg: "/img/cards/greysexual.png" },
        { title: "Heterosexual", type: "heterosexual", bg: "/img/cards/heterosexual.png" },
        { title: "Homosexual", type: "homosexual", bg: "/img/cards/homosexual.png" },
        { title: "Intersex", type: "intersex", bg: "/img/cards/intersex.png" },
        { title: "Leather", type: "leather", bg: "/img/cards/leather.png" },
        { title: "Lesbian", type: "lesbian", bg: "/img/cards/lesbian.png" },
        { title: "Lithosexual", type: "lithosexual", bg: "/img/cards/lithosexual.png" },
        { title: "Minsexual", type: "minsexual", bg: "/img/cards/minsexual.png" },
        { title: "Multisexual", type: "multisexual", bg: "/img/cards/multisexual.png" },
        { title: "Neptunic", type: "neptunic", bg: "/img/cards/neptunic.png" },
        { title: "Ninsexual", type: "ninsexual", bg: "/img/cards/ninsexual.png" },
        { title: "Nonbinary", type: "nonbinary", bg: "/img/cards/nonbinary.png" },
        { title: "Olysexual", type: "olysexual", bg: "/img/cards/olysexual.png" },
        { title: "Omnisexual", type: "omnisexual", bg: "/img/cards/omnisexual.png" },
        { title: "Pansexual", type: "pansexual", bg: "/img/cards/pansexual.png" },
        { title: "Polyamorous", type: "polyamorous", bg: "/img/cards/polyamorous.png" },
        { title: "Polysexual", type: "polysexual", bg: "/img/cards/polysexual.png" },
        { title: "Sapphic", type: "sapphic", bg: "/img/cards/sapphic.png" },
        { title: "Saturnic", type: "saturnic", bg: "/img/cards/saturnic.png" },
        { title: "Transexual", type: "transexual", bg: "/img/cards/transexual.png" },
        { title: "Uranic", type: "uranic", bg: "/img/cards/uranic.png" },
        { title: "Vincian", type: "vincian", bg: "/img/cards/vincian.png" }
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollUp = () => {
        scrollRef.current?.scrollBy({
            top: -250, // altezza della card
            behavior: 'smooth'
        });
    };

    const scrollDown = () => {
        scrollRef.current?.scrollBy({
            top: 250, // altezza della card
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className='flex flex-col items-center'>
                <span className='font-poppins font-bold text-2xl mb-4'>All our flags</span>
                <div className="relative flex flex-col items-center">
                    <button onClick={scrollUp} className="text-gray-600 hover:text-gray-800 mb-2">
                        <FaChevronUp size={24} />
                    </button>

                    <div ref={scrollRef} className="h-[510px] overflow-y-scroll scrollbar-hide">
                        {cardsData.map((item, index) => (
                            <Card key={index} className="relative w-[393px] h-[250px] overflow-hidden mb-4 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={item.bg}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Background"
                                    className="z-0"
                                    priority
                                    placeholder="blur"
                                    blurDataURL={item.bg} // Usa un placeholder per migliorare la qualità visiva
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                                    <p className="text-lg font-semibold">{item.title}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <button onClick={scrollDown} className="text-gray-600 hover:text-gray-800 mt-2">
                        <FaChevronDown size={24} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cards;
