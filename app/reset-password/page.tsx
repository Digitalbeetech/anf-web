"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/rootReducer";
import { setUser } from "@/redux/apiSlice";
import { jwtDecode } from "jwt-decode";

export default function ResetPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const {email} = useParams();
  // const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}auth/set-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();
    if (data?.accessToken) {
      const decodedUser: any = jwtDecode(data?.accessToken);
      dispatch(setUser(decodedUser?.user));
      localStorage.setItem("user", JSON.stringify(decodedUser?.user));
    }
    if (data?.success) {
      setMessage("🎉 Your password has been set successfully!");
    } else {
      setMessage("❌ Failed to update password.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#EAF7FF]">
      <Header />

      <div style={{ maxWidth: 500, margin: "50px auto", textAlign: "center" }}>
        <div className="max-w-md mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8 text-center">
          <h1 className="font-grobold text-3xl text-[#f9be49] mb-12">
            Set Your Password
          </h1>
          <Input
            type="password"
            label="New Password"
            placeholder="Enter new password"
            className="text-start"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              loader={loading}
              className="text-center mt-5 bg-green-500 hover:bg-green-400 text-white font-medium py-3 rounded-lg"
            >
              Submit
            </Button>
          </div>
        </div>

        {message && (
          <p style={{ marginTop: 20, fontWeight: "bold" }}>{message}</p>
        )}
      </div>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} hideNewLetter={false} />
      </div>
    </div>
  );
}
