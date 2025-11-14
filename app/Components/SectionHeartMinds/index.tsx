import Image from "next/image";

const SectionHeartMinds = () => {
  const heartMinds = [
    {
      image: "/assets/books.png",
      title: "Books",
text: "Fact-bases stories with Qur'an/Hadith/Seerah references waven in.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/game.png",
      title: "Games",
text: "Web-payable,with App Store / Play links; each title lists learning outcomes and values.",
      bgColor: "bg-[#8dc0ff]",
    },
    {
      image: "/assets/video.png",
      title: "Videos",
      text: "Short, safe and purposeful; autoplay off by default .",
      bgColor: "bg-[#ff6d3a]",
    },
    {
      image: "/assets/activity.png",
      title: "Activities",
      text: "Printable packs—coloring, mazes, badges, worksheets.",
      bgColor: "bg-[#f9be49]",
    },
     {
      image: "/assets/activity.png",
      title: "Membership",
      text: "Printable packs—coloring, mazes, badges, worksheets.",
      bgColor: "bg-[#90D8B2]",
    },
  ];
  return (
    <>
      <div className="bg-[#e8f7fc] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-5xl md:text-6xl inline-block text-center">
          <span
            className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Made for Hearts
          </span>{" "}
          <span
            className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            and Minds
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic w-2/3">
          From read-alouds to hands-on practice, every format nurtures Islamic
          values. Choose what fits your moment—at home, in class, or on the go.
        </p>
        <div className="max-w-7xl mx-auto mt-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-4 mt-12">
            {heartMinds.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-2xl p-6 shadow-lg flex flex-col items-center text-center overflow-visible relative`}
              >
                {/* Image – Pops out from top */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-28 h-28 md:w-48 md:h-32 object-cover drop-shadow-lg"
                  />
                </div>

                {/* Content Area – Starts below image */}
                <div className="mt-16 w-full">
                  <h3 className="text-white font-grobold text-xl sm:text-3xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black text-sm sm:text-lg font-medium leading-relaxed font-comic">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-transparent">
        <img
          src="/assets/heart-mind-bg.png"
          className="w-full h-auto object-cover"
          alt="Cloud"
        />
      </div>
    </>
  );
};

export default SectionHeartMinds;
