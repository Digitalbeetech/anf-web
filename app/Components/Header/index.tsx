"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import Modal from "../Modal";
import Login from "../Login";
import Signup from "../Signup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/rootReducer";
import { logout, setUser } from "@/redux/apiSlice";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector((state: RootState) => state.api.user);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      // await dispatch(logout(""))?.unwrap();
      Cookies.remove("token");
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  const navLinks = [
    { name: "Books", link: "/books" },
    { name: "Games", link: "/games" },
    { name: "Videos", link: "/videos" },
    { name: "Activities", link: "/activities" },
    { name: "Membership", link: "/membership" },
    {
      name: "Shop",
      link: "https://shop.sidr.productions/collections/abdullah-and-fatima",
      external: true,
    },
  ];

  return (
    <>
      <header className="py-6">
        <div className="flex items-center max-w-7xl mx-auto relative flex-wrap md:flex-nowrap">
          {/* White header content */}
          <div className="bg-white flex items-center w-full md:grow relative py-10 md:py-3.5 mx-2 rounded-xl shadow-sm px-6 md:mx-2">
            {/* Absolute logo on the left */}
            <Link
              href={"/"}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10"
            >
              <Image
                src="/assets/main-logo.png"
                alt="Main Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-32 sm:w-36 md:w-40 lg:w-[200px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-between gap-4 lg:gap-8 w-full pl-[180px] md:pl-[200px] lg:pl-[220px] mx-4 md:mx-12 font-grobold">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  className={`${
                    pathname === item?.link
                      ? "text-[#f9be49]"
                      : "text-[#365a77]"
                  } text-lg lg:text-xl`}
                >
                  {item.name}
                </Link>
              ))}
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
          <div ref={dropdownRef}>
            {user ? (
              <>
                {/* Profile Circle */}
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full bg-[#ff625a] text-white hover:bg-red-600 transition"
                >
                  <User size={24} />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-medium text-gray-800 truncate">
                        {user.username}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full cursor-pointer text-left px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => alert("Profile Clicked")}
                      className="w-full cursor-pointer text-left px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Profile
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                className="hidden lg:flex font-grobold cursor-pointer border-3 bg-[#ff625a] text-white px-6 md:px-8 py-2.5 rounded-2xl hover:bg-red-600 transition ml-2 md:ml-0"
                onClick={() => {
                  setOpenModal(true);
                  setModalType("login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>
      <Modal
        modalIsOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title={modalType === "login" ? "Login" : "Signup"}
        size="medium"
      >
        {modalType === "login" ? (
          <Login
            modalType={modalType}
            setModalType={setModalType}
            setOpenModal={setOpenModal}
          />
        ) : (
          <Signup
            modalType={modalType}
            setModalType={setModalType}
            setOpenModal={setOpenModal}
          />
        )}
      </Modal>
    </>
  );
}
