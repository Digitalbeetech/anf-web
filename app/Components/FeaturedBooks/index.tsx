import { ArrowRight } from "lucide-react";
import React from "react";

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      image: "/assets/book-1.png",
      title: "The Day We Almost Missed Salah",
      text: "A gentle reminder about time, focus, and Salah as a priority.",
      values: "Sabr, Amanah",
      age: "5–9",
      bgColor: "bg-[#8ed7b2]",
    },
    {
      image: "/assets/book-2.png",
      title: "Fatima’s First Fast",
      text: "Managing energy, empathy at home, and the joy of Suhoor & Iftar.",
      values: "Sabr, Shukr",
      age: "5–9",
      bgColor: "bg-[#f9be49]",
    },
    {
      image: "/assets/books-3.png",
      title: "Abdullah’s Angry Day",
      text: "Naming feelings, pausing with A‘ūdhu billāh, and choosing better actions.",
      values: "Rahmah, Adab",
      age: "5–9",
      bgColor: "bg-[#729eef]",
    },
    {
      image: "/assets/book-4.png",
      title: "The Masjid Race",
      text: "A gentle reminder about time, focus, and Salah as a priority.",
      values: "Sabr, Shukr",
      age: "5–9",
      bgColor: "bg-[#ff6d3a]",
    },
  ];
  return (
    <>
      <div className="bg-[#c7e560] flex flex-col px-4 py-8 relative">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold inline-block text-center">
          <span
            className="text-[#f9be49] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Featured
          </span>{" "}
          <span
            className="text-[#9acb4e] [text-shadow:0_2px_0_#fff,0_4px_0_#ccc,0_6px_0_#aaa,0_8px_0_#999,0_0_10px_rgba(0,0,0,0.1)] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
            style={{
              WebkitTextStroke: "2px white",
              paintOrder: "stroke fill",
            }}
          >
            Books
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Start with a story. Explore faith‑rooted adventures that spark
          questions and kindness.
        </p>
        <div className="max-w-[1600px] mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute -left-48 bottom-36 hidden lg:flex">
            <img src="/assets/featured-side.png" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-28 lg:gap-8 mt-14">
            {featuredBooks.map((book, index) => (
              <div
                key={index}
                className={`${book.bgColor} relative w-full rounded-3xl shadow-lg pt-40 sm:pt-48 pb-14 px-4 sm:px-6 flex flex-col items-center text-start`}
              >
                {/* Book Image */}
                <div className="absolute -top-16 sm:-top-18 flex justify-center w-full">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl text-start w-full font-semibold text-white mt-16 font-comic">
                  {book.title}
                </h2>

                {/* Description */}
                <p className="text-white text-sm sm:text-md mt-3 mb-6 font-comic leading-relaxed">
                  {book.text}
                </p>

                {/* Divider */}
                <div className="border-t border-white w-full mb-4" />

                {/* Values & Age */}
                <div className="text-white text-sm sm:text-md space-y-1 w-full mt-2 px-1 sm:px-2 text-start">
                  <p className="font-comic">
                    <span className="font-semibold">Values:</span> {book.values}
                  </p>
                  <p className="font-comic">
                    <span className="font-semibold">Age:</span> {book.age}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="absolute -bottom-6 sm:-bottom-6 bg-white w-10 sm:w-16 h-10 sm:h-16 rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight
                    className="text-[#8dc0ff]"
                    size={40}
                    strokeWidth={3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 pt-2 -translate-x-1/2">
        <button className="bg-[#ff6d3a] text-white px-6 py-2.5 rounded-full transition font-comic">
          Browse Videos
        </button>
      </div>

      <div className="w-full">
        <img src="/assets/bottom-purple.svg" className="w-full" />
      </div>
    </>
  );
};

export default FeaturedBooks;
