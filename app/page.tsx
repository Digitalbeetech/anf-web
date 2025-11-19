import Image from "next/image";
import Header from "./Components/Header";
import SectionValuePromise from "./Components/SectionValuePromise";
import SectionHeartMinds from "./Components/SectionHeartMinds";
import SectionWeTeach from "./Components/SectionWeTeach";
import FeaturedBooks from "./Components/FeaturedBooks";
import FeaturedGames from "./Components/FeaturedGames";
import WatchLearn from "./Components/WatchLearn";
import Activities from "./Components/Activities";
import Footer from "./Components/Footer";
import Link from "next/link";
import StickyHeader from "./Components/StickyHeader/page";

export default function Home() {
  return (
    <>
      <div className="bg-[#e8f7fc] relative overflow-hidden">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full">
          <StickyHeader />
        </div>
        <div className="bg-[#e8f7fc]">
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[800px] bg-[url('/assets/hero-section-bg.svg')] bg-cover bg-center bg-no-repeat">
            {/* <Header /> */}
            <div className="container mx-auto h-full pt-54 lg:pt-64">
              {/* Hero Section Images */}
              <div className="relative w-full h-full">
                {/* Image 1 */}
                <Link
                  href="/videos"
                  className="absolute group bottom-[48%] md:bottom-[35%] left-0 sm:left-0 md:left-1 lg:left-0 xl:left-22 2xl:left-48 horizontal-bounce"
                >
                  <Image
                    src="/assets/hero-sec-1.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto group-hover:hidden"
                  />
                  <Image
                    src="/assets/hero-sec-1-outline.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto hidden group-hover:block"
                  />
                </Link>

                {/* Image 2 */}
                <Link
                  href={"/activities"}
                  className="absolute group bottom-[64%] md:bottom-[48%] left-24 sm:left-44 md:left-48 lg:left-64 xl:left-[27%] 2xl:left-[30%] horizontal-bounce"
                >
                  <Image
                    src="/assets/hero-sec-2.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto group-hover:hidden"
                  />
                  <Image
                    src="/assets/hero-sec-2-outline.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto hidden group-hover:block"
                  />
                </Link>

                {/* Image 3 */}
                <Link
                  href={"/videos"}
                  className="absolute group bottom-[64%] md:bottom-[48%] right-24 sm:right-44 md:right-48 lg:right-64 xl:right-[28%] 2xl:right-[34%] horizontal-bounce"
                >
                  <Image
                    src="/assets/hero-sec-3.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto group-hover:hidden"
                  />
                  <Image
                    src="/assets/hero-sec-3-outline.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto hidden group-hover:block"
                  />
                </Link>

                {/* Image 4 */}
                <Link
                  href={"/books"}
                  className="absolute group bottom-[44%] md:bottom-[40%] right-0 sm:right-0 md:right-1 lg:right-0 xl:right-[4%] 2xl:right-[10%] horizontal-bounce"
                >
                  <Image
                    src="/assets/hero-sec-4.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto group-hover:hidden"
                  />
                  <Image
                    src="/assets/hero-sec-4-outline.svg"
                    alt=""
                    width={200}
                    height={180}
                    className="object-contain w-24 sm:w-36 md:w-44 lg:w-48 xl:w-52 h-auto hidden group-hover:block"
                  />
                </Link>

                {/* Image 5 */}
                <Link
                  href={"/games"}
                  className="absolute group bottom-[48%] md:bottom-[30%] left-[40%] sm:left-[40%] md:left-1/2 transform md:-translate-x-2/3 horizontal-bounce"
                >
                  <Image
                    src="/assets/hero-sec-5.svg"
                    alt=""
                    width={140}
                    height={180}
                    className="object-contain w-20 sm:w-28 md:w-30 lg:w-36 xl:w-32 h-auto group-hover:hidden"
                  />
                  <Image
                    src="/assets/hero-sec-5-outline.svg"
                    alt=""
                    width={140}
                    height={180}
                    className="object-contain w-20 sm:w-28 md:w-30 lg:w-36 xl:w-32 h-auto hidden group-hover:block"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="relative w-full h-full"> */}
          <div className="relative w-full h-full mb-80 sm:mb-[400px] md:mb-[450px] lg:mb-[200px]">
            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src="/assets/bg-cloud.svg"
                className="w-full h-auto object-cover"
                alt="Cloud"
              />
            </div>

            {/* Cards Container */}
            <div className="mb-18 absolute left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-1 md:gap-2 -top-20 lg:-top-40 w-full max-w-5xl">
              {/* Big Circle */}
              <div className="bg-[#ff625a] rounded-full w-56 sm:w-74 h-56 sm:h-74 flex flex-col items-center justify-center text-center p-2 border-16 border-[#e8f7fc]">
                <h2 className="text-white px-3.5 text-sm md:text-3xl font-grobold leading-tight text-center mx-auto">
                  the <br /> Abdullah & Fatima way
                </h2>
                <p className="text-white text-md mt-2 overflow-hidden font-comic line-clamp-3 text-center px-2">
                  Faith‑rooted stories, games, and activities that build
                  character, curiosity, and joy.
                </p>
              </div>

              {/* Small Circles */}
              <Link
                href={"/books"}
                className="bg-[#1dbeff] rounded-full w-28 sm:w-44 md:w-44 md:h-44 h-28 sm:h-44 flex flex-col items-center justify-center text-center border-16 border-[#e8f7fc] overflow-hidden"
              >
                <h2 className="text-xs sm:text-xl font-grobold text-[#365a77] mb-2 sm:mb-3">
                  Read
                </h2>
                <img
                  src="/assets/read.png"
                  alt="Read"
                  className="object-contain w-10 sm:w-30 h-10 sm:h-20"
                />
              </Link>

              <Link
                href={"/games"}
                className="bg-[#ffe649] rounded-full w-28 sm:w-44 h-28 sm:h-44 flex flex-col items-center justify-center text-center p-3 border-16 border-[#e8f7fc]"
              >
                <h2 className="text-xs sm:text-xl font-grobold text-[#365a77] mb-2 sm:mb-3">
                  Play
                </h2>
                <img
                  src="/assets/play.png"
                  alt="Play"
                  className="object-contain w-10 sm:w-30 h-10 sm:h-20"
                />
              </Link>

              <Link
                href={"/videos"}
                className="bg-[#9acb4e] rounded-full w-28 sm:w-44 h-28 sm:h-44 flex flex-col items-center justify-center text-center p-3 border-16 border-[#e8f7fc]"
              >
                <h2 className="text-xs sm:text-xl font-grobold text-[#365a77] mb-2 sm:mb-3">
                  Watch
                </h2>
                <img
                  src="/assets/watch.png"
                  alt="Watch"
                  className="object-contain w-10 sm:w-30 h-10 sm:h-20"
                />
              </Link>
            </div>
          </div>
        </div>
        <Link
          target="blank"
          href={
            "https://shop.sidr.productions/products/abdullah-fatima-illustrated-series-12-book-box-set"
          }
          className="flex justify-center mx-2 -mt-14 sm:-mt-5 md:-mt-10 lg:-mt-20 cursor-pointer"
        >
          <img src="/assets/online-order.png" alt="" className="" />
        </Link>

        <div className="bg-[#e8f7fc] pt-32 sm:pt-36 md:pt-28 lg:pt-20 relative">
          <div className="hidden md:flex absolute left-6 top-4">
            <img src="/assets/plane.png" alt="" width={310} />
          </div>
          <div className="mt-12">
            <SectionValuePromise />
          </div>
        </div>
        <div className="mt-38">
          <SectionHeartMinds />
        </div>
        <div className="mt-24 mb-8">
          <SectionWeTeach />
          <FeaturedBooks />
        </div>
        <FeaturedGames />
        <WatchLearn />
        <Activities />
        <div className="bg-[#c7e560]">
          <Footer />
        </div>
      </div>
    </>
  );
}

<div className="mt-8"></div>;
