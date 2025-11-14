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
  ];
  return (
    <>
      <div className="bg-[#ff6d3a] flex flex-col px-4 py-8 h-full relative">
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
            Printables
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic text-white">
          Coloring pages, mazes, and classroom‑ready worksheets — perfect for
          home or school.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
          <div className="absolute -left-14 bottom-44 hidden lg:flex">
            <img src="/assets/activity-side.png" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pb-8">
            {watchLearn.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-3xl rounded-bl-[50px] shadow-lg overflow-hidden flex flex-col items-center`}
              >
                {/* Image with padding */}
                <div className="p-3 w-full bg-white">
                  <div className="overflow-hidden rounded-2xl w-full h-80">
                    <Image
                      src={item.image}
                      alt={item.text || "Card Image"}
                      width={800}
                      height={320}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Text */}
                <p className="text-white text-xl font-semibold font-comic text-center p-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <img src="/assets/bg-footer.png" /> */}
    </>
  );
};

export default Activities;
