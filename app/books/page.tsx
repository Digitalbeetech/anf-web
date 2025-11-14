"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { booksData } from "@/utils/constants";

type Book = {
  id: string;
  slug: string;
  title: string;
  description: string;
  values: (
    | "Sabr"
    | "Shukr"
    | "Adab"
    | "Amanah"
    | "Rahmah"
    | "Sidq"
    | "Ihsan"
  )[];
  age: "5–7" | "8–12" | "5–9";
  sample?: boolean;
  premium?: boolean;
  coverUrl?: string;
  series: "Illustrated Series 1" | "Other";
};

const BOOKS: Book[] = [
  {
    id: "b1",
    slug: "the-day-we-almost-missed-salah",
    title: "The Day We Almost Missed Salah",
    description:
      "A warm reminder about prayer, time and family responsibility.",
    values: ["Sabr", "Amanah"],
    age: "5–9",
    sample: true,
    premium: true,
    series: "Illustrated Series 1",
  },
  {
    id: "b2",
    slug: "kindness-at-the-crosswalk",
    title: "Kindness at the Crosswalk",
    description: "A small act of help that turns a busy morning into barakah.",
    values: ["Rahmah", "Ihsan"],
    age: "5–7",
    sample: true,
    premium: false,
    series: "Illustrated Series 1",
  },
  {
    id: "b3",
    slug: "the-truth-pebble",
    title: "The Truth Pebble",
    description:
      "Telling the truth when it's hard—and why it feels light after.",
    values: ["Sidq"],
    age: "8–12",
    sample: false,
    premium: true,
    series: "Illustrated Series 1",
  },
];

const AGE_OPTIONS = ["All Ages", "5–7", "8–12", "5–9"] as const;
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
const SERIES_OPTIONS = ["All Series", "Illustrated Series 1"] as const;

function Pill({
  children = "",
  kind = "neutral" as "neutral" | "free" | "premium",
}) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const tone =
    kind === "free"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      : kind === "premium"
      ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
      : "bg-slate-100 text-slate-700 ring-1 ring-slate-200";
  return <span className={`${base} ${tone}`}>{children}</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-white/70 backdrop-blur px-2 py-0.5 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-white/60">
      {children}
    </span>
  );
}

function BookCard({ book }: any) {
  return (
    <Link href={`books/${book.slug}`}>
      <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 backdrop-blur shadow-lg shadow-sky-100 hover:shadow-sky-200 transition h-full">
        {/* Image Section */}
        <div className="w-full h-64 bg-linear-to-br from-sky-50 to-white grid place-items-center text-slate-400 text-sm">
          {book.cover_image ? (
            <img
              src={book.cover_image}
              alt={`${book.title} cover`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="select-none font-comic">Cover</div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col gap-3 p-4">
          <h2 className="text-xl font-grobold">{book.title}</h2>
          <p className="text-md font-comic">{book.tagline}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <Tag>Age {book.age_group}</Tag>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const [age, setAge] = useState<(typeof AGE_OPTIONS)[number]>("All Ages");
  const [value, setValue] =
    useState<(typeof VALUE_OPTIONS)[number]>("All Values");
  const [series, setSeries] =
    useState<(typeof SERIES_OPTIONS)[number]>("All Series");

  const filtered = useMemo(() => {
    return booksData.filter((b) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q
        ? true
        : b.title.toLowerCase().includes(q) ||
          b.tagline.toLowerCase().includes(q);
      const matchesAge = age === "All Ages" ? true : b.age_group === age;
      // const matchesValue =
      //   value === "All Values" ? true : b?.values?.includes(value as any);
      const matchesSeries =
        series === "All Series" ? true : b.series === series;
      return matchesQuery && matchesAge  && matchesSeries;
    });
  }, [query, age, value, series]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <Header />
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <h1 className="text-5xl sm:text-5xl md:text-5xl inline-block text-center">
              <span
                className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                style={{
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Abdullah &
              </span>{" "}
              <span
                className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                style={{
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Fatima
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-xl text-center font-comic">
              Gentle, story-led adventures that nurture Sabr, Shukr, Adab,
              Amanah, Rahmah, Sidq and Ihsan for children ages 5–12.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-10 bg-[#EAF7FF] backdrop-blur supports-backdrop-filter:bg-[#EAF7FF]">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="relative block">
                <span className="sr-only">Search books by title or theme</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search books by title or theme"
                  className="w-full rounded-2xl font-comic border border-slate-200 bg-white px-4 py-2 text-md text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
                  ⌕
                </span>
              </label>

              <select
                value={age}
                onChange={(e) =>
                  setAge(e.target.value as (typeof AGE_OPTIONS)[number])
                }
                className="w-full font-comic rounded-2xl border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {AGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="font-comic">
                    {opt}
                  </option>
                ))}
              </select>

              <select
                value={value}
                onChange={(e) =>
                  setValue(e.target.value as (typeof VALUE_OPTIONS)[number])
                }
                className="w-full rounded-2xl font-comic border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {VALUE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                value={series}
                onChange={(e) =>
                  setSeries(e.target.value as (typeof SERIES_OPTIONS)[number])
                }
                className="w-full rounded-2xl font-comic border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {SERIES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full rounded-3xl border border-white/60 bg-white/80 p-8 text-center font-comic text-slate-600 shadow-md">
                  No books match your filters. Try clearing them.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Series Highlight */}
        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 py-12">
            <div className="rounded-3xl border border-sky-200 bg-white/90 p-8 shadow-md backdrop-blur">
              <h2 className="text-2xl font-grobold text-slate-900">
                Illustrated Series 1 — 12-Book Box Set
              </h2>
              <p className="mt-3 max-w-3xl font-comic text-slate-700/90">
                Twelve heart-rooted stories in one keepsake box. Each story
                focuses on a core Islamic value with discussion prompts and
                educator notes included online.
              </p>
              <ul className="mt-4 space-y-2 font-comic text-slate-800/90">
                <li>
                  • Covers everyday moments: salah, fasting, Eid, anger,
                  kindness, masjid manners and more.
                </li>
                <li>• Perfect for families, schools and libraries.</li>
                <li>
                  • Includes <strong>1-year online membership</strong> for
                  launch pre-orders.
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/shop/abdullah-fatima-series-1-box"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  Pre-order the full box
                </Link>
              </div>
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
