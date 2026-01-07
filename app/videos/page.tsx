"use client";

import React, { useMemo, useState } from "react";
import Footer from "../Components/Footer";
import StickyHeader from "../Components/StickyHeader/page";
import Image from "next/image";
import { Play } from "lucide-react";
import { VIDEOS } from "@/utils/videos";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { usePathname, useRouter } from "next/navigation";

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

export const VALUE_OPTIONS = [
  "All Values",
  ...Array.from(new Set(VIDEOS.flatMap((video) => video.values))),
] as const;

const AGE_OPTIONS = ["All Ages", "5–8", "8–12"] as const;
const LENGTH_OPTIONS = ["Any length", "Under 5 min", "5–10 min"] as const;

function VideoCard({ video }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.api.user);

  return (
    <>
      <Link
        href={`/videos/${video?.slug}`}
        className="rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col transition-transform p-4 sm:p-5"
      >
        <div className="flex flex-col grow">
          <div className="relative w-full aspect-video cursor-pointer rounded-2xl overflow-hidden h-70">
            <Image
              src={video?.image}
              alt={video.text || "Video thumbnail"}
              fill
              className="object-fill"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              onClick={(e) => {
                e.preventDefault();
                (user?.premiumSubscription || video?.free) &&
                  router.push(`/video/${video?.slug}`);
              }}
            >
              <Play className="w-14 h-14 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* ---------- TEXT ---------- */}
          <p className="w-full font-comic text-xl font-semibold text-start mt-4">
            {video.title}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 font-comic font-semibold mt-3">
            {video?.values?.map((item: any) => (
              <button className="border px-3 text-sm rounded-3xl">
                {item}
              </button>
            ))}
            <button className="border px-3 text-sm rounded-3xl">
              {video?.age}
            </button>
          </div>
        </div>

        {/* ---------- BUTTON - Always at Bottom ---------- */}
        {user?.premiumSubscription || video?.free ? (
          <button
            className="bg-[#ff625a] rounded-full w-full py-3 font-grobold text-white mt-4 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/video/${video?.slug}`);
            }}
          >
            Watch now
          </button>
        ) : (
          <div className="relative mt-4" onClick={(e) => e.preventDefault()}>
            <select
              className="appearance-none bg-sky-600 w-full text-white px-5 py-3 rounded-full text-sm font-grobold shadow-sm cursor-pointer hover:bg-sky-700 focus:outline-none pr-10"
              defaultValue=""
              onChange={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selected = e.target.value;
                if (!selected) return;

                try {
                  const priceId =
                    selected === "monthly"
                      ? process.env.NEXT_PUBLIC_MONTHLY_PRICEID
                      : process.env.NEXT_PUBLIC_YEARLY_PRICEID;

                  const previousPage = pathname;

                  const res = await fetch("/api/create-subscription", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ priceId, previousPage }),
                  });

                  const data = await res.json();

                  if (data.url) {
                    window.location.href = data.url; // Redirect to Stripe checkout
                  } else {
                    alert("Error: " + data.error);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <option
                value=""
                disabled
                className="text-black bg-white font-comic"
              >
                Join to Watch
              </option>

              <option
                value="monthly"
                className="text-black bg-white font-comic font-semibold"
              >
                Monthly – £3.99
              </option>

              <option
                value="annual"
                className="text-black bg-white font-comic font-semibold"
              >
                Annual – £39
              </option>
            </select>

            {/* Custom Arrow */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
              ▼
            </span>
          </div>
        )}
      </Link>
    </>
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
      const matchesQuery = !q || v.title.toLowerCase().includes(q);
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
        <div className="relative w-full h-[46vh] sm:h-[60vh] md:h-[75vh] lg:h-[605px] md:bg-[url('/assets/banner-videos.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
                <span className="inline-block text-[#ffdb5a] tracking-[-0.01em] text-shadow-yellow">
                  Videos
                </span>
              </h1>
              <p className="mt-3 font-comic sm:text-lg md:text-xl text-center w-full md:max-w-[60%] mx-auto">
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
              {filtered.map((video, index) => (
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
