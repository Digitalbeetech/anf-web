"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import StickyHeader from "@/app/Components/StickyHeader/page";
import { GAMES } from "@/utils/data";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { X } from "lucide-react";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-white/80 px-2.5 py-0.5 text-xs font-comic text-slate-800 shadow-sm ring-1 ring-white/60">
    {children}
  </span>
);

const GameDetailPage: React.FC = () => {
  const { slug } = useParams();
  const user = useSelector((state: RootState) => state.api.user);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [gameDetail, setGameDetail] = useState<any>("");

  useEffect(() => {
    if (GAMES && slug) {
      const findBook = GAMES.find((item: any) => item.slug === slug);
      setGameDetail(findBook);
    }
  }, [GAMES, slug]);
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
                  Abdullah &amp; Fatima • Game
                </span>

                <h1 className="mt-4 text-3xl md:text-4xl font-grobold text-slate-900 drop-shadow-sm">
                  {gameDetail?.title}
                </h1>

                <p className="mt-2 text-sm font-grobold uppercase tracking-wide text-sky-700">
                  Story &amp; Mini-quests
                </p>

                <p className="mt-3 font-comic text-slate-700/90">
                  {gameDetail?.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {gameDetail?.values?.map((item: any) => (
                    <Badge>{item}</Badge>
                  ))}
                  <Badge>Age {gameDetail?.age}</Badge>
                  <Badge>Story Adventure</Badge>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-comic text-slate-700/90">
                  <span>Story &amp; Mini-quests</span>
                  <span>•</span>
                  <span>Web</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="pt-2 w-full mb-4">
                    {user?.premiumSubscription || gameDetail?.free ? (
                      <button
                        className="inline-flex cursor-pointer mt-4 items-center justify-center rounded-full bg-sky-600 px-4 py-3.5 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedGame(gameDetail);
                        }}
                      >
                        Play Now
                      </button>
                    ) : (
                      <div className="mt-3 flex flex-row flex-wrap items-center gap-3">
                        <div className="">
                          {gameDetail?.platforms?.includes("Web") && (
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedGame(gameDetail);
                              }}
                              className="inline-flex cursor-pointer w-full items-center justify-center rounded-full bg-sky-600 px-4 py-3.5 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
                            >
                              Play Demo
                            </div>
                          )}
                        </div>
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

                                const res = await fetch(
                                  "/api/create-subscription",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ priceId }),
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
                              Join to Play Full Game
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
                      </div>
                    )}
                  </div>

                  {/* <div className="flex flex-wrap gap-2">
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
                  </div> */}
                </div>
              </div>

              {/* Gameplay mock card */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md rounded-[1.75rem] border border-white/80 bg-slate-900 shadow-xl shadow-sky-200">
                  <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-sky-300 via-sky-500 to-purple-500 h-70">
                    <img
                      src={gameDetail?.thumbUrl}
                      alt="Game Thumbnail"
                      className="w-full h-full object-fill"
                    />
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
                <p className="font-comic mt-4">{gameDetail?.how_to_play}</p>
              </div>

              <div>
                <h2 className="text-xl font-grobold text-slate-900">
                  Learning notes
                </h2>
                <p className="font-comic mt-4">{gameDetail?.learning_notes}</p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-grobold text-slate-900">
                For parents &amp; teachers
              </h3>
              <p className="font-comic mt-4">
                {gameDetail?.for_parents_teachers}
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelectedGame(null)}
            className="absolute top-4 cursor-pointer right-4 z-50 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
            aria-label="Close Game"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Game Iframe */}
          <iframe
            src={
              user && user?.premiumSubscription
                ? selectedGame?.premiumUrl
                : selectedGame.url
            }
            title={selectedGame.title}
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
          />
        </div>
      )}
    </>
  );
};

export default GameDetailPage;
