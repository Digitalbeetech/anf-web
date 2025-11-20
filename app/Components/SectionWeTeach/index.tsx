"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SectionWeTeach = () => {
  const teachCards = [
    {
      image: "/assets/teach-1.svg",
    },
    {
      image: "/assets/teach-2.svg",
    },
    {
      image: "/assets/teach-3.svg",
    },
    {
      image: "/assets/teach-4.svg",
    },
    {
      image: "/assets/teach-5.svg",
    },
    {
      image: "/assets/teach-6.svg",
    },
    {
      image: "/assets/teach-7.svg",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-center text-6xl font-black leading-tight font-grobold">
          <span className="inline-block mx-3">
            <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
              What We
            </span>
          </span>
          <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
            Teach
          </span>
        </h1>
      </div>
      <div className="pt-14 mb-12 py-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          // pagination={{
          //   clickable: true,
          //   el: ".custom-pagination", // We'll target this
          // }}
          loop={true}
          className="w-full pb-20"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
        >
          {teachCards.map((card, index) => (
            <SwiperSlide key={index} className="">
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-48 sm:h-48 md:w-96 md:h-96">
                  <Image
                    src={card.image}
                    alt={`Teach ${index + 1}`}
                    width={500}
                    height={400}
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="custom-pagination mx-auto! w-fit! mt-8" /> */}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWeTeach;
