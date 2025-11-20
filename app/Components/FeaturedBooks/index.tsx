import { booksData } from "@/utils/constants";
import Link from "next/link";

const FeaturedBooks = () => {
  return (
    <>
      <div className="flex flex-col px-4 py-8 relative">
        <h1 className="text-center text-6xl font-black leading-tight font-grobold">
          <span className="inline-block mx-3">
            <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
              Featured
            </span>
          </span>
          <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
            Books
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Start with a story. Explore faith‑rooted adventures that spark
          questions and kindness.
        </p>
        <div className="max-w-[1600px] mx-auto mt-8 px-4 sm:px-6 lg:px-8 relative">
          <div className="md:flex hidden absolute -left-28 bottom-0">
            <img src="assets/cloud-1.png" className="w-20" />
          </div>
          <div className="md:flex hidden absolute -right-18 -top-26">
            <img src="assets/ballon.png" className="w-40" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-28 lg:gap-8 mt-16">
            {booksData?.slice(0, 4)?.map((book, index) => (
              <Link
                href={`books/${book?.slug}`}
                key={index}
                className="relative w-full flex flex-col"
              >
                {/* Book Image */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 md:-top-12 z-10">
                  <img
                    src={book.featuredImage}
                    alt={book.title}
                    className="w-56 sm:w-72 md:w-80 lg:w-136 xl:w-[20rem] h-auto object-contain drop-shadow-lg max-w-none -mt-6"
                  />
                </div>
                <div className="bg-white mt-24 sm:mt-32 rounded-3xl rounded-br-[44px] px-4 sm:px-6 pt-20 sm:pt-18 pb-4 h-full flex flex-col justify-between">
                  {/* Top content */}
                  <div>
                    <h2 className="text-xl sm:text-2xl text-black font-grobold text-start">
                      {book.title}
                    </h2>
                    <p className="text-black text-sm sm:text-md mt-3 mb-3 font-comic leading-relaxed">
                      {book.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 font-comic font-semibold">
                      <button className="border px-3 text-sm rounded-3xl">
                        Sidq
                      </button>
                      <button className="border px-3 text-sm rounded-3xl">
                        {book.age_group}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 font-comic font-semibold">
                      <button className="border border-[#E8F8EE] bg-[#E8F8EE] px-3 py-1 text-sm rounded-3xl">
                        Simple
                      </button>
                      <button className="border border-[#FDF3D9] bg-[#FDF3D9] px-3 py-1 white-space-nowrap text-sm rounded-3xl">
                        Full in Box set
                      </button>
                    </div>
                  </div>

                  {/* Bottom button */}
                  <Link
                    href={`books/${book?.slug}`}
                    className="flex justify-center mt-4"
                  >
                    <button className="bg-[#0084d1] w-full py-3 rounded-full text-white font-grobold cursor-pointer">
                      View Book
                    </button>
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link href={`/books`} className="flex justify-center">
        <button className="bg-[#FF625C] text-white px-6 py-2.5 rounded-full transition font-comic cursor-pointer">
          See all Books
        </button>
      </Link>
    </>
  );
};

export default FeaturedBooks;
