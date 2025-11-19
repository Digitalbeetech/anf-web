"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { activityData } from "@/utils/activity";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import StickyHeader from "../Components/StickyHeader/page";

type ActivityType = "Coloring" | "Maze" | "Worksheet";
type ValueTag =
  | "Sabr"
  | "Shukr"
  | "Adab"
  | "Amanah"
  | "Rahmah"
  | "Sidq"
  | "Ihsan";
type AgeBand = "5–7" | "8–12";

type Activity = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: ActivityType;
  values: ValueTag[];
  age: AgeBand[];
  free?: boolean;
  cover_photo_box?: string;
  File?: string;
};

// const ACTIVITIES: Activity[] = [
//   {
//     id: "a1",
//     slug: "salah-checklist",
//     title: "Salah Time Checklist",
//     blurb:
//       "A simple, visual checklist to help children prepare calmly for salah.",
//     type: "Worksheet",
//     values: ["Sabr", "Amanah"],
//     age: ["5–7", "8–12"],
//     free: true,
//   },
//   {
//     id: "a2",
//     slug: "abdullah-coloring-football",
//     title: "Abdullah Playing Football – Coloring Page",
//     blurb:
//       "A fun, confidence-building coloring page that ties into teamwork and adab.",
//     type: "Coloring",
//     values: ["Adab"],
//     age: ["5–7"],
//     free: true,
//   },
//   {
//     id: "a3",
//     slug: "fatima-maze-kindness",
//     title: "Fatima’s Kindness Maze",
//     blurb:
//       "Help Fatima find her way to the right choice—kindness wins every time.",
//     type: "Maze",
//     values: ["Rahmah"],
//     age: ["5–7", "8–12"],
//     free: false,
//   },
// ];

const TYPE_OPTIONS = ["All Types", "Coloring", "Maze", "Worksheet"] as const;
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

function ActivityCard({ activity }: any) {
  const user = useSelector((state: RootState) => state.api.user);

  const handleDownload = async (fileurl: any) => {
    try {
      const fileUrl = fileurl;

      // Fetch the file
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create a temporary link and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Abdullah_Fatima_Part1.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <Link
      href={`/activities/${activity.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 backdrop-blur shadow-lg shadow-sky-100 hover:shadow-sky-200 transition"
    >
      <div className="relative aspect-4/3 w-full bg-linear-to-br from-sky-200 via-sky-400 to-purple-500">
        {activity?.cover_photo_box ? (
          <img
            src={activity?.cover_photo_box}
            alt={activity.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-xl text-white/90">
            Preview
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="text-base font-grobold text-slate-900 leading-snug drop-shadow-sm">
          {activity.title}
        </h2>
        <p className="text-sm font-comic text-slate-700/90">
          {activity.tagline}
        </p>

        {/* <div className="mt-1 flex flex-wrap items-center gap-2">
          {activity.values.map((v) => (
            <Tag key={v}>{v}</Tag>
          ))}
          {activity.free && <Pill>Free</Pill>}
        </div> */}

        {user?.premiumSubscription ? (
          <div className="mt-auto pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDownload(activity?.File);
              }}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-sky-500 bg-white px-4 py-2 text-xs font-grobold text-sky-700 shadow-sm hover:bg-sky-50"
            >
              Download
            </button>
          </div>
        ) : (
          <div className="relative w-full" onClick={(e) => e.preventDefault()}>
            <select
              className="appearance-none w-full mt-4 bg-sky-600 text-white px-5 py-2.5 rounded-2xl text-sm font-grobold shadow-sm cursor-pointer hover:bg-sky-700 focus:outline-none pr-10"
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

                  const res = await fetch("/api/create-subscription", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ priceId }),
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
              <option value="" disabled className="text-black bg-white">
                Join to Download PDF
              </option>

              <option value="monthly" className="text-black bg-white">
                Monthly – £3.99
              </option>

              <option value="annual" className="text-black bg-white">
                Annual – £39.99
              </option>
            </select>
            <span className="pointer-events-none absolute right-3 top-10 -translate-y-1/2 text-white">
              ▼
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function ActivitiesPage() {
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("All Types");
  const [value, setValue] =
    useState<(typeof VALUE_OPTIONS)[number]>("All Values");
  const [age, setAge] = useState<(typeof AGE_OPTIONS)[number]>("All Ages");

  // const filtered = useMemo(() => {
  //   return ACTIVITIES.filter((a) => {
  //     const matchesType =
  //       type === "All Types" ? true : a.type === (type as ActivityType);
  //     const matchesValue =
  //       value === "All Values" ? true : a.values.includes(value as ValueTag);
  //     const matchesAge =
  //       age === "All Ages" ? true : a.age.includes(age as AgeBand);

  //     return matchesType && matchesValue && matchesAge;
  //   });
  // }, [type, value, age]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        {/* Hero */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60 pt-24">
          <div className="mx-auto max-w-6xl text-center px-4 py-12">
            <h1 className="text-5xl sm:text-5xl md:text-5xl inline-block text-center">
              <span
                className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                style={{
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Activities &
              </span>{" "}
              <span
                className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                style={{
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                Printables
              </span>
            </h1>
            <p className="mt-3 text-xl font-comic">
              Color, solve, reflect and create—simple activities that turn
              stories into everyday habits.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-10 bg-[#EAF7FF] backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activityData.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
              {/* {filtered.length === 0 && (
                <div className="col-span-full rounded-3xl border border-white/60 bg-white/90 p-8 text-center font-comic text-slate-600 shadow-md">
                  No activities match your filters. Try changing the type or
                  value.
                </div>
              )} */}
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
