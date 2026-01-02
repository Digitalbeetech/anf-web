"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import StickyHeader from "../Components/StickyHeader/page";
import Image from "next/image";
import { GAMES } from "@/utils/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useModal } from "@/context/ModalContext";

type GameType = "Runner" | "Puzzle" | "Strategy" | "Story";
type ValueTag =
  | "Sabr"
  | "Shukr"
  | "Adab"
  | "Amanah"
  | "Rahmah"
  | "Sidq"
  | "Ihsan";
type AgeBand = "5–7" | "8–12" | "5–12";
type Platform = "Web" | "iOS" | "Android";

const TYPE_OPTIONS = [
  "All Types",
  "Runner",
  "Puzzle",
  "Strategy",
  "Story",
] as const;
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
const AGE_OPTIONS = ["All Ages", "5–7", "8–12", "5–12"] as const;
const PLATFORM_OPTIONS = ["All Platforms", "Web", "iOS", "Android"] as const;

function GameCard({ game }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const cancel = searchParams.get("cancel");

  const user = useSelector((state: RootState) => state.api.user);

  const handleFail = () => {
    openModal(
      "Payment Failed",
      <p className="text-center font-comic text-lg font-semibold">
        Something went wrong while processing your payment. Please try again.
      </p>
    );
  };
  useEffect(() => {
    if (cancel) {
      handleFail();
    }
  }, [cancel]);

  return (
    <>
      <Link
        href={`/games/${game?.slug}`}
        className="relative group w-full bg-white rounded-2xl rounded-br-[44px] overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <Image
            src={`${game?.thumbUrl}`}
            alt={game?.title || "Game"}
            width={900}
            height={900}
            className="w-full h-48 sm:h-56 md:h-64 object-fill"
          />
        </div>
        <div className="p-5 sm:p-6 md:p-8 space-y-4">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl text-gray-900 font-grobold">
            {game?.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-comic">
            {game?.blurb ||
              "An exciting and educational game for kids to learn Islamic values through play."}
          </p>
          <div className="flex flex-wrap gap-2 mb-3 font-comic font-semibold">
            {game?.values?.map((item: any) => (
              <button className="border px-3 text-sm rounded-3xl">
                {item}
              </button>
            ))}
            <button className="border px-3 text-sm rounded-3xl">
              {game?.age}
            </button>
          </div>

          {/* Play Button */}
          <div className="pt-2 w-full">
            {user?.premiumSubscription || game?.free ? (
              <button
                className="inline-flex w-full cursor-pointer mt-4 items-center justify-center rounded-full bg-sky-600 px-4 py-3.5 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/game/${
                      user && user?.premiumSubscription
                        ? game?.premiumUrl
                        : game.url
                    }`
                  );
                }}
              >
                Play Now
              </button>
            ) : (
              <div className="mt-3 flex flex-row flex-wrap items-center gap-3">
                <div className="flex-1">
                  {game.platforms.includes("Web") && (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(
                          `/game/${
                            user && user?.premiumSubscription
                              ? game?.premiumUrl
                              : game.url
                          }`
                        );
                      }}
                      className="inline-flex cursor-pointer w-full items-center justify-center rounded-full bg-sky-600 px-4 py-3.5 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
                    >
                      Play Demo
                    </div>
                  )}
                </div>
                <div className="relative" onClick={(e) => e.preventDefault()}>
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
                      Join to Play Full Game
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
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default function GamesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("All Types");
  const [value, setValue] =
    useState<(typeof VALUE_OPTIONS)[number]>("All Values");
  const [age, setAge] = useState<(typeof AGE_OPTIONS)[number]>("All Ages");
  const [platform, setPlatform] =
    useState<(typeof PLATFORM_OPTIONS)[number]>("All Platforms");

  const filtered = useMemo(() => {
    return GAMES.filter((g) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q ? true : g.title.toLowerCase().includes(q);

      const matchesType =
        type === "All Types" ? true : g.type === (type as GameType);
      const matchesValue =
        value === "All Values" ? true : g.values.includes(value as ValueTag);
      const matchesAge = age === "All Ages" ? true : g.age === (age as AgeBand);
      const matchesPlatform =
        platform === "All Platforms"
          ? true
          : g.platforms.includes(platform as Platform);

      return (
        matchesQuery &&
        matchesType &&
        matchesValue &&
        matchesAge &&
        matchesPlatform
      );
    });
  }, [query, type, value, age, platform]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        <div className="relative w-full h-[46vh] sm:h-[60vh] md:h-[75vh] lg:h-[605px] md:bg-[url('/assets/banner-games.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
                <span className="inline-block mx-3">
                  <span className="inline-block text-[#ffdb5a] tracking-[-0.01em] text-shadow-yellow">
                    Play & Learn:
                  </span>
                </span>
                <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
                  Games
                </span>
              </h1>
              <p className="mt-3 font-comic text-base sm:text-lg md:text-xl text-center w-full md:max-w-[50%] mx-auto">
                Short, joyful web and mobile games that practice real-life
                skills and Islamic values in a safe, ad-free space.
              </p>
            </div>
          </section>
        </div>
        {/* Filters */}
        <section className="bg-[#EAF7FF] -mt-2 relative">
          <div className="mx-auto max-w-[1350px] px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <label className="relative block lg:col-span-1">
                <span className="sr-only">Search games</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games"
                  className="w-full rounded-full font-comic border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="pointer-events-none absolute right-3 top-1.5 text-slate-400">
                  ⌕
                </span>
              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as (typeof TYPE_OPTIONS)[number])
                }
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {TYPE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

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
                value={platform}
                onChange={(e) =>
                  setPlatform(
                    e.target.value as (typeof PLATFORM_OPTIONS)[number]
                  )
                }
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {PLATFORM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="overflow-hidden">
          <div className="mx-auto max-w-[1350px] px-4 py-10 relative">
            <div className="md:flex hidden absolute -left-40 top-0 z-10">
              <img src="assets/cloud-1.png" className="w-20" />
            </div>
            <div className="md:flex hidden absolute -right-48 top-44">
              <img src="assets/cloud-2.png" className="w-40" />
            </div>
            <div className="md:flex hidden absolute -left-48 top-1/2 ">
              <img src="assets/cloud-2.png" className="w-40" />
            </div>
            <div className="md:flex hidden absolute -left-40 top-26">
              <img src="assets/ballon.png" className="w-40" />
            </div>
            <div className="md:flex hidden absolute -right-52 top-2/3">
              <img src="assets/plane-3.png" className="w-46" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((game) => (
                <Suspense>
                  <GameCard key={game.id} game={game} />
                </Suspense>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full rounded-3xl border border-white/60 bg-white/90 p-8 text-center font-comic text-slate-600 shadow-md">
                  No games match your filters. Try changing the value or
                  platform.
                </div>
              )}
            </div>
          </div>
          <section className="w-full bg-[#e8f7ff] py-6 px-4">
            <div className="max-w-[1310px] mx-auto bg-white px-4 py-4 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl">
              <div className="text-left font-comic text-slate-700">
                <p className="text-lg leading-tight font-grobold">
                  <span>Stories plant the idea.</span>
                  <br />
                  Games let kids practice.
                </p>

                <button className="mt-3 px-4 py-2 bg-white border-2 border-[#f4c16e] rounded-full text-[#f4a623] text-sm font-semibold shadow-sm">
                  Reflection prompts
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-32 h-32 bg-[#f77a2f] rounded-full flex items-center justify-center text-white text-center px-3 leading-tight font-grobold">
                  for <br /> parents <br /> & teachers
                </div>
              </div>

              <div className="text-left font-comic text-[#9f69b4] text-lg leading-tight">
                <p className="font-grobold">
                  help turn play <br />
                  into real-life <br />
                  habits.
                </p>
              </div>

              <div>
                <button className="bg-[#1eb8ff] text-white px-5 py-3 rounded-xl shadow font-grobold">
                  Learn how to use our games <br />
                  in class & at home
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
}
