"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { VIDEOS } from "@/utils/videos";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

const WatchLearn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.api.user);

  return (
    <>
      <div className="flex flex-col px-4 py-8 relative h-full">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
          <span className="inline-block mx-3">
            <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
              Watch
            </span>
          </span>
          <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
            Learn
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-2xl text-center font-comic">
          Short, safe videos that inspire questions, reflection, and family
          chats.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4 relative">
          <div className="md:flex hidden absolute -right-28 -top-38">
            <img src="assets/cloud-2.png" />
          </div>
          <div className="md:flex hidden absolute -left-44 bottom-0">
            <img src="assets/cloud-2.png" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {VIDEOS?.slice(0, 3)?.map((item, index) => (
              <Link
                key={index}
                href={`/videos/${item?.slug}`}
                className="rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col transition-transform p-4 sm:p-5"
              >
                <div className="flex flex-col grow">
                  <div className="relative w-full aspect-video cursor-pointer rounded-2xl overflow-hidden h-70">
                    <Image
                      src={item.image}
                      alt={item.title || "Video thumbnail"}
                      fill
                      className="object-fill"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20"
                      onClick={(e) => {
                        e.preventDefault();
                        (user?.premiumSubscription || item?.free) &&
                          router.push(`/video/${item?.slug}`);
                      }}
                    >
                      <Play className="w-14 h-14 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* ---------- TEXT ---------- */}
                  <p className="w-full font-comic text-xl font-semibold text-start mt-4">
                    {item.title}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 font-comic font-semibold mt-3">
                    {item?.values?.map((item) => (
                      <button className="border px-3 text-sm rounded-3xl">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ---------- BUTTON - Always at Bottom ---------- */}
                {user?.premiumSubscription || item?.free ? (
                  <button
                    className="bg-[#ff625a] rounded-full w-full py-3 font-grobold text-white mt-4 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/video/${item?.slug}`);
                    }}
                  >
                    Watch now
                  </button>
                ) : (
                  <div
                    className="relative mt-4"
                    onClick={(e) => e.preventDefault()}
                  >
                    <select
                      className="appearance-none bg-sky-600 w-full text-white px-5 py-3 rounded-full text-sm font-grobold shadow-sm cursor-pointer hover:bg-sky-700 focus:outline-none pr-10"
                      defaultValue=""
                      onChange={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const selected = e.target.value;
                        if (!selected) return;

                        try {
                          const priceId =
                            selected === "monthly"
                              ? process.env.NEXT_PUBLIC_MONTHLY_PRICEID
                              : process.env.NEXT_PUBLIC_YEARLY_PRICEID;

                          const previousPage = pathname;

                          const res = await fetch("/api/create-subscription", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ priceId, previousPage }),
                          });

                          const data = await res.json();

                          if (data.url) {
                            window.location.href = data.url; // Redirect to Stripe checkout
                          } else {
                            alert("Error: " + data.error);
                          }
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <option
                        value=""
                        disabled
                        className="text-black bg-white font-comic"
                      >
                        Join to Watch
                      </option>

                      <option
                        value="monthly"
                        className="text-black bg-white font-comic font-semibold"
                      >
                        Monthly – £3.99
                      </option>

                      <option
                        value="annual"
                        className="text-black bg-white font-comic font-semibold"
                      >
                        Annual – £39
                      </option>
                    </select>

                    {/* Custom Arrow */}
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                      ▼
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
        <Link href={"/videos"} className="flex justify-center">
          <button className="bg-[#8ed7b2] text-white px-6 py-2.5 rounded-full transition font-comic cursor-pointer">
            Browse Videos
          </button>
        </Link>
      </div>
    </>
  );
};

export default WatchLearn;
