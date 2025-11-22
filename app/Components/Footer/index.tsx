"use client";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/rootReducer";
import { logout, newsLetter, setUser } from "@/redux/apiSlice";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import Login from "../Login";

const Footer = ({ bgWhite = false, hideNewLetter = true }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.api.user);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logout(""))?.unwrap();
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        email: data.email,
      };
      const response = await dispatch(newsLetter(payload)).unwrap();
      reset();
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`relative ${
          bgWhite ? "bg-transparent" : "bg-[#e8f7fc]"
        } w-full pt-12 flex justify-center`}
      >
        {/* Main background image */}
        <img
          src="/assets/bg-footer.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
        />

        {/* Newsletter + Kids container */}
        <div
          className={`relative flex justify-center ${
            hideNewLetter ? "pt-0" : "pt-96"
          }`}
        >
          {hideNewLetter && (
            <div className="relative bg-[#9f69b4] rounded-none md:rounded-b-[144px] md:rounded-t-[194px] p-6 sm:p-8 md:p-12 flex flex-col items-center text-center max-w-3xl mx-auto z-10">
              <h1 className="text-center text-6xl font-black leading-tight font-grobold">
                <span className="inline-block text-[#ffdb5a] tracking-[-0.04em] text-shadow-yellow">
                  Newsletter
                </span>
              </h1>

              <p className="text-white mb-2 font-comic text-2xl sm:text-3xl">
                Join the Abdullah & Fatima circle
              </p>

              <p className="text-white mb-6 text-lg sm:text-xl font-comic px-4 sm:px-8 md:px-38">
                Get new releases, free printables, and behind-the-scenes updates
                in your inbox.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-4 px-4 sm:px-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="email"
                  bgColor={true}
                  {...register("email")}
                  placeholder="Enter your email"
                  className="rounded-full font-comic font-semibold outline-none text-gray-800 flex-1 min-w-0 h-12"
                  errorMessage={errors.email?.message}
                />
                <Button
                  type="submit"
                  loader={isSubmitting}
                  bgColor="bg-[#1dbeff]"
                  className=" text-white px-6 py-2.5 rounded-full font-comic font-semibold hover:bg-[#1aa8e0] transition cursor-pointer"
                >
                  Subscribe
                </Button>
              </form>

              <p className="font-comic text-base sm:text-lg underline text-white">
                You can unsubscribe anytime.
              </p>

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
          )}
        </div>
      </div>
      <footer className="bg-[#91b44b] text-white pt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="/books"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Books
            </a>
            <a
              href="/games"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Games
            </a>
            <a
              href="/membership"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Membership
            </a>
          </div>

          <Link href={"/"} className="mb-4 sm:mb-0">
            <img
              src="/assets/main-logo.png"
              alt="Abdullah & Fatima"
              className="h-24"
            />
          </Link>

          <div className="flex space-x-6">
            <a
              href="/videos"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Videos
            </a>
            <a
              href="/activities"
              className="hover:underline font-comic text-2xl font-semibold"
            >
              Activities
            </a>
            <a
              href="https://shop.sidr.productions/collections/abdullah-and-fatima"
              className="hover:underline font-comic text-2xl font-semibold"
              target="blank"
            >
              Shop
            </a>
            {user ? (
              <button
                className="bg-[#ff6d3a] cursor-pointer px-4 py-2 rounded-full font-comic hover:bg-orange-500 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-[#ff6d3a] cursor-pointer px-4 py-2 rounded-full font-comic hover:bg-orange-500 transition"
                onClick={() => setOpenModal2(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div className="border-t border-white/30 text-center py-4 text-xl font-semibold pb-8 font-comic">
          © 2025 Abdullah & Fatima | All Rights Reserved | Powered by{" "}
          <Link
            target="blank"
            href={"https://sidr.productions/"}
            className="text-[#f9be49]"
          >
            Sidr Productions
          </Link>
        </div>
      </footer>
      <Modal
        modalIsOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title="Subscribed Successfully"
        size="medium"
      >
        <p className="font-comic text-center text-2xl font-semibold">
          Thanks for subscribing! You’ll get our future updates.
        </p>
      </Modal>
      <Modal
        modalIsOpen={openModal2}
        closeModal={() => setOpenModal2(false)}
        title="Login"
        size="medium"
      >
        <Login setOpenModal={setOpenModal2} />
      </Modal>
    </>
  );
};

export default Footer;
