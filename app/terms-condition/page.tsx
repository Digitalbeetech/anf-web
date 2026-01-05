import React from "react";
import Footer from "../Components/Footer";
import StickyHeader from "../Components/StickyHeader/page";

const TermsConditions = () => {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen mt-24 px-4 py-10">
        <div className="mx-auto max-w-7xl bg-white p-6 sm:p-10">
          <h1 className="mb-6 text-center text-3xl font-medium font-grobold text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mb-6 font-comic text-gray-700 leading-relaxed text-lg">
            By accessing or using the <strong>Abdullah & Fatima</strong> mobile
            app or website, you agree to these Terms & Conditions.
          </p>

          {/* 1 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              1. Use of the App & Website
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              The app and website are provided for educational and entertainment
              purposes for children. Parents or guardians are responsible for
              supervising usage.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              2. Free & Paid Access
            </h2>
            <ul className="list-disc pl-6 font-comic text-gray-700 space-y-1 text-lg">
              <li>Free users have access to limited content</li>
              <li>
                A paid subscription provides full access to all books, games,
                activities, and animated content
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              3. Subscriptions & Billing
            </h2>
            <ul className="list-disc pl-6 font-comic text-gray-700 space-y-1 text-lg">
              <li>Web subscriptions are billed via Stripe</li>
              <li>
                Mobile subscriptions are billed through Apple App Store or
                Google Play Store
              </li>
              <li>
                Subscriptions renew automatically unless canceled through the
                respective platform
              </li>
              <li>Pricing and billing cycles are displayed before purchase</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              4. Cancellations & Refunds
            </h2>
            <ul className="list-disc pl-6 font-comic text-gray-700 space-y-1 text-lg">
              <li>
                Web subscription cancellations and refunds are handled according
                to Stripe policies
              </li>
              <li>
                Mobile subscription refunds are governed by Apple and Google
                policies
              </li>
              <li>We do not directly process refunds for in-app purchases</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              5. Intellectual Property
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              All content, including books, videos, animations, games, and
              designs, is owned by Abdullah & Fatima and protected by
              intellectual property laws.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              6. Content Updates
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              We may add, remove, or modify content or features at any time
              without prior notice.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              7. Account Termination
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              We reserve the right to suspend or terminate access if these Terms
              are violated.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              8. Limitation of Liability
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              We are not liable for indirect or incidental damages arising from
              the use of our app or website.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              9. Changes to Terms
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              These Terms may be updated periodically. Continued use means
              acceptance of any changes.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-2 text-xl font-grobold font-medium text-gray-900">
              10. Contact Us
            </h2>
            <p className="font-comic text-gray-700 text-lg">
              For questions about these Terms & Conditions, contact us at:
            </p>
            <p className="mt-2 font-comic font-semibold text-gray-900">
              📧{" "}
              <a
                href="mailto:support@abdullahandfatima.com"
                className="hover:underline"
              >
                support@abdullahandfatima.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer bgWhite={true} />
    </>
  );
};

export default TermsConditions;
