"use client";

import React, { Suspense, useEffect } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { Minus, Plus } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import StickyHeader from "../Components/StickyHeader/page";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    image: "/assets/monthly.svg",
    price: "£3.99 / month",
    features: ["All premium content", "Cancel anytime"],
    ctaLabel: "Start monthly",
    alreadySubcribed: "Already Subscribed",
  },
  {
    id: "annual",
    name: "Annual",
    image: "/assets/annual.svg",
    price: "£39 / year",
    tagline: "Best value",
    features: ["All premium content", "2 months free vs monthly"],
    ctaLabel: "Start annual",
    alreadySubcribed: "Already Subscribed",
  },
];

/* ────────────────────── Inline Component to Fix useSearchParams ────────────────────── */
function CancelHandler() {
  const searchParams = useSearchParams();
  const cancel = searchParams.get("cancel");
  const { openModal } = useModal();

  useEffect(() => {
    if (cancel === "true" || cancel === "1") {
      openModal(
        "Payment Failed",
        <p className="text-center font-comic text-lg font-semibold">
          Something went wrong while processing your payment. Please try again.
        </p>
      );

      // Clean URL after showing modal
      const url = new URL(window.location.href);
      url.searchParams.delete("cancel");
      window.history.replaceState({}, "", url);
    }
  }, [cancel, openModal]);

  return null;
}
/* ─────────────────────────────────────────────────────────────────────────────────── */

const MembershipPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.api.user);
  const pathname = usePathname();

  return (
    <>
      {/* This fixes the build error – must be here */}
      <Suspense fallback={null}>
        <CancelHandler />
      </Suspense>

      <main className="min-h-dvh bg-[#EAF7FF] overflow-hidden">
        {/* Sticky Header */}
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full bg-[#EAF7FF]">
          <Suspense>
            <StickyHeader />
          </Suspense>
        </div>

        {/* Hero Banner */}
        <div className="relative w-full h-[46vh] sm:h-[60vh] md:h-[75vh] lg:h-[650px] md:bg-[url('/assets/banner-membership.jpg')] bg-cover bg-center bg-no-repeat">
          <section className="relative pt-24">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <div className="space-y-4 text-center">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
                  <span className="inline-block mx-3">
                    <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
                      Join the Abdullah &
                    </span>
                  </span>
                  <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
                    Fatima Family
                  </span>
                </h1>
                <p className="mt-3 font-comic text-base sm:text-lg md:text-xl text-center w-full md:max-w-[50%] mx-auto">
                  Unlock premium stories, videos, games and activities that keep
                  children growing in faith and character.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="relative bg-[#EAF7FF] -mt-1 lg:-mt-4" id="membership">
          <section className="mx-auto max-w-6xl py-6 relative -pt-18">
            <div className="md:flex hidden absolute -left-20 top-60 z-10">
              <img src="assets/cloud-1.png" className="w-20" />
            </div>
            <div className="flex flex-wrap justify-center gap-0 sm:gap-3">
              <img
                src="/assets/membership-1.svg"
                className="w-56 sm:w-20 md:w-66"
              />
              <img
                src="/assets/membership-2.svg"
                className="w-56 sm:w-20 md:w-66"
              />
              <img
                src="/assets/membership-3.svg"
                className="w-56 sm:w-20 md:w-66"
              />
              <img
                src="/assets/membership-4.svg"
                className="w-56 sm:w-20 md:w-66"
              />
            </div>

            <section className="relative">
              <div className="md:flex hidden absolute -right-48 top-10">
                <img src="assets/cloud-2.png" className="w-50" />
              </div>
              <div className="md:flex hidden absolute -left-40 top-26 -rotate-40">
                <img src="assets/ballon.png" className="w-40" />
              </div>
              <div className="px-4 py-12">
                <div className="mb-6 text-center">
                  <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
                    <span className="inline-block mx-3">
                      <span className="inline-block text-[#ffdb5a] tracking-[-0.01em] text-shadow-yellow">
                        Choose your
                      </span>
                    </span>
                    <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
                      membership
                    </span>
                  </h1>
                  <p className="mt-2 font-comic text-slate-700/90">
                    Simple, flexible options for families, schools and
                    Qur&apos;an clubs.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-20">
                  {PLANS.map((plan) => (
                    <article
                      key={plan.id}
                      className="relative flex flex-col items-center rounded-3xl bg-white p-6 shadow-sm w-72 sm:w-80 md:w-96 mb-16"
                    >
                      <div className="w-52 h-52 -mt-24 rounded-full">
                        <img
                          src={plan.image}
                          alt={plan.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="mt-6 text-xl font-grobold text-slate-900 text-center">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-lg font-comic text-slate-900 text-center font-semibold">
                        {plan.price}
                      </p>

                      <ul className="mt-4 space-y-1 font-comic text-slate-700/90 text-sm text-center">
                        {plan.features.map((f, idx) => (
                          <li key={idx}>• {f}</li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        disabled={user?.premiumSubscription}
                        className={`mt-6 w-full rounded-2xl px-4 py-2.5 font-grobold cursor-pointer
                            ${
                              user?.premiumSubscription
                                ? "bg-gray-400 text-gray-100 cursor-not-allowed"
                                : "bg-red-400 text-white hover:bg-red-500"
                            }
                            `}
                        onClick={async () => {
                          try {
                            const previousPage = pathname;

                            const res = await fetch(
                              "/api/create-subscription",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  priceId:
                                    plan.id === "monthly"
                                      ? process.env.NEXT_PUBLIC_MONTHLY_PRICEID
                                      : process.env.NEXT_PUBLIC_YEARLY_PRICEID,
                                  previousPage,
                                }),
                              }
                            );
                            const data = await res.json();
                            if (data.url) {
                              window.location.href = data.url;
                            } else {
                              alert("Error: " + data.error);
                            }
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {user?.premiumSubscription && plan.alreadySubcribed
                          ? plan.alreadySubcribed
                          : plan.ctaLabel}
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            <Link
              target="blank"
              href={
                "https://shop.sidr.productions/products/abdullah-fatima-illustrated-series-12-book-box-set"
              }
              className="flex justify-center cursor-pointer relative"
            >
              <img src="/assets/online-order.png" alt="" className="" />
            </Link>
            <div className="md:flex hidden absolute -left-48 bottom-10 mx-4">
              <img src="assets/cloud-2.png" className="w-40" />
            </div>
          </section>
        </div>

        {/* How it works */}
        <section className="w-full bg-[#e8f7ff] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center bg-white rounded-2xl h-36 md:h-50 relative py-4">
            {/* TITLE */}
            <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
              <span className="inline-block mx-3">
                <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
                  How it
                </span>
              </span>
              <span className="inline-block text-[#a8d034] tracking-[0.01em] text-shadow-green">
                works
              </span>
            </h1>

            {/* WRAPPER FOR FLOATING CARDS */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[-60px] w-full max-w-4xl px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-[#6ea7ff] text-white rounded-2xl px-6 py-8 relative text-center shadow-md">
                  <p className="text-lg leading-snug font-grobold">
                    Create your <br /> parent account.
                  </p>
                  <div className="absolute left-1/2 font-grobold -bottom-4 -translate-x-1/2 bg-[#6ea7ff] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow">
                    1
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-[#ffb347] text-white rounded-2xl px-6 py-8 relative text-center shadow-md">
                  <p className="text-lg leading-snug font-grobold">
                    Choose a plan or <br /> redeem your box set code.
                  </p>
                  <div className="absolute left-1/2 font-grobold -bottom-4 -translate-x-1/2 bg-[#ffb347] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow">
                    2
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-[#8ccf4d] text-white rounded-2xl px-6 py-8 relative text-center shadow-md">
                  <p className="text-lg leading-snug font-grobold">
                    Enjoy safe, ad-free <br /> access to our premium <br />{" "}
                    content.
                  </p>
                  <div className="absolute left-1/2 font-grobold -bottom-4 -translate-x-1/2 bg-[#8ccf4d] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow ">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative pt-8 mx-auto text-center mt-64 md:mt-24">
          <div className="lg:flex hidden absolute right-40 top-0">
            <img
              src="/assets/plane-3.png"
              alt=""
              className="w-40 md:w-42 lg:w-52 xl:w-54"
            />
          </div>
          <div className="md:flex hidden absolute right-40 top-60">
            <img src="assets/cloud-1.png" className="w-20" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-grobold">
              <span className="inline-block text-[#ffdb5a] tracking-[-0.01em] text-shadow-yellow">
                FAQs
              </span>
            </h1>
            <div className="mt-4 space-y-3">
              <details className="group rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-100">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-grobold text-slate-900 list-none">
                  <span>Is my child's data collected?</span>
                  <span className="ml-3 text-slate-500 transition-transform">
                    <span className="block group-open:hidden">
                      <Plus />
                    </span>
                    <span className="hidden group-open:block">
                      <Minus />
                    </span>
                  </span>
                </summary>
                <p className="mt-2 text-sm font-comic text-slate-700/90 text-start">
                  No. Accounts are for adults; we do not collect personal data
                  from children.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-100">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-grobold text-slate-900 list-none">
                  <span>Can I cancel anytime?</span>
                  <span className="ml-3 text-slate-500 transition-transform">
                    <span className="block group-open:hidden">
                      <Plus />
                    </span>
                    <span className="hidden group-open:block">
                      <Minus />
                    </span>
                  </span>
                </summary>
                <p className="mt-2 text-sm font-comic text-slate-700/90 text-start">
                  Yes, you can manage or cancel your membership from your
                  account page.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="bg-[#EAF7FF]">
        <Suspense>
          <Footer bgWhite={true} />
        </Suspense>
      </div>
    </>
  );
};

export default MembershipPage;
