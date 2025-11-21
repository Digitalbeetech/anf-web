"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { activityData } from "@/utils/activity";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";
import StickyHeader from "@/app/Components/StickyHeader/page";
import { useModal } from "@/context/ModalContext";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams();
  const pathname = usePathname();
  const [activity, setActivity] = useState<any>("");
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const cancel = searchParams.get("cancel");
  const user = useSelector((state: RootState) => state.api.user);

  useEffect(() => {
    if (activityData && slug) {
      const findBook = activityData.find((item: any) => item.slug === slug);
      setActivity(findBook);
    }
  }, [activityData, slug]);

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
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        {/* HERO */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60 pt-24">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-comic text-sky-700 shadow-sm ring-1 ring-white/60">
                  Abdullah &amp; Fatima • Activity
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  {activity.title}
                </h1>

                <p className="mt-3 font-comic text-slate-700/90">
                  {activity.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>Worksheet</Tag>
                  <Tag>Sabr</Tag>
                  <Tag>Amanah</Tag>
                  <Tag>Age 5–7 · 8–12</Tag>
                  <Tag>1-page printable (A4)</Tag>
                  <Tag>PDF · 0.5 MB</Tag>
                </div>

                {user?.premiumSubscription ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleDownload(activity?.File)}
                      className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700"
                    >
                      Download
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      className="appearance-none mt-4 bg-sky-600 text-white px-5 py-2.5 rounded-2xl text-sm font-grobold shadow-sm cursor-pointer hover:bg-sky-700 focus:outline-none pr-10"
                      defaultValue=""
                      onChange={async (e) => {
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
                      <option value="" disabled className="text-black bg-white font-comic">
                        Join to Download PDF
                      </option>

                      <option value="monthly" className="text-black bg-white font-comic">
                        Monthly – £3.99
                      </option>

                      <option value="annual" className="text-black bg-white font-comic">
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

              {/* PREVIEW MOCK */}
              <div className="flex justify-center">
                <div className="relative h-72 w-52 rounded-3xl border border-white/80 bg-white/95 shadow-xl shadow-sky-200">
                  {/* Inner dashed border box */}
                  <div className="absolute inset-3 rounded-2xl border border-dashed" />

                  {/* Image perfectly centered */}
                  <img
                    src={activity?.cover_photo_detail}
                    alt=""
                    className="absolute inset-0 m-auto w-44 h-auto object-contain z-10"
                  />
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
                <p className="font-comic mt-2">
                  {activity?.ways_to_use_activity}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Skills practised
                </h2>
                <p className="font-comic mt-2">{activity?.skills_practiced}</p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <p className="font-comic mt-2">
                {activity?.for_parents_teachers}
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

export default ActivityDetailPage;
