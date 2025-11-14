"use client";

import React from "react";
import Link from "next/link";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-grobold text-emerald-700 ring-1 ring-emerald-200">
    {children}
  </span>
);

const ActivityDetailPage: React.FC = () => {
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
                  Abdullah &amp; Fatima • Activity
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  Salah Time Checklist
                </h1>

                <p className="mt-3 font-comic text-slate-700/90">
                  A simple, visual checklist to help children prepare calmly for
                  salah.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>Worksheet</Tag>
                  <Tag>Sabr</Tag>
                  <Tag>Amanah</Tag>
                  <Tag>Age 5–7 · 8–12</Tag>
                  <Tag>1-page printable (A4)</Tag>
                  <Tag>PDF · 0.5 MB</Tag>
                  <Pill>Free</Pill>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/activities/salah-checklist/download"
                    className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    View &amp; download
                  </Link>
                </div>
              </div>

              {/* PREVIEW MOCK */}
              <div className="flex justify-center">
                <div className="relative h-72 w-52 rounded-3xl border border-white/80 bg-white/95 shadow-xl shadow-sky-200">
                  <div className="absolute inset-3 rounded-2xl border border-dashed border-sky-300 bg-[radial-gradient(circle_at_top,_#FFEAA0,_transparent_60%)]" />
                  <div className="relative m-4 flex h-[calc(100%-2rem)] flex-col justify-between rounded-2xl bg-white/92 p-3 font-comic text-slate-600 text-xs">
                    <div>
                      <p className="text-[11px] font-grobold text-sky-700">
                        Salah Time Checklist
                      </p>
                      <p className="mt-1">☐ Wudu done</p>
                      <p>☐ Clothes tidy</p>
                      <p>☐ Prayer mat ready</p>
                      <p>☐ Heart feels calm</p>
                    </div>
                    <div className="mt-2 text-[10px] text-slate-500">
                      Tip: Use stickers or a whiteboard marker to tick each
                      step.
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
                  Ways to use this activity
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  <li>
                    Stick the checklist on a bedroom or hallway wall at child
                    height.
                  </li>
                  <li>
                    Use a reusable marker or small stickers to tick off each
                    step.
                  </li>
                  <li>
                    Pair it with a calm “salah time” routine and soft voice.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Skills practised
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  <li>Independence in getting ready for salah.</li>
                  <li>Planning and following a simple sequence.</li>
                  <li>Linking actions to why we pray.</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                <li>
                  Introduce the checklist slowly—one or two steps first for
                  younger children.
                </li>
                <li>
                  Celebrate effort rather than perfection; some days will be
                  slower.
                </li>
                <li>
                  Review the checklist once a week and let your child add a
                  doodle or new step.
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

export default ActivityDetailPage;
