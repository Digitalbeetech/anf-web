"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { X } from "lucide-react";

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

type Game = {
  id: string;
  slug: string;
  title: string;
  blurb: string;
  type: GameType;
  values: ValueTag[];
  age: AgeBand;
  mode: string;
  platforms: Platform[];
  thumbUrl?: string;
  url?: string;
};

const GAMES: Game[] = [
  {
    id: "g1",
    slug: "abdullah-fatima-adventures",
    title: "Abdullah & Fatima Adventures",
    blurb:
      "Explore, help and learn across connected quests inspired by everyday Muslim life.",
    type: "Story",
    values: ["Sabr", "Adab", "Rahmah"],
    age: "5–12",
    mode: "Story & Mini-quests",
    thumbUrl:'/assets/game-img.png',
    platforms: ["Web", "iOS", "Android"],
    url: "https://abdullahandfatima.com/play/adventure/",
  },
  {
    id: "g2",
    slug: "the-run",
    title: "The Run",
    blurb:
      "Dash, dodge and make quick choices while keeping adab and safety in mind.",
    type: "Runner",
    values: ["Adab", "Amanah"],
    age: "8–12",
    mode: "Endless runner · Levels",
    platforms: ["Web"],
    url: "https://abdullahandfatima.com/play/the-run/",
  },
  {
    id: "g3",
    slug: "road-cross",
    title: "Road Cross",
    blurb: "Practice safe crossing, patience and awareness at a busy junction.",
    type: "Puzzle",
    values: ["Sabr", "Amanah"],
    age: "5–7",
    mode: "Level-based safety puzzles",
    platforms: ["Web", "Android"],
    url: "https://abdullahandfatima.com/play/the-escape/",
  },
];

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

// Decorative bits (reuse style from books)
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

function GameCard({ game }: { game: Game }) {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 backdrop-blur shadow-lg shadow-sky-100 hover:shadow-sky-200 transition">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-sky-200 via-sky-400 to-purple-500 grid place-items-center text-sm font-comic text-white/90">
          {game.thumbUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.thumbUrl}
              alt={`${game.title} gameplay`}
              className="h-full w-full object-contain"
            />
          ) : (
            <span>Gameplay visual</span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <h2 className="text-base font-grobold text-slate-900 leading-snug drop-shadow-sm">
            {game.title}
          </h2>
          <p className="text-sm font-comic text-slate-700/90">{game.blurb}</p>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            {game.values.map((v) => (
              <Tag key={v}>{v}</Tag>
            ))}
            <Tag>{game.age}</Tag>
          </div>

          <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs font-comic text-slate-600">
            <span>{game.mode}</span>
            <span>{game.platforms.join(" · ")}</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {game.platforms.includes("Web") && (
              <div
                onClick={() => setSelectedGame(game)}
                className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-sky-600 px-4 py-2 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
              >
                Play on Web
              </div>
            )}
            {(["iOS", "Android"] as Platform[]).map((p) => (
              <button
                key={p}
                type="button"
                className={`inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-xs font-grobold ${
                  game.platforms.includes(p)
                    ? "border-sky-500 text-sky-700 bg-white hover:bg-sky-50"
                    : "border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="pt-1">
            <p className="text-xs font-comic cursor-pointer text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
              View details
            </p>
          </div>
        </div>
      </article>
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelectedGame(null)}
            className="absolute top-4 cursor-pointer right-4 z-50 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
            aria-label="Close Game"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Game Iframe */}
          <iframe
            src={selectedGame.url}
            title={selectedGame.title}
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
          />
        </div>
      )}
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
      const matchesQuery = !q
        ? true
        : g.title.toLowerCase().includes(q) ||
          g.blurb.toLowerCase().includes(q);

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
                Games
              </span>
            </h1>
            <p className="mt-3 font-comic text-xl">
              Short, joyful web and mobile games that practice real-life skills
              and Islamic values in a safe, ad-free space.
            </p>
            <div className="mt-4 flex justify-center flex-wrap gap-2 text-xs font-comic text-slate-800">
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-white/60">
                No personal data from kids
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-white/60">
                Parental-gated app downloads
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-white/60">
                Nickname-only leaderboards
              </span>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-10 border-white/60 bg-[#EAF7FF]">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <label className="relative block lg:col-span-2">
                <span className="sr-only">Search games</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
                  ⌕
                </span>
              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as (typeof TYPE_OPTIONS)[number])
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                value={platform}
                onChange={(e) =>
                  setPlatform(
                    e.target.value as (typeof PLATFORM_OPTIONS)[number]
                  )
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
        <section>
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full rounded-3xl border border-white/60 bg-white/90 p-8 text-center font-comic text-slate-600 shadow-md">
                  No games match your filters. Try changing the value or
                  platform.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Teaching strip */}
        <section className="border-t border-white/60 bg-gradient-to-b from-[#FFEAA0] to-[#FFB580]">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <p className="text-sm font-comic text-slate-900">
              Stories plant the idea. Games let kids practice. Reflection
              prompts (for parents &amp; teachers) help turn play into real-life
              habits.{" "}
              <Link
                href="/insights"
                className="font-grobold text-sky-800 underline-offset-2 hover:text-sky-900 hover:underline"
              >
                Learn how to use our games in class &amp; at home →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
}
