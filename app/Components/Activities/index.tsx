import Image from "next/image";

const Activities = () => {
  const watchLearn = [
    {
      image: "/assets/activity-1.jpg",
      text: "Downloadable packs by Age and Value (Sabr, Shukr, Adab, Amanah, Rahmah…)",
      bgColor: "bg-[#8dc0ff]",
    },
    {
      image: "/assets/activity-2.jpg",
      text: "Teacher notes and “Try this at home” prompts",
      bgColor: "bg-[#f9be49]",
    },
    {
      image: "/assets/activity-2.jpg",
      text: "Teacher notes and “Try this at home” prompts",
      bgColor: "bg-[#f9be49]",
    },
  ];
  return (
    <>
      <div className="flex flex-col px-4 py-8 h-full relative">
        <h1 className="text-5xl sm:text-5xl md:text-6xl inline-block text-center">
          <span
            className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Activities &
          </span>{" "}
          <span
            className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Get Printables
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Coloring pages, mazes, and classroom‑ready worksheets — perfect for
          home or school.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4">
          <div className="absolute left-10 top-1 hidden lg:flex">
            <img src="/assets/plane-2.png" width={270} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {watchLearn.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden 
               flex flex-col h-full "
              >
                {/* Image on Top */}
                <div className="w-full h-64 sm:h-72 lg:h-72">
                  <Image
                    src={item.image}
                    alt={item.text || "Watch & Learn"}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* White Card Below - All Content Aligned */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 bg-white space-y-5">
                  {/* Title */}
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold font-comic text-start leading-tight">
                    {item.text}
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

                  {/* Watch Now Button - Full Width, Perfect Bottom Alignment */}
                  <button
                    className="mt-auto w-full bg-[#8ed7b2] text-white font-grobold text-lg py-4 rounded-full shadow-lg 
                         flex items-center justify-center gap-2"
                  >
                    View & download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#5ecaff] text-white px-6 py-2.5 rounded-full transition font-comic">
            Get Printables
          </button>
        </div>
      </div>
    </>
  );
};

export default Activities;
