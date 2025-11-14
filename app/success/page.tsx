// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState("");
  console.log(session);

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
          console.log("Stripe session email:", email);

          if (email) {
            // ---------------------------------
            // 1. REGISTER USER
            // ---------------------------------
            const registerRes = await fetch(
              "https://anf-dev-server-903cd9f18f9b.herokuapp.com/api/auth/register",
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
            console.log("Register API Response:", registerData);

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
      <h1>🎉 Payment Successful!</h1>

      <p>Thank you for your purchase.</p>

      <h3>Session Details</h3>
      <pre style={{ background: "#f4f4f4", padding: 20 }}>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
