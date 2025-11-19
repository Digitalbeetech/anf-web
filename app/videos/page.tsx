"use client";

import React, { useMemo, useState } from "react";
import Footer from "../Components/Footer";
import StickyHeader from "../Components/StickyHeader/page";
import Image from "next/image";
import { Play } from "lucide-react";

type ValueTag =
  | "Sabr"
  | "Shukr"
  | "Adab"
  | "Amanah"
  | "Rahmah"
  | "Sidq"
  | "Ihsan";
type AgeBand = "5–7" | "8–12";
type LengthBand = "Under 5 min" | "5–10 min" | "Over 10 min";

type Video = {
  id: string;
  slug: string;
  title: string;
  blurb: string;
  values: ValueTag[];
  age: AgeBand[];
  length: LengthBand;
  free?: boolean;
  thumbnailUrl?: string;
};

const VIDEOS: Video[] = [
  {
    id: "v1",
    slug: "meet-abdullah-fatima",
    title: "Meet Abdullah & Fatima",
    blurb:
      "Introduction to the siblings, their world, and the values they live by.",
    values: ["Adab", "Rahmah"],
    age: ["5–7", "8–12"],
    length: "Under 5 min",
    free: true,
  },
  {
    id: "v2",
    slug: "fatimas-first-fast-episode-1",
    title: "Fatima's First Fast – Episode 1",
    blurb:
      "A gentle look at preparing hearts and bodies for the first Ramadan fast.",
    values: ["Sabr", "Shukr"],
    age: ["5–7", "8–12"],
    length: "5–10 min",
    free: false,
  },
  {
    id: "v3",
    slug: "angry-day-reflection",
    title: "Abdullah’s Angry Day – Reflection Time",
    blurb:
      "Talking about big feelings, apologies, and Rahmah after a hard day.",
    values: ["Rahmah", "Adab"],
    age: ["8–12"],
    length: "5–10 min",
    free: false,
  },
];

const VALUE_OPTIONS = [
  "All Values",
  "Sabr",
  "Shukr",
  "Adab",
  "Amanah",
  "Rahmah",
  "Sidq",
  "Ihsan",
] as const;
const AGE_OPTIONS = ["All Ages", "5–7", "8–12"] as const;
const LENGTH_OPTIONS = ["Any length", "Under 5 min", "5–10 min"] as const;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-white/80 px-2 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-grobold text-emerald-700 ring-1 ring-emerald-200">
      {children}
    </span>
  );
}

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
  {
    image: "/assets/video-img.jpg",
    text: "Discussion prompts with each video",
    videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
  },
  {
    image: "/assets/video-img.jpg",
    text: "Discussion prompts with each video",
    videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
  },
  {
    image: "/assets/video-img.jpg",
    text: "Discussion prompts with each video",
    videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
  },
  {
    image: "/assets/video-img.jpg",
    text: "Discussion prompts with each video",
    videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
  },
  {
    image: "/assets/video-img.jpg",
    text: "Discussion prompts with each video",
    videoUrl: "https://www.youtube.com/embed/XHOmBV4js_E",
  },
];

function VideoCard({ video }: any) {
  return (
    <div className="rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col transition-transform p-4 sm:p-5">
      <div className="flex flex-col grow">
        {/* {
        playingIndex === index ? (
          item.videoUrl.includes("youtube") ? (
            <iframe
              className="w-full aspect-video rounded-2xl"
              src={`${video.videoUrl}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full aspect-video object-cover rounded-2xl"
              src={video.videoUrl}
              controls
              autoPlay
            />
          )
        ) : ( */}
        <div
          className="relative w-full aspect-video cursor-pointer rounded-2xl overflow-hidden"
          // onClick={() => setPlayingIndex(index)}
        >
          <Image
            src={video.image}
            alt={video.text || "Video thumbnail"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Play className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
        </div>
        {/* )} */}

        {/* ---------- TEXT ---------- */}
        <p className="w-full font-comic text-xl font-semibold text-start mt-4">
          {video.text}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 font-comic font-semibold mt-3">
          <button className="border px-3 text-sm rounded-3xl">Sidq</button>
          <button className="border px-3 text-sm rounded-3xl">Rahmah</button>
          <button className="border px-3 text-sm rounded-3xl">Free</button>
        </div>
      </div>

      {/* ---------- BUTTON - Always at Bottom ---------- */}
      <button className="bg-[#ff625a] rounded-full w-full py-3 font-grobold text-white mt-4">
        Watch now
      </button>
    </div>
  );
}

export default function VideosPage() {
  const [query, setQuery] = useState("");
  const [value, setValue] =
    useState<(typeof VALUE_OPTIONS)[number]>("All Values");
  const [age, setAge] = useState<(typeof AGE_OPTIONS)[number]>("All Ages");
  const [length, setLength] =
    useState<(typeof LENGTH_OPTIONS)[number]>("Any length");

  const filtered = useMemo(() => {
    return VIDEOS.filter((v) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.blurb.toLowerCase().includes(q);

      const matchesValue =
        value === "All Values" ? true : v.values.includes(value as ValueTag);

      const matchesAge =
        age === "All Ages" ? true : v.age.includes(age as AgeBand);

      const matchesLength =
        length === "Any length" ? true : v.length === (length as LengthBand);

      return matchesQuery && matchesValue && matchesAge && matchesLength;
    });
  }, [query, value, age, length]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[605px] bg-[url('/assets/banner-videos.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
              <h1 className="text-5xl sm:text-5xl md:text-5xl inline-block text-center">
                <span
                  className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                  style={{
                    WebkitTextStroke: "2px white",
                    paintOrder: "stroke fill",
                  }}
                >
                  Videos
                </span>
              </h1>
              <p className="mt-3 font-comic text-xl text-center max-w-[50%] mx-auto">
                Short, gentle, kid-safe episodes that echo the same values from
                our books and games.
              </p>
            </div>
          </section>
        </div>

        {/* Filters */}
        <section className="top-0 z-10 bg-[#EAF7FF] backdrop-blur -mt-2">
          <div className="mx-auto max-w-[1350px] px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="relative block lg:col-span-1">
                <span className="sr-only">Search videos</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search videos"
                  className="w-full rounded-full font-comic border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
                  ⌕
                </span>
              </label>

              <select
                value={value}
                onChange={(e) =>
                  setValue(e.target.value as (typeof VALUE_OPTIONS)[number])
                }
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {VALUE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                value={age}
                onChange={(e) =>
                  setAge(e.target.value as (typeof AGE_OPTIONS)[number])
                }
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {AGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                value={length}
                onChange={(e) =>
                  setLength(e.target.value as (typeof LENGTH_OPTIONS)[number])
                }
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {LENGTH_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="overflow-hidden">
          <div className="mx-auto max-w-[1350px] px-4 py-10 relative">
            <div className="md:flex hidden absolute -left-50 top-0 z-10">
              <img src="assets/plane.png" className="w-46" />
            </div>
            <div className="md:flex hidden absolute -left-40 top-60 z-10">
              <img src="assets/cloud-1.png" />
            </div>
            <div className="md:flex hidden absolute -right-48 top-44">
              <img src="assets/cloud-2.png" className="w-40" />
            </div>
            <div className="md:flex hidden absolute -left-48 top-1/2 ">
              <img src="assets/cloud-2.png" className="w-40" />
            </div>
            <div className="md:flex hidden absolute -right-52 top-2/3">
              <img src="assets/ballon.png" className="w-46" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {watchLearn.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full rounded-3xl border border-white/60 bg-white/90 p-8 text-center font-comic text-slate-600 shadow-md">
                  No videos match your filters. Try changing the value or
                  length.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
}
