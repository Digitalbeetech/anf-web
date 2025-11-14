// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/rootReducer";
import { getUser } from "@/redux/apiSlice";

export default function SuccessPage() {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState("");
  console.log(session);

  const [emailState, setEmailState] = useState<String>("");

  const [password, setPassword] = useState("");
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
        body: JSON.stringify({ email: emailState, password }),
      }
    );

    const data = await res.json();
    await dispatch(getUser("")).unwrap();

    if (data?.success) {
      setMessage("🎉 Your password has been set successfully!");
      router.push("/membership");
    } else {
      setMessage("❌ Failed to update password.");
    }

    setLoading(false);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get("session_id");

      if (!sessionId) {
        setError("Session ID not found.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/get-session?session_id=${sessionId}`);
        const data = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          setSession(data);

          const email = data?.customer_details?.email;
          setEmailState(email ? email : "");
          // console.log("Stripe session email:", email);

          if (email) {
            // ---------------------------------
            // 1. REGISTER USER
            // ---------------------------------
            const registerRes = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: email.split("@")[0],
                  password: "",
                  email: email,
                }),
              }
            );
            const registerData = await registerRes.json();
            console.log("Register API Response:", registerData?.accessToken);
            Cookies.set("token", registerData?.accessToken, {
              expires: 7,
            });

            // ---------------------------------
            // 2. SEND RESET PASSWORD EMAIL
            // ---------------------------------
            const resetPasswordLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?email=${email}`;

            await fetch("/api/send-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                to: email,
                subject: "Reset Your Password",
                html: `
                    <div style="font-family: Arial; padding: 20px;">
                        <h2>Welcome to ANF!</h2>
                        <p>Click the button below to set your password:</p>
                        <a 
                        href="${resetPasswordLink}" 
                        style="display:inline-block;padding:12px 20px;background:#4CAF50;color:white;text-decoration:none;border-radius:6px;font-weight:bold"
                        >
                        Set Password
                        </a>
                        <p>This link will remain valid for a limited time.</p>
                    </div>
                `,
              }),
            });

            console.log("Reset password email sent!");
          }
        }
      } catch (err) {
        setError("Something went wrong.");
      }

      setLoading(false);
    };

    fetchSession();
  }, []);

  return (
    <div className="bg-[#EAF7FF]">
      <Header />
      <div style={{ padding: 40 }}>
        <div className="max-w-md mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8 text-center">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-7 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
              <div className="h-4 w-56 bg-gray-200 rounded mx-auto mb-8"></div>
              <div className="h-6 w-40 bg-gray-200 rounded mx-auto mb-3"></div>
              <div className="h-4 w-64 bg-gray-200 rounded mx-auto mb-8"></div>
              <div className="h-12 w-full bg-gray-200 rounded-lg mb-6"></div>
              <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl text-green-600 mb-2 font-grobold">
                🎉 Payment Successful!
              </h1>

              <p className="text-gray-600 mb-6 font-comic font-semibold">
                Thank you for your purchase.
              </p>

              <h2 className="text-2xl font-comic font-semibold text-gray-800 mb-1">
                Set Your Password
              </h2>
              <p className="text-gray-700 mb-6 font-comic font-semibold">
                <strong className="font-comic">Email:</strong> {emailState}
              </p>
              <Input
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
              {message && (
                <p className="mt-5 font-semibold text-gray-800">{message}</p>
              )}
            </>
          )}
        </div>

        {/* <h3>Session Details</h3>
      <pre style={{ background: "#f4f4f4", padding: 20 }}>
        {JSON.stringify(session, null, 2)}
      </pre> */}
      </div>
      <div className="bg-[#EAF7FF]">
        <Footer bgWhite={true} hideNewLetter={false} />
      </div>
    </div>
  );
}
