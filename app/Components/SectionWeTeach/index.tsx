"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SectionWeTeach = () => {
  const teachCards = [
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/slider-1.png",
      title: "Sabr (Patience)",
      text: "Wait well, try again, and finishstrong.",
      bgColor: "bg-[#9acb4e]",
    },
  ];
  return (
    <>
      <div className="bg-[#c7e560] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold inline-block text-center">
          <span
            className="text-[#f9be49] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            What We
          </span>{" "}
          <span
            className="text-[#9acb4e] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Teach
          </span>
        </h1>
      <div className="max-w-7xl mx-auto px-4">
        {/* Optional heading */}
        {/* <h2 className="text-center text-3xl font-grobold text-gray-800 mb-8">Values We Teach</h2> */}

        {/* GRID – full-screen cards */}
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4 
            gap-6 lg:gap-8 
            h-[calc(100vh-6rem)]   /* full height minus top/bottom padding */
            overflow-y-auto
          "
        >
          {teachCards.map((item, idx) => (
            <div
              key={idx}
              className={`
                ${item.bgColor} 
                relative shadow-xl rounded-3xl 
                flex flex-col items-center 
                transition-transform duration-300 
                hover:scale-105 hover:shadow-2xl 
                overflow-visible
              `}
            >
              {/* Image – white circle, pops out from top */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Title (optional – hide with `hidden` if not needed) */}
              <h3 className="mt-16 text-white font-grobold text-lg sm:text-xl md:text-2xl">
                {item.title}
              </h3>

              {/* Text – white area */}
              <div className="mt-4 w-full bg-white rounded-b-3xl p-5 pt-8 text-center flex-1">
                <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default SectionWeTeach;
