import React from "react";
import StickyHeader from "../Components/StickyHeader/page";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <StickyHeader />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 mt-20">
        <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          {/* Heading */}
          <h1 className="mb-6 text-center text-3xl font-grobold text-gray-900">
            Contact Us
          </h1>

          {/* Intro Text */}
          <p className="mb-8 text-center font-comic text-gray-700 leading-relaxed text-lg">
            Have questions or need assistance? We’re here to help! Reach out to
            us using any of the methods below, and we’ll get back to you as soon
            as possible.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">📧</span>
              <a
                href="mailto:support@abdullahandfatima.com"
                className="font-comic font-semibold text-gray-900 hover:text-blue-600 hover:underline"
              >
                support@abdullahandfatima.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-grobold text-gray-900 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-comic focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-comic focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-comic focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-32 resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-grobold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer bgWhite={true} />
    </>
  );
}

export default Contact;
