import React from "react";
import Footer from "../Components/Footer";
import StickyHeader from "../Components/StickyHeader/page";

const PrivacyPolicy = () => {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen px-4 py-10 mt-24">
        <div className="mx-auto max-w-7xl bg-white p-6 sm:p-10">
          <h1 className="mb-6 text-center text-4xl font-medium text-gray-900 font-grobold">
            Privacy Policy
          </h1>

          <p className="mb-6 text-gray-700 leading-relaxed font-comic text-lg">
            <strong>Abdullah & Fatima</strong> values your privacy and is
            committed to protecting your information. This Privacy Policy
            explains how data is collected, used, and protected when you use our
            mobile application and website.
          </p>

          {/* Section 1 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              1. Information We Collect
            </h2>
            <p className="mb-2 text-gray-700 font-comic text-lg">
              We collect only the information necessary to operate and improve
              our services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 font-comic text-lg">
              <li>Basic account information (if applicable)</li>
              <li>Subscription status and access level</li>
              <li>App and website usage data</li>
              <li>Device and browser information (non-personal)</li>
              <li>Payment confirmation details (no card data stored)</li>
            </ul>
            <p className="mt-2 text-gray-700 font-comic">
              We do not knowingly collect sensitive personal data from children.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              2. Payments & Subscriptions
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 font-comic text-lg">
              <li>Web subscriptions are processed securely through Stripe</li>
              <li>
                Mobile subscriptions are processed via Apple In-App Purchases or
                Google Play Billing
              </li>
              <li>
                We do not store credit card or payment details on our servers
              </li>
              <li>
                Payment information is handled entirely by trusted third-party
                payment providers
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              3. How We Use Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 font-comic text-lg">
              <li>Provide access to free and paid content</li>
              <li>Manage subscriptions and entitlements</li>
              <li>Improve app and website performance</li>
              <li>Add new content and features</li>
              <li>Ensure security and prevent misuse</li>
              <li>Meet legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              4. Children’s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed font-comic text-lg">
              This app is designed for children. We do not knowingly collect
              personal data from children beyond what is required for app
              functionality. Parents or guardians may contact us to request data
              removal.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed font-comic text-lg">
              We use third-party services such as Stripe, Apple, and Google for
              payment processing. These services operate under their own privacy
              policies.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              6. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed font-comic text-lg">
              We implement reasonable technical and organizational measures to
              protect user data from unauthorized access, loss, or misuse.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed font-comic text-lg">
              This Privacy Policy may be updated from time to time. Updates will
              be posted on this page.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="mb-2 text-xl font-medium text-gray-900 font-grobold">
              8. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed font-comic text-lg">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
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

export default PrivacyPolicy;
