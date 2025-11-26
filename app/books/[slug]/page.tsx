"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { booksData } from "@/utils/constants";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";
import HTMLFlipBook from "react-pageflip";
import StickyHeader from "@/app/Components/StickyHeader/page";
import { useModal } from "@/context/ModalContext";

export default function BookDetailPage() {
  const user = useSelector((state: RootState) => state.api.user);
  const imageURL = process.env.NEXT_PUBLIC_IMAGEURL;
  const book = useRef<any>(null);
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const cancel = searchParams.get("cancel");
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

  const [activeTab, setActiveTab] = useState<
    | "Overview"
    | "Learning Notes"
    | "Islamic References"
    | "For Parents & Teachers"
  >("Overview");

  const { slug } = useParams();
  const [bookDetail, setBookDetail] = useState<any>("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (booksData && slug) {
      const findBook = booksData.find((item: any) => item.slug === slug);
      setBookDetail(findBook);
    }
  }, [booksData, slug]);

  function useWindowSize() {
    const [width, setWidth] = useState(0); // start with 0 (no window yet)

    useEffect(() => {
      // ✅ run only in browser
      const handleResize = () => setWidth(window.innerWidth);

      handleResize(); // set initial width
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }

  const width = useWindowSize();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <StickyHeader />
        </div>
        {/* Hero with card */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60 pt-24">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-comic text-sky-700 shadow-sm ring-1 ring-white/60">
                  Abdullah &amp; Fatima • Picture Book
                </span>
                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  {bookDetail?.title}
                </h1>
                <p className="mt-3 font-comic text-slate-700/90">
                  {bookDetail?.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#FFEAA0] px-2.5 py-0.5 text-xs font-comic text-slate-900 shadow-sm ring-1 ring-amber-200">
                    Age {bookDetail?.age_group}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`${bookDetail?.product_url}`}
                    className="inline-flex items-center justify-center rounded-2xl cursor-pointer bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    Buy print edition
                  </Link>
                  <a
                    href="#sample"
                    className="inline-flex items-center justify-center rounded-2xl border border-sky-500 bg-white/80 px-5 py-2.5 text-sm font-grobold text-sky-700 shadow-sm hover:bg-sky-50"
                  >
                    Read sample pages
                  </a>
                  {user?.premiumSubscription ? (
                    <button
                      className="inline-flex items-center justify-center rounded-2xl cursor-pointer bg-sky-600 px-5 py-2.5 text-sm font-grobold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      onClick={() => setModalOpen(true)}
                    >
                      Read Book
                    </button>
                  ) : (
                    <div className="relative">
                      <select
                        className="appearance-none bg-sky-600 text-white px-5 py-2.5 rounded-2xl text-sm font-grobold shadow-sm cursor-pointer hover:bg-sky-700 focus:outline-none pr-10"
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

                            const res = await fetch(
                              "/api/create-subscription",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ priceId, previousPage }),
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
                          Join to Read Book
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

              <div className="flex justify-center">
                <div className="relative rounded-3xl border border-white/70 bg-white/90 shadow-xl shadow-sky-100">
                  {/* Background Gradient */}
                  <div className="absolute inset-3 rounded-2xl bg-linear-to-br from-sky-300 via-sky-500 to-purple-500" />

                  {/* Image Container */}
                  <div className="relative rounded-2xl bg-white/90 flex items-center justify-center shadow-2xl">
                    {bookDetail.cover_image ? (
                      <img
                        src={bookDetail.cover_image}
                        alt={`${bookDetail.title} cover`}
                        className="h-full w-full object-contain rounded-2xl"
                      />
                    ) : (
                      <div className="font-comic text-slate-500">
                        Book Cover
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {modalOpen && (
          <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md">
            <div className="mx-auto flex flex-col gap-2 px-4 py-3 md:px-8">
              {/* Bottom Row — Author & Publisher */}
              <div className="flex justify-between items-center z-[999]">
                <p className="text-xl sm:text-2xl md:text-3xl uppercase text-white truncate max-w-[80%] font-grobold">
                  {bookDetail?.title}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-white text-2xl md:text-3xl font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="fixed inset-0 z-50 bg-black flex flex-col items-start p-4">
                <div className="flex justify-center w-full flex-1 pt-20">
                  <div className="w-full">
                    <HTMLFlipBook
                      width={2400}
                      height={1250}
                      size="stretch"
                      minWidth={950}
                      maxWidth={2400}
                      minHeight={700}
                      maxHeight={1250}
                      ref={book}
                      usePortrait={true}
                      showPageCorners={false}
                      showCover={false}
                      mobileScrollSupport={true}
                      drawShadow={width < 600 ? false : true}
                      // swipeDistance={width < 600 ? 10 : 30}
                      className="shadow-2xl rounded-0 md:rounded-xl w-full h-full"
                    >
                      {(bookDetail?.pages).map((page: any, index: any) => (
                        <div
                          key={index}
                          className="w-full h-full flex justify-center no-hover pb-8 rounded-0 md:rounded-lg"
                        >
                          <img
                            src={imageURL + page.page}
                            alt={`Page ${index + 1}`}
                            style={{
                              width:
                                width < 425
                                  ? "38%"
                                  : width < 450
                                  ? "42%"
                                  : width < 500
                                  ? "49%"
                                  : width < 550
                                  ? "60%"
                                  : width < 600
                                  ? "65%"
                                  : width < 650
                                  ? "70%"
                                  : width < 700
                                  ? "74%"
                                  : width < 750
                                  ? "80%"
                                  : width < 770
                                  ? "78%"
                                  : "100%",
                              objectFit: "contain",
                              // paddingRight: width < 750 ? "80px" : "0",
                              borderRadius: "20px",
                            }}
                            className="w-full h-auto max-h-[85vh] object-contain"
                          />
                        </div>
                      ))}
                    </HTMLFlipBook>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <section className="border-b border-white/60 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-4">
            <nav className="flex flex-wrap gap-2 rounded-2xl bg-sky-50/70 p-1 ring-1 ring-sky-100">
              {[
                "Overview",
                "Learning Notes",
                "Islamic References",
                "For Parents & Teachers",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(
                      tab as
                        | "Overview"
                        | "Learning Notes"
                        | "Islamic References"
                        | "For Parents & Teachers"
                    )
                  }
                  className={`flex-1 rounded-xl px-4 py-2 text-xs sm:text-sm font-grobold transition-all ${
                    activeTab === tab
                      ? "bg-sky-600 text-white shadow-sm"
                      : "text-sky-800 hover:bg-sky-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="mt-5 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100">
              {activeTab === "Overview" && (
                <div>
                  <h2 className="text-xl font-grobold text-slate-900">
                    Story overview
                  </h2>
                  <p className="mt-2 font-comic text-slate-700/90">
                    {bookDetail?.overview}
                  </p>
                </div>
              )}

              {activeTab === "Learning Notes" && (
                <div>
                  <h2 className="text-xl font-grobold text-slate-900">
                    Learning notes
                  </h2>
                  <p className="mt-2 font-comic text-slate-700/90">
                    {bookDetail?.learning_notes}
                  </p>
                </div>
              )}

              {activeTab === "For Parents & Teachers" && (
                <div>
                  <h2 className="text-xl font-grobold text-slate-900">
                    For parents &amp; teachers
                  </h2>
                  <p className="mt-2 font-comic text-slate-700/90">
                    {bookDetail?.for_parents_teachers}
                  </p>
                </div>
              )}

              {activeTab === "Islamic References" && (
                <div>
                  <h2 className="text-xl font-grobold text-slate-900">
                    Islamic references
                  </h2>
                  <p className="mt-2 font-comic text-slate-700/90">
                    {bookDetail?.islamic_references}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sample pages & learning columns */}
        <section
          id="sample"
          className="border-b border-white/60 bg-[#EAF7FF] py-12"
        >
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-grobold text-slate-900 drop-shadow-sm">
              Peek inside
            </h2>
            <p className="mt-1 font-comic text-slate-700/90">
              A quick look at a few spreads from the book.
            </p>
            {/* <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {bookDetail?.samplePages.map((p, i) => (
                <div
                  key={i}
                  className="aspect-3/4 rounded-2xl border border-white/80 bg-white/90 bg-[radial-gradient(circle_at_top,#FFEAA0,transparent_60%)] grid place-items-center font-comic text-slate-600 shadow-md"
                >
                  {p}
                </div>
              ))}
            </div> */}

            {/* <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-grobold text-slate-900">
                  Learning notes
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  {bookDetail?.learningNotes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-grobold text-slate-900">
                  For parents &amp; teachers
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 font-comic text-slate-700/90">
                  {bookDetail?.parentTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </section>

        {/* Related items with hills footer */}
        <section className="relative pb-0 pt-10">
          <div className="mx-auto max-w-6xl px-4 pb-12">
            <h3 className="text-xl font-grobold text-slate-900">
              Explore more from Abdullah &amp; Fatima
            </h3>
            <p className="mt-1 font-comic text-slate-700/90">
              Connect this story with other books, games, and activities.
            </p>
            {/* <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {bookDetail?.related.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="rounded-2xl bg-white/90 p-6 text-center font-comic font-medium text-sky-700 shadow-sm ring-1 ring-slate-100 transition hover:bg-sky-50 hover:shadow-md"
                >
                  {r.label}
                </Link>
              ))}
            </div> */}
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
}
