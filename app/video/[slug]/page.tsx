"use client";
import { RootState } from "@/redux/rootReducer";
import { VIDEOS } from "@/utils/videos";
import { X } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Video = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile");
  const router = useRouter();
  const user = useSelector((state: RootState) => state.api.user);
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    const findBySlug = VIDEOS.find((item) => item.slug === slug);
    if (findBySlug) {
      setVideo(findBySlug);
    }
  }, [slug]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        {user?.premiumSubscription || video?.free || mobile ? (
          <div className="relative w-full h-full">
            {/* Close button */}
            {!mobile && (
              <button
                onClick={() => router.back()}
                className="absolute top-4 right-4 z-50 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" />
              </button>
            )}

            {/* Video iframe */}
            {video && (
              <iframe
                src={`${process.env.NEXT_PUBLIC_IMAGEURL}AnF/${video?.link}`}
                title={video.title}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen"
              />
            )}
            {!video && (
              <div className="flex-1 flex items-center justify-center text-white">
                Loading video...
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 text-white text-center p-6 rounded-xl space-y-4">
              <p className="text-lg">
                This is premium content. Please buy a subscription to watch this
                video.
              </p>
              <button
                onClick={() =>
                  router.push(
                    "https://www.abdullahandfatima.com/membership#membership"
                  )
                }
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition-colors"
              >
                Buy Subscription
              </button>
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Video;
