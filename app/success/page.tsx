// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/set-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailState, password }),
      }
    );

    const data = await res.json();

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
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
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

  if (loading) return <h2>Loading checkout details...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: 40 }}>
      <div style={{ maxWidth: 500, margin: "50px auto", textAlign: "center" }}>
        <h1>🎉 Payment Successful!</h1>

        <p>Thank you for your purchase.</p>

        <h1>Set Your Password</h1>
        <p>
          <strong>Email:</strong> {emailState}
        </p>

        <input
          type="password"
          placeholder="Enter new password"
          style={{ padding: "10px", width: "100%", marginTop: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            marginTop: 20,
            padding: "10px 20px",
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Setting Password..." : "Submit"}
        </button>

        {message && (
          <p style={{ marginTop: 20, fontWeight: "bold" }}>{message}</p>
        )}
      </div>

      {/* <h3>Session Details</h3>
      <pre style={{ background: "#f4f4f4", padding: 20 }}>
        {JSON.stringify(session, null, 2)}
      </pre> */}
    </div>
  );
}
