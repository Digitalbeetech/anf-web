"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import StickyHeader from "@/app/Components/StickyHeader/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import { VIDEOS } from "@/utils/videos";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const VideoDetailPage: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.api.user);
  const [videoDetail, setVideoDetail] = useState<any>("");

  useEffect(() => {
    if (VIDEOS && slug) {
      const findBook = VIDEOS.find((item: any) => item.slug === slug);
      setVideoDetail(findBook);
    }
  }, [VIDEOS, slug]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        {/* HERO */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60 pt-24">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              <div>
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-comic text-sky-700 shadow-sm ring-1 ring-white/60">
                  Abdullah &amp; Fatima • Episode
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  {videoDetail?.title}
                </h1>

                <p className="mt-3 font-comic text-slate-700/90">
                  {videoDetail?.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {videoDetail?.values?.map((item: any) => (
                    <Chip>{item}</Chip>
                  ))}
                  <Chip>{videoDetail?.age}</Chip>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {user?.premiumSubscription || videoDetail?.free ? (
                    <button
                      className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/video/${videoDetail?.slug}`);
                      }}
                    >
                      Watch now
                    </button>
                  ) : (
                    <div
                      className="relative"
                      onClick={(e) => e.preventDefault()}
                    >
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

                            const res = await fetch(
                              "/api/create-subscription",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  priceId,
                                  previousPage,
                                }),
                              }
                            );

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
                          Join to Watch Video
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
                </div>
              </div>

              {/* VIDEO MOCK */}
              <div className="flex justify-center h-90">
                <div className="relative w-full max-w-xl h-full rounded-3xl border  bg-slate-950 shadow-xl shadow-sky-200">
                  {/* Video container - 80% height */}
                  <div className="relative h-[95%] rounded-3xl m-2">
                    {/* Video thumbnail */}
                    <Image
                      src={videoDetail?.image}
                      alt={videoDetail?.title || "Video thumbnail"}
                      fill
                      className="object-fill rounded-3xl"
                    />

                    {/* Play button */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        (user?.premiumSubscription || videoDetail?.free) &&
                          router.push(`/video/${videoDetail?.slug}`);
                      }}
                    >
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-sky-600 text-3xl shadow-md cursor-pointer hover:scale-110 transition-transform">
                        ▶
                      </span>
                    </div>
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
                  {videoDetail?.Episode_summary}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Talking points
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  {videoDetail?.Talking_points?.map((item: any) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <p className="font-comic mt-4">
                {videoDetail?.for_parents_teachers}
              </p>
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
