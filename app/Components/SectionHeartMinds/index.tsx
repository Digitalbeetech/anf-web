import Image from "next/image";

const SectionHeartMinds = () => {
  const heartMinds = [
    {
      image: "/assets/books.png",
      title: "Books",
      text: "Values-first stories with gentle Qur’an and Hadith links for read-alouds everywhere. Includes age cues and discussion prompts to build daily habits together.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/game.png",
      title: "Games",
      text: "Quick web, iOS, and Android mini-games that practice patience and focus. Nickname-only leaderboards and parental gates keep play safe while learning skills.",
      bgColor: "bg-[#8dc0ff]",
    },
    {
      image: "/assets/video.png",
      title: "Videos",
      text: "Short, kid-safe episodes with captions and reflection prompts for families everywhere. Designed to spark conversation and reinforce values in screen-smart doses daily.",
      bgColor: "bg-[#ff6d3a]",
    },
    {
      image: "/assets/activity.png",
      title: "Activities",
      text: "Printable packs—coloring, mazes, worksheets—that turn lessons into action at home and. Low-ink designs with step-by-step tips for classroom or home use daily.",
      bgColor: "bg-[#f9be49]",
    },
  ];
  return (
    <>
      <div className="bg-[#e8f7fc] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold inline-block text-center">
          <span
            className="text-[#f9be49] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Made for Hearts
          </span>{" "}
          <span
            className="text-[#9acb4e] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            and Minds
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic line-clamp-2 w-2/3">
          From read-alouds to hands-on practice, every format nurtures Islamic
          values. Choose what fits your moment—at home, in class, or on the go.
        </p>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mt-12">
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
                    width={200}
                    height={200}
                    className="w-28 h-28 sm:w-74 sm:h-32 object-contain drop-shadow-lg"
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
      <div className="w-full">
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
