"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const GameDetailPage: React.FC = () => {
  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <Header />
        {/* HERO */}
        <section className="relative border-b border-white/60 bg-gradient-to-b from-[#EAF7FF] to-white/60">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-comic text-sky-700 shadow-sm ring-1 ring-white/60">
                  Abdullah &amp; Fatima • Game
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  Abdullah &amp; Fatima Adventures
                </h1>

                <p className="mt-2 text-sm font-grobold uppercase tracking-wide text-sky-700">
                  Story &amp; Mini-quests
                </p>

                <p className="mt-3 font-comic text-slate-700/90">
                  Explore, help and learn across connected quests inspired by
                  everyday Muslim life.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Sabr</Badge>
                  <Badge>Adab</Badge>
                  <Badge>Rahmah</Badge>
                  <Badge>Age 5–12</Badge>
                  <Badge>Story Adventure</Badge>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-comic text-slate-700/90">
                  <span>Story &amp; Mini-quests</span>
                  <span>•</span>
                  <span>Web · iOS · Android</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/play/abdullah-fatima-adventures"
                    className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    Play on Web
                  </Link>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-2xl border border-sky-500 bg-white px-4 py-2 text-xs font-grobold text-sky-700 hover:bg-sky-50"
                    >
                      iOS
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-2xl border border-sky-500 bg-white px-4 py-2 text-xs font-grobold text-sky-700 hover:bg-sky-50"
                    >
                      Android
                    </button>
                  </div>
                </div>
              </div>

              {/* Gameplay mock card */}
              <div className="flex justify-center">
                <div className="relative h-64 w-full max-w-md rounded-[1.75rem] border border-white/80 bg-slate-900 shadow-xl shadow-sky-200">
                  <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
                  <div className="relative m-4 rounded-2xl bg-gradient-to-br from-sky-300 via-sky-500 to-purple-500">
                    <div className="absolute inset-0 flex flex-col justify-between p-4 text-xs font-comic text-white/95">
                      <div className="flex items-center justify-between gap-3">
                        <span>Level 1 · Morning Run</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5">
                          ★ 3
                        </span>
                      </div>
                      <div className="flex items-end justify-between gap-3">
                        <div className="flex gap-2">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sky-600">
                            ←
                          </span>
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sky-600">
                            →
                          </span>
                        </div>
                        <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px]">
                          Think: What&apos;s the safest choice?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="border-b border-white/60 bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  How to play
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  <li>Use the arrow keys or on-screen buttons to move.</li>
                  <li>Collect helpful items and avoid unsafe choices.</li>
                  <li>Look out for small reflection prompts between levels.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Learning notes
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  <li>Practising everyday safety and adab in a playful way.</li>
                  <li>Seeing consequences of rushed vs thoughtful choices.</li>
                  <li>Connecting small in-game choices to real-life habits.</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                <li>
                  Play or watch the first level together, then let children
                  explore.
                </li>
                <li>
                  Pause after a level and ask: “What did you choose? Why?”
                </li>
                <li>Link game choices to school, masjid and home moments.</li>
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

export default GameDetailPage;
