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
          pagination={{
            clickable: true,
            el: ".custom-pagination", // We'll target this
          }}
          loop={true}
          className="w-full px-4 md:px-8 lg:px-12 pb-20"
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
                className={`${card.bgColor} rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Left: Text */}
                <div className="flex-1 text-left space-y-4 order-2 md:order-1">
                  <h3 className="text-white font-grobold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                    {card.text}
                  </p>
                </div>

                {/* Right: Image Container */}
                <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[180px] lg:max-w-[200px] aspect-square order-1 md:order-2">
                  {/* Circular Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden p-3">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="(max-width: 768px) 180px, 200px"
                    />
                  </div>

                  {/* Number Badge - Bottom Right */}
                  <div className="absolute -bottom-3 -right-3 bg-white text-[#ff6d3a] font-grobold text-xl sm:text-2xl md:text-2xl lg:text-3xl w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    {index + 1}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mx-auto! w-fit! mt-8" />
        </Swiper>
      </div>
    </>
  );
};

export default SectionWeTeach;
