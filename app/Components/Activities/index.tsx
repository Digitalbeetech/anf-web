import { activityData } from "@/utils/activity";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <>
      <div className="flex flex-col px-4 py-8 h-full relative">
        <h1 className="text-center text-6xl font-black leading-tight font-grobold">
          <span className="inline-block mx-3">
            <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
              Activities &
            </span>
          </span>
          <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
            Get Printables
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Coloring pages, mazes, and classroom‑ready worksheets — perfect for
          home or school.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4">
          <div className="absolute left-10 lg:-top-14 xl:-top-5 hidden lg:flex">
            <img
              src="/assets/plane-2.png"
              className="w-40 md:w-24 lg:w-30 xl:w-50 2xl:w-60"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {activityData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden 
               flex flex-col h-full "
              >
                {/* Image on Top */}
                <div className="w-full h-64 sm:h-72 lg:h-60">
                  <Image
                    src={item.cover_photo_box}
                    alt={item.title || "Watch & Learn"}
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* White Card Below - All Content Aligned */}
                <div className="p-6 sm:p-6 flex flex-col flex-1 bg-white space-y-5">
                  {/* Title */}
                  <p className="text-gray-800 text-xl font-grobold text-start leading-tight">
                    {item.title}
                  </p>

                  <p className="text-gray-800 text-lg font-bold font-comic text-start leading-tight">
                    {item.tagline}
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
                  <Link href={`/activities/${item?.slug}`}>
                    <button
                      className="mt-auto w-full bg-[#8ed7b2] text-white font-grobold text-lg py-3 rounded-full shadow-lg 
                         flex items-center justify-center gap-2 cursor-pointer"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href={"activities"} className="flex justify-center">
          <button className="bg-[#5ecaff] text-white px-6 py-2.5 rounded-full transition font-comic cursor-pointer">
            Get Printables
          </button>
        </Link>
      </div>
    </>
  );
};

export default Activities;
