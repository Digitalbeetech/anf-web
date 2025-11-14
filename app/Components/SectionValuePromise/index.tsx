import Image from "next/image";

const SectionValuePromise = () => {
  const valuePromises = [
    {
      image: "/assets/value-promise-1.png",
      text: "Engaging first, educational always. Stories and play loops designed for attention, retention, and reflection.",
      bgColor: "bg-[#ffe649]",
    },
    {
      image: "/assets/value-promise-2.png",
      text: "Age-appropriate. Clear guidance for toddlers, young kids and pre-teens.",
      bgColor: "bg-[#9acb4e]",
    },
    {
      image: "/assets/value-promise-3.png",
      text: "Screen-smart. Play, read or watch on iOS, Android, or the web — with privacy-respecting defaults.",
      bgColor: "bg-[#8dc0ff]",
    },
    {
      image: "/assets/value-promise-4.png",
      text: "Teacher-ready. Discussion prompts and lesson ideas included.",
      bgColor: "bg-[#ff6d3a]",
    },
  ];

  return (
    <>
      <div className="bg-[#e8f7fc] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-5xl md:text-6xl inline-block text-center">
          <span
            className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Value
          </span>{" "}
          <span
            className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Promise
          </span>
        </h1>

        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          A joyful universe where children learn through Islamic values and
          everyday adventures.
        </p>
        <span className="mt-2 block text-2xl font-semibold font-comic">
          Why families love it:
        </span>
        <div className="mt-3 w-full h-[1550px] sm:h-[500px] md:h-[1070px] lg:h-[600px] bg-[url('/assets/clouds.svg')] bg-size-[1400px_auto] bg-repeat-x bg-position-[50%_30%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mt-30 px-4">
              {valuePromises.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} ${
                    index % 2 === 0 ? "mt-0 sm:-mt-6" : "mt-6 sm:mt-12"
                  } relative shadow-lg overflow-visible flex flex-col rounded-2xl`}
                >
                  <div className="flex justify-center -mt-10">
                    <Image
                      src={item.image}
                      alt={`Value Promise ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-auto h-56 sm:h-36 md:h-80 object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="bg-white p-5 pt-10 text-center flex-1 rounded-b-2xl">
                    <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-comic font-bold">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionValuePromise;
