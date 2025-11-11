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
      </div>
      <div className="bg-[#c7e560] pt-14 mb-12 py-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          //   navigation
          //   pagination={{
          //     clickable: true,
          //   }}
          loop={true}
          className="w-full px-4 md:px-8 lg:px-12"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {teachCards.map((card, index) => (
            <SwiperSlide key={index} className="px-2">
              <div
                className={`${card.bgColor} relative rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-2 p-4`}
              >
                {/* Left: Text */}
                <div className="flex-1 text-left md:text-left space-y-3 z-10 px-2">
                  <h3 className="text-white font-grobold text-2xl sm:text-3xl md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                    {card.text}
                  </p>
                </div>

                <div className="relative shrink-0 px-2">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-64 rounded-full items-center justify-center overflow-hidden left-0">
                    {/* <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    /> */}
                  </div>

                  {/* Number Badge */}
                  {/* <div className="absolute bottom-0 right-0 bg-white text-[#ff6d3a] font-grobold text-2xl sm:text-3xl md:text-4xl w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWeTeach;
