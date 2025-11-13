"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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

// Decorative clouds reused for consistency
const TopClouds = () => (
  <svg
    aria-hidden
    viewBox="0 0 1440 160"
    className="block w-full text-[#EAF7FF]"
  >
    <path
      fill="currentColor"
      d="M0,64L60,85.3C120,107,240,149,360,149.3C480,149,600,107,720,96C840,85,960,107,1080,122.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </svg>
);

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

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 backdrop-blur shadow-lg shadow-sky-100 hover:shadow-sky-200 transition">
      <div className="relative aspect-video w-full bg-gradient-to-br from-sky-300 via-sky-500 to-purple-500">
        {video.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-4xl text-white/90">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sky-600 shadow-md">
              ▶
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="text-base font-grobold text-slate-900 leading-snug drop-shadow-sm">
          {video.title}
        </h2>
        <p className="text-sm font-comic text-slate-700/90">{video.blurb}</p>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          {video.values.map((v) => (
            <Tag key={v}>{v}</Tag>
          ))}
          {video.free && <Pill>Free</Pill>}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs font-comic text-slate-600">
          <span>{video.age.join(" · ")}</span>
          <span>{video.length}</span>
        </div>

        <div className="mt-auto pt-2">
          <Link
            href={`/videos/${video.slug}`}
            className="inline-flex items-center justify-center rounded-2xl border border-sky-500 bg-white px-4 py-2 text-xs font-grobold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Watch now
          </Link>
        </div>
      </div>
    </article>
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
        <Header />
        {/* Hero */}
        <section className="relative border-b border-white/60 bg-gradient-to-b from-[#EAF7FF] to-white/60">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <h1 className="text-5xl sm:text-5xl md:text-5xl inline-block text-center">
              <span
                className="text-[#f9be49] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                style={{
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Videos
              </span>
            </h1>
            <p className="mt-3 text-xl font-comic">
              Short, gentle, kid-safe episodes that echo the same values from
              our books and games.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-10 bg-[#EAF7FF] backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="relative block lg:col-span-1">
                <span className="sr-only">Search videos</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search videos"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
        <section>
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((video) => (
                <VideoCard key={video.id} video={video} />
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
