"use client";
import { booksData } from "@/utils/constants";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useSearchParams } from "next/navigation";

// Optional: If you want to preload images (highly recommended for smoothness)
const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    if (url) {
      const img = new Image();
      img.src = url;
    }
  });
};

export default function BookReader() {
  const bookRef = useRef<any>(null);
  const [modalOpen, setModalOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [bookDetail, setBookDetail] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Find the book once slug changes
  useEffect(() => {
    if (slug) {
      const foundBook = booksData?.find((item) => item?.slug === slug);
      setBookDetail(foundBook);
    }
  }, [slug]);

  // Window resize listener for responsive width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload next/previous pages when book loads or page changes
  useEffect(() => {
    if (bookDetail?.pages) {
      const urls = bookDetail.pages.map(
        (page: any) => process.env.NEXT_PUBLIC_IMAGEURL + page.page
      );
      // Preload all images (or at least first 5 for initial smoothness)
      preloadImages(urls.slice(0, 5));
    }
  }, [bookDetail]);

  const loadedCount = useRef(0);
  const handleImageLoad = () => {
    loadedCount.current += 1;

    if (loadedCount.current >= 2) {
      setIsLoading(false);
    }
  };

  // Detect page flip to preload next pages
  const handlePageFlip = () => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip();
      const current = pageFlip.getCurrentPageIndex();
      const nextPage = current + 2;
      const nextNextPage = current + 3;

      if (nextPage < bookDetail?.pages?.length) {
        const url =
          process.env.NEXT_PUBLIC_IMAGEURL + bookDetail.pages[nextPage].page;
        preloadImages([url]);
      }
      if (nextNextPage < bookDetail?.pages?.length) {
        const url =
          process.env.NEXT_PUBLIC_IMAGEURL +
          bookDetail.pages[nextNextPage].page;
        preloadImages([url]);
      }
    }
  };
  // const isMobile = windowWidth < 768;

  // // Increase width, but cap it so GPU is safe
  // const bookWidth = isMobile
  //   ? Math.min(windowWidth * 0.98, 520) // ⬅ bigger than 420
  //   : Math.min(windowWidth * 0.8, 900);

  // // Slightly taller pages (more book-like)
  // const bookHeight = bookWidth * 0.6;

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  let bookWidth;
  let bookHeight;

  if (isMobile) {
    // Slightly smaller than full width, still readable
    bookWidth = Math.min(windowWidth * 0.98, 520); // 90% of screen width, max 500px
    bookHeight = bookWidth * 0.6;
  } else if (isTablet) {
    bookWidth = Math.min(windowWidth * 5.98, 720); //MOBILE
    bookHeight = bookWidth * 0.6;
  } else {
    bookWidth = Math.min(windowWidth * 0.85, 1200); //TABLET
    bookHeight = bookWidth * 0.72;
  }

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
          {/* Book container */}
          <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
            {isLoading && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
                </div>

                {/* Text */}
                <p className="mt-4 text-white text-sm tracking-wide animate-pulse font-comic">
                  Loading…
                </p>
              </div>
            )}
            <div className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center">
              <HTMLFlipBook
                ref={bookRef}
                width={bookWidth}
                height={bookHeight}
                size="fixed"
                showCover={false}
                mobileScrollSupport={true}
                drawShadow={false}
                maxShadowOpacity={0}
                flippingTime={350}
                usePortrait={true}
                startPage={0}
                onFlip={handlePageFlip}
                className="bg-transparent"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  height: "auto",
                }}
              >
                {bookDetail?.pages?.map((page: any, index: number) => (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <img
                      src={process.env.NEXT_PUBLIC_IMAGEURL + page.page}
                      alt={`Page ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
                      decoding="async"
                      onLoad={handleImageLoad}
                      style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                        willChange: "transform",
                      }}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
