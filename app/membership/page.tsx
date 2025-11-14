"use client";

import React from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

type PlanId = "monthly" | "annual" | "box";

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "ghost";
  href?: string;
}

const PLANS: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "£3.99 / month",
    features: ["All premium content", "Cancel anytime"],
    ctaLabel: "Start monthly",
    ctaVariant: "primary",
  },
  {
    id: "annual",
    name: "Annual",
    price: "£39.99 / year",
    tagline: "Best value",
    features: ["All premium content", "2 months free vs monthly"],
    ctaLabel: "Start annual",
    ctaVariant: "primary",
  },
  {
    id: "box",
    name: "Box Set Offer",
    price: "Free 1-year",
    features: ["Included with 12-book box set", "Activate with your code"],
    ctaLabel: "Get the box",
    ctaVariant: "ghost",
    href: "/shop/abdullah-fatima-series-1-box",
  },
];

const MembershipPage: React.FC = () => {
  return (
    <>
      <main className="min-h-dvh bg-[#EAF7FF]">
        <Header />
        {/* Hero */}
        <section className="relative border-b border-white/60 bg-linear-to-b from-[#EAF7FF] to-white/60">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl sm:text-5xl md:text-5xl inline-block text-center">
                <span
                  className="text-[#f9be49] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                  style={{
                    WebkitTextStroke: "2px white",
                    paintOrder: "stroke fill",
                  }}
                >
                  Join the Abdullah &
                </span>{" "}
                <span
                  className="text-[#9acb4e] drop-shadow-lg font-grobold tracking-tight inline-block transform-gpu"
                  style={{
                    WebkitTextStroke: "2px white",
                    paintOrder: "stroke fill",
                  }}
                >
                  Fatima Family
                </span>
              </h1>
              <p className="font-comic text-xl">
                Unlock premium stories, videos, games and activities that keep
                children growing in faith and character.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-[#EAF7FF] p-6 shadow-sm ring-1 ring-sky-100">
                <h3 className="text-lg font-grobold text-slate-900">
                  Premium content library
                </h3>
                <p className="mt-2 font-comic text-slate-700/90">
                  Access member-only stories, videos and activity packs.
                </p>
              </div>
              <div className="rounded-3xl bg-[#FFF3C4] p-6 shadow-sm ring-1 ring-amber-100">
                <h3 className="text-lg font-grobold text-slate-900">
                  Enhanced games
                </h3>
                <p className="mt-2 font-comic text-slate-700/90">
                  Extra levels and printable missions for selected titles.
                </p>
              </div>
              <div className="rounded-3xl bg-[#E5F6D9] p-6 shadow-sm ring-1 ring-lime-100">
                <h3 className="text-lg font-grobold text-slate-900">
                  Family &amp; classroom tools
                </h3>
                <p className="mt-2 font-comic text-slate-700/90">
                  Guides, schedules and reflection prompts ready to use.
                </p>
              </div>
              <div className="rounded-3xl bg-[#FBE3FF] p-6 shadow-sm ring-1 ring-fuchsia-100">
                <h3 className="text-lg font-grobold text-slate-900">
                  Early access
                </h3>
                <p className="mt-2 font-comic text-slate-700/90">
                  Be first to try new books, episodes and games.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-white/60 bg-linear-to-b from-white to-[#EAF7FF]">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-grobold text-slate-900">
                Choose your membership
              </h2>
              <p className="mt-2 font-comic text-slate-700/90">
                Simple, flexible options for families, schools and Qur&apos;an
                clubs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {PLANS.map((plan) => {
                const isFeatured = plan.id === "annual";
                const Wrapper: React.ElementType = plan.href ? Link : "button";

                return (
                  <article
                    key={plan.id}
                    className={`relative flex flex-col rounded-3xl border bg-white/95 p-6 shadow-sm backdrop-blur ${
                      isFeatured
                        ? "border-sky-400 shadow-sky-100 md:-mt-2 md:pb-8"
                        : "border-white/70 shadow-slate-100"
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute -top-3 right-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-grobold text-white shadow-sm">
                        Best value
                      </div>
                    )}

                    <h3 className="text-lg font-grobold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-xl font-grobold text-slate-900">
                      {plan.price}
                    </p>
                    {plan.tagline && (
                      <p className="mt-1 text-xs font-comic text-slate-600">
                        {plan.tagline}
                      </p>
                    )}

                    <ul className="mt-4 space-y-1 font-comic text-slate-700/90 text-sm">
                      {plan.features.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      {plan.href ? (
                        <Link
                          href={plan.href}
                          className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-grobold shadow-sm ${
                            plan.ctaVariant === "primary"
                              ? "bg-sky-600 text-white hover:bg-sky-700"
                              : "border border-sky-500 bg-white text-sky-700 hover:bg-sky-50"
                          }`}
                        >
                          {plan.ctaLabel}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-grobold shadow-sm ${
                            plan.ctaVariant === "primary"
                              ? "bg-sky-600 text-white hover:bg-sky-700"
                              : "border border-sky-500 bg-white text-sky-700 hover:bg-sky-50"
                          }`}
                        >
                          {plan.ctaLabel}
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-white/60 bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-grobold text-slate-900">
                How it works
              </h2>
              <ol className="mt-4 space-y-3 font-comic text-slate-700/90">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-grobold text-white">
                    1
                  </span>
                  <span>Create your parent account.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-grobold text-white">
                    2
                  </span>
                  <span>Choose a plan or redeem your box set code.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-grobold text-white">
                    3
                  </span>
                  <span>
                    Enjoy safe, ad-free access to our premium content.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-white/60 bg-linear-to-b from-[#EAF7FF] to-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-grobold text-slate-900">FAQs</h2>
            <div className="mt-4 space-y-3">
              <details className="group rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-100">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-grobold text-slate-900 list-none">
                  <span>Is my child&apos;s data collected?</span>
                  <span className="ml-3 text-slate-500 group-open:rotate-90 transition-transform">
                    ▸
                  </span>
                </summary>
                <p className="mt-2 text-sm font-comic text-slate-700/90">
                  No. Accounts are for adults; we do not collect personal data
                  from children.
                </p>
              </details>

              <details className="group rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-100">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-grobold text-slate-900 list-none">
                  <span>Can I cancel anytime?</span>
                  <span className="ml-3 text-slate-500 group-open:rotate-90 transition-transform">
                    ▸
                  </span>
                </summary>
                <p className="mt-2 text-sm font-comic text-slate-700/90">
                  Yes, you can manage or cancel your membership from your
                  account page.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} />
      </div>
    </>
  );
};

export default MembershipPage;
