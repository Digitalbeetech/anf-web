"use client";
import { RootState } from "@/redux/rootReducer";
import { GAMES } from "@/utils/data";
import { X } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Game = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const web = searchParams.get("web");
  const router = useRouter();
  const user = useSelector((state: RootState) => state.api.user);
  const [game, setGame] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    const findBySlug = GAMES.find(
      (item) => item.url === slug || item.premiumUrl === slug
    );
    if (findBySlug) {
      setGame(findBySlug);
    }
  }, [slug]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        {!game && (
          <div className="flex-1 flex items-center justify-center text-white">
            Loading game...
          </div>
        )}

        {web && (
          <button
            onClick={() => router.back()}
            className="absolute top-4 right-4 z-50 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
            aria-label="Close Game"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        {game && (
          <iframe
            src={
              web
                ? `/${
                    user && user?.premiumSubscription
                      ? game.premiumUrl
                      : game.url
                  }/index.html`
                : `/${slug}/index.html`
            }
            title={game.title}
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
          />
        )}
      </div>
    </Suspense>
  );
};

export default Game;
