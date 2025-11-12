const Footer = () => {
  return (
    <>
      <div className="relative bg-[#ff6d3a] w-full pt-12 flex justify-center">
        {/* Main background image */}
        <img
          src="/assets/bg-footer.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
        />

        {/* Newsletter + Kids container */}
        <div className="relative flex justify-center">
          {/* Newsletter div */}
          <div className="relative bg-[#9f69b4] rounded-3xl mx-4  p-6 sm:p-8 md:p-12 flex flex-col items-center text-center max-w-3xl mx-auto z-10">
            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-grobold tracking-tight mb-3 md:mb-4"
              style={{
                color: "#f9be49",
                WebkitTextStroke: "2px white",
                paintOrder: "stroke fill",
                textShadow:
                  "0 2px 0 #fff, 0 4px 0 #ccc, 0 6px 0 #aaa, 0 8px 0 #999, 0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              Newsletter
            </h1>

            {/* Subtitle */}
            <p className="text-white mb-2 font-comic text-2xl sm:text-3xl">
              Join the Abdullah & Fatima circle
            </p>

            {/* Description */}
            <p className="text-white mb-6 text-lg sm:text-xl font-comic px-4 sm:px-8 md:px-24">
              Get new releases, free printables, and behind-the-scenes updates
              in your inbox.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-4 px-4 sm:px-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-full outline-none bg-white text-gray-800 flex-1 min-w-0"
              />
              <button className="bg-[#1dbeff] text-white px-6 py-2.5 rounded-full font-comic hover:bg-[#1aa8e0] transition">
                Subscribe
              </button>
            </div>

            {/* Unsubscribe */}
            <p className="font-comic text-base sm:text-lg underline text-white">
              You can unsubscribe anytime.
            </p>

            {/* Kids - Hidden on mobile, visible on lg+ */}
            <img
              src="/assets/footer-kid-1.png"
              className="hidden lg:block absolute -left-32 xl:-left-40 bottom-0 w-64 xl:w-78 h-auto z-20 pointer-events-none"
              alt="Kid 1"
            />
            <img
              src="/assets/footer-kid-2.png"
              className="hidden lg:block absolute -right-32 xl:-right-40 bottom-0 w-60 xl:w-74 h-auto z-20 pointer-events-none"
              alt="Kid 2"
            />
          </div>
        </div>
      </div>
      <footer className="bg-[#91b44b] text-white pt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="#"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Books
            </a>
            <a
              href="#"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Games
            </a>
          </div>

          <div className="mb-4 sm:mb-0">
            <img
              src="/assets/main-logo.png"
              alt="Abdullah & Fatima"
              className="h-24"
            />
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Videos
            </a>
            <a
              href="#"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Activities
            </a>
            <a
              href="#"
              className="bg-[#ff6d3a] px-4 py-2 rounded-full font-comic hover:bg-orange-500 transition"
            >
              Shop
            </a>
          </div>
        </div>

        <div className="border-t border-white/30 text-center py-4 text-xl font-semibold pb-8 font-comic">
          © 2025 Abdullah & Fatima | All Rights Reserved | Powered by Sidr
          Productions.
        </div>
      </footer>
    </>
  );
};

export default Footer;
