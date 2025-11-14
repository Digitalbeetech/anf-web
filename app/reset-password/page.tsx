"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (data?.success) {
      setMessage("🎉 Your password has been set successfully!");
    } else {
      setMessage("❌ Failed to update password.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", textAlign: "center" }}>
      <h1>Set Your Password</h1>
      <p>
        <strong>Email:</strong> {email}
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
  );
}
