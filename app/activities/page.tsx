"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import { activityData } from "@/utils/activity";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import StickyHeader from "../Components/StickyHeader/page";
import Image from "next/image";

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
      href={`/activities/${activity?.slug}`}
      className="bg-white rounded-3xl shadow-xl overflow-hidden 
               flex flex-col h-full "
    >
      {/* Image on Top */}
      <div className="w-full h-64 sm:h-72 lg:h-60">
        <Image
          src={activity.cover_photo_box}
          alt={activity.title || "Watch & Learn"}
          width={800}
          height={800}
          className="w-full h-full object-contain"
        />
      </div>

      {/* White Card Below - All Content Aligned */}
      <div className="p-6 sm:p-6 flex flex-col flex-1 bg-white space-y-5">
        {/* Title */}
        <p className="text-gray-800 text-xl font-grobold text-start leading-tight">
          {activity.title}
        </p>

        <p className="text-gray-800 text-lg font-bold font-comic text-start leading-tight">
          {activity.tagline}
        </p>

        {/* Colorful Tags - Left Aligned (Not Centered) */}
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border text-sm font-comic font-bold rounded-full">
            Sidq
          </span>
          <span className="px-4 py-2 border text-sm font-comic font-bold rounded-full">
            Rahmah
          </span>
          <span className="px-4 py-2 border text-sm font-comic font-bold rounded-full">
            Free
          </span>
        </div>

        {user?.premiumSubscription ? (
          <div className="mt-auto pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDownload(activity?.File);
              }}
              className="mt-auto w-full bg-[#8ed7b2] text-white font-grobold text-lg py-3 rounded-full shadow-lg 
                         flex items-center justify-center gap-2 cursor-pointer"
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
              <option
                value=""
                disabled
                className="text-black bg-white font-comic"
              >
                Join to Download PDF
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
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[605px] bg-[url('/assets/banner-activities.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
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
              <p className="mt-3 font-comic text-xl text-center max-w-[50%] mx-auto">
                Color, solve, reflect and create—simple activities that turn
                stories into everyday habits.
              </p>
            </div>
          </section>
        </div>
        {/* Hero */}

        {/* Filters */}
        <section className="top-0 z-10 bg-[#EAF7FF] backdrop-blur -mt-2">
          <div className="mx-auto max-w-[1350px] px-4 py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
            </div>
          </div>
        </section>

        {/* Activities Grid */}
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
