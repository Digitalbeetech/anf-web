import { Gamepad2 } from "lucide-react";
import Image from "next/image";

const FeaturedGames = () => {
  const featuredGames = [
    {
      image: "/assets/game-1.png",
    },
    {
      image: "/assets/game-2.png",
    },
    {
      image: "/assets/game-3.png",
    },
  ];
  return (
    <>
      <div className="bg-[#9f69b4] flex flex-col px-4 py-8 relative h-full">
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
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic text-white">
          Learn by playing — reflexes, problem‑solving, empathy, and Adab.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {featuredGames?.map((item, index) => (
              <div key={index} className="relative group w-full">
                {/* Game Image */}
                <Image
                  src={item?.image}
                  alt={"Game Image"}
                  width={600}
                  height={200}
                  className="object-cover rounded-lg w-full h-auto"
                />

                {/* Centered Gamepad Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2
                    size={48}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm sm:text-2xl text-center font-comic text-white">
            Just released: Road Cross (September 2025)
          </p>
          <p className="mt-3 text-sm sm:text-2xl text-center font-comic text-white">
            Coming next: Mosque Jam & Relief Packages (October 2025) · Save from
            Bees (November 2025)
          </p>
        </div>
        <div className="absolute bottom-13 left-1/2 z-10 -translate-x-1/2">
          <button className="bg-[#f9be49] text-white px-6 py-2.5 rounded-full transition font-comic">
            See all Games
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full mt-8">
          <img src="/assets/bottom-orange.svg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default FeaturedGames;
