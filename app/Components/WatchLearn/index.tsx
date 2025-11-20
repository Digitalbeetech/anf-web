"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WatchLearn = () => {
  const [playingIndex, setPlayingIndex] = useState<any>(null);

  const watchLearn = [
    {
      image: "/assets/video-img.jpg",
      text: "Mini‑episodes and trailers",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
    {
      image: "/assets/video-img.jpg",
      text: "Behind‑the‑scenes peeks at books & games",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
    {
      image: "/assets/video-img.jpg",
      text: "Discussion prompts with each video",
      videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
    },
  ];

  return (
    <div className="flex flex-col px-4 py-8 relative h-full">
      <h1 className="text-center text-6xl font-black leading-tight font-grobold">
        <span className="inline-block mx-3">
          <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
            Watch
          </span>
        </span>
        <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
          Learn
        </span>
      </h1>
      <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
        Short, safe videos that inspire questions, reflection, and family chats.
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4 relative">
        <div className="md:flex hidden absolute -right-28 -top-38">
          <img src="assets/cloud-2.png" />
        </div>
        <div className="md:flex hidden absolute -left-44 bottom-0">
          <img src="assets/cloud-2.png" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {watchLearn.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col transition-transform p-4 sm:p-5"
            >
              <div className="flex flex-col grow">
                {playingIndex === index ? (
                  item.videoUrl.includes("youtube") ? (
                    <iframe
                      className="w-full aspect-video rounded-2xl"
                      src={`${item.videoUrl}?autoplay=1`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="w-full aspect-video object-cover rounded-2xl"
                      src={item.videoUrl}
                      controls
                      autoPlay
                    />
                  )
                ) : (
                  <div
                    className="relative w-full aspect-video cursor-pointer rounded-2xl overflow-hidden"
                    // onClick={() => setPlayingIndex(index)}
                  >
                    <Image
                      src={item.image}
                      alt={item.text || "Video thumbnail"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-14 h-14 text-white drop-shadow-lg" />
                    </div>
                  </div>
                )}

                {/* ---------- TEXT ---------- */}
                <p className="w-full font-comic text-xl font-semibold text-start mt-4">
                  {item.text}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 font-comic font-semibold mt-3">
                  <button className="border px-3 text-sm rounded-3xl">
                    Sidq
                  </button>
                  <button className="border px-3 text-sm rounded-3xl">
                    Rahmah
                  </button>
                  <button className="border px-3 text-sm rounded-3xl">
                    Free
                  </button>
                </div>
              </div>

              {/* ---------- BUTTON - Always at Bottom ---------- */}
              <button className="bg-[#ff625a] rounded-full w-full py-3 font-grobold text-white mt-4">
                Watch now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Link href={"/videos"} className="flex justify-center">
        <button className="bg-[#8ed7b2] text-white px-6 py-2.5 rounded-full transition font-comic cursor-pointer">
          Browse Videos
        </button>
      </Link>
    </div>
  );
};

export default WatchLearn;
