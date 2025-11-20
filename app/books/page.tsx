"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import { booksData } from "@/utils/constants";
import StickyHeader from "../Components/StickyHeader/page";

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

function BookCard({ book }: any) {
  return (
    <Link
      href={`books/${book?.slug}`}
      className="relative w-full flex flex-col mb-28"
    >
      {/* Book Image */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 md:-top-12 z-10">
        <img
          src={book.featuredImage}
          alt={book.title}
          className="w-56 sm:w-72 md:w-80 lg:w-136 xl:w-[20rem] h-auto object-contain drop-shadow-lg max-w-none -mt-6"
        />
      </div>
      <div className="bg-white mt-24 sm:mt-32 rounded-3xl rounded-br-[44px] px-4 sm:px-6 pt-20 sm:pt-18 pb-4 h-full flex flex-col justify-between">
        {/* Top content */}
        <div>
          <h2 className="text-xl sm:text-2xl text-black font-grobold text-start">
            {book.title}
          </h2>
          <p className="text-black text-sm sm:text-md mt-3 mb-3 font-comic leading-relaxed">
            {book.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mb-3 font-comic font-semibold">
            <button className="border px-3 text-sm rounded-3xl">Sidq</button>
            <button className="border px-3 text-sm rounded-3xl">
              {book.age_group}
            </button>
          </div>
          <div className="flex flex-wrap gap-2 font-comic font-semibold">
            <button className="border border-[#E8F8EE] bg-[#E8F8EE] px-3 py-1 text-sm rounded-3xl">
              Simple
            </button>
            <button className="border border-[#FDF3D9] bg-[#FDF3D9] px-3 py-1 white-space-nowrap text-sm rounded-3xl">
              Full in Box set
            </button>
          </div>
        </div>

        {/* Bottom button */}
        <Link href={`books/${book?.slug}`} className="flex justify-center mt-4">
          <button className="bg-[#0084d1] w-full py-3 rounded-full text-white font-grobold cursor-pointer">
            View Book
          </button>
        </Link>
      </div>
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
      const matchesSeries =
        series === "All Series" ? true : b.series === series;
      return matchesQuery && matchesAge && matchesSeries;
    });
  }, [query, age, value, series]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[605px] bg-[url('/assets/banner-books.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
            <div className="mx-auto max-w-6xl px-4 py-12 text-center">
              <h1 className="text-center text-6xl font-black leading-tight font-grobold">
                <span className="inline-block mx-3">
                  <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
                    <span className="tracking-[0.01em]">Abdullah</span> &
                    Fatima:
                  </span>
                </span>
                <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
                  Books
                </span>
              </h1>
              <p className="mt-3 font-comic text-xl text-center w-full md:max-w-[50%] mx-auto">
                Gentle, story-led adventures that nurture Sabr, Shukr, Adab,
                Amanah, Rahmah, Sidq and Ihsan for children ages 5–12.
              </p>
            </div>
          </section>
        </div>

        {/* Filters */}
        <section className="top-0 z-10 bg-[#EAF7FF] -mt-2 backdrop-blur supports-backdrop-filter:bg-[#EAF7FF] mb-8">
          <div className="mx-auto max-w-[1350px] px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="relative block">
                <span className="sr-only">Search books by title or theme</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search books by title or theme"
                  className="w-full rounded-full font-comic border border-slate-200 bg-white px-4 py-2 text-md text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-full font-comic border border-slate-200 bg-white px-3 py-2 text-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
        <section className="overflow-hidden">
          <div className="mx-auto max-w-[1350px] px-4 py-10 relative">
            <div className="md:flex hidden absolute -right-48 top-44">
              <img src="assets/plane-3.png" className="w-46" />
            </div>
            <div className="md:flex hidden absolute -left-48 bottom-30">
              <img src="assets/ballon.png" className="w-46" />
            </div>
            <div className="md:flex hidden absolute -left-40 top-44">
              <img src="assets/cloud-1.png" className="w-20" />
            </div>
            <div className="md:flex hidden absolute -right-52 top-2/3">
              <img src="assets/cloud-2.png" className="w-46" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
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
        {/* <section className="relative">
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
                  href="https://shop.sidr.productions/products/abdullah-fatima-illustrated-series-12-book-box-set"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  Pre-order the full box
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
}
