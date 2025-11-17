import { Gamepad2 } from "lucide-react";
import Image from "next/image";

const FeaturedGames = () => {
  const featuredGames = [
    {
      image: "/assets/game-1.png",
      title: "Abdullah & Fatima Adventures",
      description:
        "Explore, help and learn across connected quests inspired by everyday Muslim life.",
    },
    {
      image: "/assets/game-2.png",
      title: "Abdullah & Fatima Adventures",
      description:
        "Explore, help and learn across connected quests inspired by everyday Muslim life.",
    },
    {
      image: "/assets/game-3.png",
      title: "Abdullah & Fatima Adventures",
      description:
        "Explore, help and learn across connected quests inspired by everyday Muslim life.",
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {featuredGames?.map((item, index) => (
              <div
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

                  {/* Gamepad Icon Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 
                      group-hover:bg-black/50 transition-all duration-300"
                  >
                    <Gamepad2
                      size={64}
                      className="text-white/70 group-hover:text-white 
                     group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl text-gray-900 font-grobold">
                    {item?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-comic">
                    {item?.description ||
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
                  <div className="pt-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
                      {/* Play On Web Button - always full width */}
                      <button className="w-full bg-[#0084d1] hover:bg-[#006bb3] text-white font-grobold px-8 py-3 rounded-full transition-colors duration-300">
                        Play On Web
                      </button>

                      {/* Apple + Android Icons */}
                      <div className="flex flex-row gap-2 mt-3 sm:mt-0">
                        {/* Apple */}
                        <button className="bg-gray-400 rounded-full px-2 flex items-center justify-center transition-all duration-300">
                          <img
                            src="/assets/apple-icon.png"
                            alt="Download on App Store"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                          />
                        </button>

                        {/* Android */}
                        <button className="bg-[#a4c639] rounded-full px-2 flex items-center justify-center transition-all duration-300">
                          <img
                            src="/assets/android-icon.png"
                            alt="Get it on Google Play"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <div className="flex justify-center">
          <button className="bg-[#f9be49] text-white px-6 py-2.5 rounded-full transition font-comic">
            See all Games
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedGames;
