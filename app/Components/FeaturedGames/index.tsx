"use client";
import { RootState } from "@/redux/rootReducer";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const FeaturedGames = () => {
  const user = useSelector((state: RootState) => state.api.user);
  const [selectedGame, setSelectedGame] = useState<any>(null);

  const games = [
    {
      id: "g1",
      slug: "abdullah-fatima-adventures",
      title: "Abdullah & Fatima Adventures",
      blurb:
        "Explore, help and learn across connected quests inspired by everyday Muslim life.",
      type: "Story",
      values: ["Sabr", "Adab", "Rahmah"],
      age: "5–12",
      mode: "Story & Mini-quests",
      thumbUrl: "/assets/game-img.png",
      platforms: ["Web", "iOS", "Android"],
      image: "/assets/game-1.png",
      url: "https://tourmaline-treacle-839185.netlify.app/",
      premiumUrl: "",
      free: true,
    },
    {
      id: "g2",
      slug: "the-run",
      title: "The Run",
      blurb:
        "Dash, dodge and make quick choices while keeping adab and safety in mind.",
      type: "Runner",
      values: ["Adab", "Amanah"],
      age: "8–12",
      mode: "Endless runner · Levels",
      image: "/assets/game-2.png",
      platforms: ["Web"],
      url: "https://starlit-dodol-9596c0.netlify.app/",
      premiumUrl: "https://verdant-cocada-8a5ac3.netlify.app/",
    },
    {
      id: "g3",
      slug: "road-cross",
      title: "The Escape",
      blurb:
        "Practice safe crossing, patience and awareness at a busy junction.",
      type: "Puzzle",
      values: ["Sabr", "Amanah"],
      age: "5–7",
      mode: "Level-based safety puzzles",
      image: "/assets/game-3.png",
      platforms: ["Web", "Android"],
      url: "https://fantastic-biscuit-f72cfd.netlify.app/",
      premiumUrl: "https://storied-pika-64151a.netlify.app/",
    },
    {
      id: "g3",
      slug: "road-cross",
      title: "Road Cross",
      blurb:
        "Practice safe crossing, patience and awareness at a busy junction.",
      type: "Puzzle",
      values: ["Sabr", "Amanah"],
      age: "5–7",
      image: "/assets/gamde-3.png",
      mode: "Level-based safety puzzles",
      platforms: ["Web", "Android"],
      url: "https://wonderful-rugelach-0d3354.netlify.app/",
      premiumUrl: "https://curious-kulfi-2ef0d8.netlify.app/",
    },
  ];
  return (
    <>
      <div className="flex flex-col px-4 py-8 relative h-full">
        <h1 className="text-5xl sm:text-5xl md:text-6xl inline-block text-center">
          <span
            className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Featured
          </span>{" "}
          <span
            className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Games
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Learn by playing — reflexes, problem‑solving, empathy, and Adab.
        </p>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 relative">
          <div className="md:flex hidden absolute -right-28 -top-38">
            <img src="assets/cloud-2.png" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {games?.slice(0, 3).map((item, index) => (
              <Link
                href={`/games/${item?.slug}`}
                key={index}
                className="relative group w-full bg-white rounded-2xl rounded-br-[44px] overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item?.image}
                    alt={item?.title || "Game"}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-8 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl text-gray-900 font-grobold">
                    {item?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-comic">
                    {item?.blurb ||
                      "An exciting and educational game for kids to learn Islamic values through play."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 font-comic font-semibold">
                    <button className="border px-3 text-sm rounded-3xl">
                      Sidq
                    </button>
                    <button className="border px-3 text-sm rounded-3xl">
                      5-9
                    </button>
                  </div>

                  {/* Play Button */}
                  <div className="pt-2 w-full">
                    {user?.premiumSubscription || item?.free ? (
                      <button
                        className="inline-flex w-full cursor-pointer mt-4 items-center justify-center rounded-full bg-sky-600 px-4 py-3.5 text-xs font-grobold text-white shadow-sm hover:bg-sky-700"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedGame(item);
                        }}
                      >
                        Play Now
                      </button>
                    ) : (
                      <div className="mt-3 flex flex-row flex-wrap items-center gap-3">
                        <div className="flex-1">
                          {item.platforms.includes("Web") && (
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedGame(item);
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
                              className="text-black bg-white"
                            >
                              Join to Play Full Game
                            </option>

                            <option
                              value="monthly"
                              className="text-black bg-white"
                            >
                              Monthly – £3.99
                            </option>

                            <option
                              value="annual"
                              className="text-black bg-white"
                            >
                              Annual – £39.99
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
                </div>
              </Link>
            ))}
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
          <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
            Just released:{" "}
            <span className="font-semibold"> Escape & Road Cross </span>
            (September 2025)
          </p>
          <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
            Coming next:{" "}
            <span className="font-semibold">Mosque Jam & Relief Packages</span>{" "}
            (October 2025) ·{" "}
            <span className="font-semibold"> Save from Bees </span> (November
            2025)
          </p>
        </div>
        <Link href={"/games"} className="flex justify-center">
          <button className="bg-[#f9be49] text-white px-6 py-2.5 rounded-full transition font-comic cursor-pointer">
            See all Games
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedGames;
