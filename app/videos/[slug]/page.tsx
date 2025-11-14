"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const VideoDetailPage: React.FC = () => {
  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <Header />
        {/* HERO */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              <div>
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-comic text-sky-700 shadow-sm ring-1 ring-white/60">
                  Abdullah &amp; Fatima • Episode
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  Meet Abdullah &amp; Fatima
                </h1>

                <p className="mt-3 font-comic text-slate-700/90">
                  Introduction to the siblings, their world, and the values they
                  live by.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Adab</Chip>
                  <Chip>Rahmah</Chip>
                  <Chip>Age 5–7 · 8–12</Chip>
                  <Chip>Under 5 min</Chip>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/videos/meet-abdullah-fatima/watch"
                    className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    Watch now
                  </Link>
                </div>
              </div>

              {/* VIDEO MOCK */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl border border-white/80 bg-slate-950 shadow-xl shadow-sky-200">
                  <div className="relative aspect-video overflow-hidden rounded-2xl m-2 bg-linear-to-br from-sky-300 via-sky-500 to-purple-500">
                    <div className="grid h-full w-full place-items-center text-4xl text-white/90">
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-sky-600 shadow-md">
                        ▶
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 pb-3 pt-1 text-xs font-comic text-slate-200">
                    <span>CC • Subtitles</span>
                    <span>Safe · Ad-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUMMARY & TALKING POINTS */}
        <section className="border-b border-white/60 bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Episode summary
                </h2>
                <p className="mt-3 font-comic text-slate-700/90">
                  In this short episode, children meet Abdullah and Fatima, see
                  their home, and discover how small everyday choices can be
                  full of adab and Rahmah.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Talking points
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  <li>
                    What did you notice about how Abdullah and Fatima speak to
                    each other?
                  </li>
                  <li>Which moment made you smile the most? Why?</li>
                  <li>
                    Is there a small thing from this episode that we can try at
                    home today?
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                <li>
                  Watch together the first time, with distractions put away.
                </li>
                <li>
                  Pause once or twice to ask a gentle question instead of
                  explaining everything.
                </li>
                <li>
                  After watching, invite your child to act out a favourite
                  scene.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
};

export default VideoDetailPage;
