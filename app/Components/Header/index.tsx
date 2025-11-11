"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-6">
      <div className="flex items-center max-w-7xl mx-auto relative flex-wrap md:flex-nowrap">
        {/* White header content */}
        <div className="bg-white flex items-center w-full md:grow relative py-10 md:py-3.5 mx-2 rounded-xl shadow-sm px-6 md:mx-2">
          {/* Absolute logo on the left */}
          <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
            <Image
              src="/assets/main-logo.png"
              alt="Main Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="object-contain w-32 sm:w-36 md:w-40 lg:w-[200px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-between gap-4 lg:gap-8 w-full pl-[180px] md:pl-[200px] lg:pl-[220px] mx-4 md:mx-12 font-grobold">
            <Link href="/" className="text-[#365a77] text-lg lg:text-xl">
              Home
            </Link>
            <Link href="/books" className="text-[#365a77] text-lg lg:text-xl">
              Books
            </Link>
            <Link href="/games" className="text-[#365a77] text-lg lg:text-xl">
              Games
            </Link>
            <Link href="/videos" className="text-[#365a77] text-lg lg:text-xl">
              Videos
            </Link>
            <Link
              href="/activities"
              className="text-[#365a77] text-lg lg:text-xl"
            >
              Activities
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden absolute right-4 text-gray-700 z-20"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t shadow-md flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50 mt-2 mx-2 rounded-b-xl">
              <Link
                href="/"
                className="text-black transition w-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/books"
                className="text-black transition w-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Books
              </Link>
              <Link
                href="/games"
                className="text-black transition w-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Games
              </Link>
              <Link
                href="/videos"
                className="text-black transition w-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                href="/activities"
                className="text-black transition w-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Activities
              </Link>
            </div>
          )}
        </div>

        {/* Shop Button - Now responsive */}
        <button className="hidden lg:flex font-grobold border-3 bg-[#ff625a] text-white px-6 md:px-8 py-2.5 rounded-2xl hover:bg-red-600 transition ml-2 md:ml-0">
          Shop
        </button>
      </div>
    </header>
  );
}
