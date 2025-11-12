"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const WatchLearn = () => {
  const [playingIndex, setPlayingIndex] = useState<any>(null);

  const watchLearn = [
    {
      image: "/assets/video-img.jpg",
      text: "Mini‑episodes and trailers",
      bgColor: "bg-[#8dc0ff]",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
    {
      image: "/assets/video-img.jpg",
      text: "Behind‑the‑scenes peeks at books & games",
      bgColor: "bg-[#f9be49]",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
    {
      image: "/assets/video-img.jpg",
      text: "Discussion prompts with each video",
      bgColor: "bg-[#8ed7b2]",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
  ];

  return (
    <div className="bg-[#ff6d3a] flex flex-col px-4 py-8 relative h-full">
      <h1 className="text-5xl sm:text-5xl md:text-6xl inline-block text-center">
        <span
          className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight"
          style={{
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
        >
          Watch &
        </span>{" "}
        <span
          className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight"
          style={{
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
        >
          Learn
        </span>
      </h1>
      <p className="mt-3 text-sm sm:text-2xl text-center font-comic text-white">
        Short, safe videos that inspire questions, reflection, and family chats.
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {watchLearn.map((item, index) => (
            <div
              key={index}
              className={`
        ${item.bgColor} rounded-3xl rounded-bl-[40px] shadow-lg overflow-hidden flex flex-col transition-transform 
      `}
            >
              {/* ---------- VIDEO / IMAGE ---------- */}
              {playingIndex === index ? (
                /* ---- YouTube ---- */
                item.videoUrl.includes("youtube") ? (
                  <iframe
                    className="w-full aspect-video"
                    src={`${item.videoUrl}?autoplay=1`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  /* ---- Local video ---- */
                  <video
                    className="w-full aspect-video object-cover"
                    src={item.videoUrl}
                    controls
                    autoPlay
                  />
                )
              ) : (
                /* ---- Thumbnail + Play button ---- */
                <div
                  className="relative w-full aspect-video cursor-pointer"
                  onClick={() => setPlayingIndex(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.text || "Video thumbnail"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-14 h-14 text-white drop-shadow-lg" />
                  </div>
                </div>
              )}

              {/* ---------- TEXT ---------- */}
              <p className="text-white w-full font-comic text-xl font-semibold text-start p-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#8ed7b2] text-white px-6 py-2.5 rounded-full transition font-comic">
          Browse Videos
        </button>
      </div>
    </div>
  );
};

export default WatchLearn;
