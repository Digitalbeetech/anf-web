// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/rootReducer";
import { getUser, setUser, signUp } from "@/redux/apiSlice";
import moment from "moment";

export default function SuccessPage() {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const [submitLoad, setSubmitLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState("");

  const [emailState, setEmailState] = useState<String>("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!password) return setError("Password is required");
    setSubmitLoad(true);
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
    if (data?.accessToken) {
      const decodedUser: any = jwtDecode(data?.accessToken);
      dispatch(setUser(decodedUser?.user));
      localStorage.setItem("user", JSON.stringify(decodedUser?.user));
    }
    if (data?.success) {
      setMessage("🎉 Your password has been set successfully!");
      router.push("/");
    } else {
      setMessage("❌ Failed to update password.");
    }

    setSubmitLoad(false);
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

          if (email) {
            const response = await dispatch(
              signUp({
                username: email.split("@")[0],
                password: "",
                email: email,
                premiumSubscription: true,
              })
            ).unwrap();
            Cookies.set("token", response.accessToken, { expires: 7 });
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
                subject: "Welcome to the Abdullah & Fatima Family 🌙",
                preheader:
                  "Thanks for joining the Abdullah & Fatima Family—set your password and start exploring books, videos, games, and printables.",
                html: `
                    <!DOCTYPE html>
                      <html lang="en">
                      <head>
                        <!-- Subject: Welcome to the Abdullah & Fatima Family 🌙 -->
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <meta name="x-apple-disable-message-reformatting" />
                        <title>Welcome to the Abdullah & Fatima Family</title>

                        <style>
                          @media only screen and (max-width: 620px) {
                            .container { width: 100% !important; }
                            .inner { padding: 20px !important; }
                            .hero-img img { max-width: 100% !important; height: auto !important; }
                            .social-icons img { width: 26px !important; }
                          }
                        </style>
                      </head>

                      <body style="margin:0; padding:0; background:#f3f4f6; -webkit-text-size-adjust:100%;">

                        <!-- Preheader -->
                        <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
                          Thanks for joining the Abdullah &amp; Fatima Family—set your password and start exploring books, videos, games, and printables.
                        </div>

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" style="padding:24px 12px;">

                              <!-- CONTAINER -->
                              <table role="presentation" width="600" class="container"
                                    cellspacing="0" cellpadding="0"
                                    style="background:#ffffff; border-radius:12px; overflow:hidden;">

                                <!-- HEADER -->
                                <tr>
                                  <td align="center" class="hero-img">
                                    <img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763368515/Group_7.png"
                                        width="600" style="display:block; width:100%; border:0;">
                                  </td>
                                </tr>

                                <!-- MAIN CONTENT -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:24px 32px; font-family:Arial; color:#111;">
                                    <h1 style="margin:0 0 12px;">Welcome to the Abdullah &amp; Fatima Family 🌙</h1>
                                    <p style="font-size:16px;">Salam,</p>
                                    <p style="font-size:16px;">Welcome to the Abdullah & Fatima Family! We’re so happy you’re here. Your payment was received, and your membership is now active. </p>

                                    <h3 style="margin:16px 0 6px;">Set up your account</h3>
                                    <p>Create your password to access everything.</p>

                                    <!-- CTA -->
                                    <table role="presentation" style="margin-bottom:14px;">
                                      <tr>
                                        <td bgcolor="#FF6D3A" style="border-radius:6px; ">
                                          <a href="${resetPasswordLink}"
                                            style="display:inline-block; padding:12px 22px; color:#fff; font-weight:700; text-decoration:none;">
                                            Set my password
                                          </a>
                                        </td>
                                      </tr>
                                    </table>

                                    <p style="font-size:12px; color:#6b7280;">
                                      If the button doesn’t work:<br>
                                      <span style="color:#2563eb;">${resetPasswordLink}</span>
                                    </p>
                                  </td>
                                </tr>

                                <!-- DIVIDER -->
                                <tr style="background:#E8F7FC;">
                                  <td style="padding:16px 32px 0;">
                                    <table role="presentation" width="100%">
                                      <tr>
                                        <td style="border-top:1px solid #C9D4DD; height:1px; line-height:0; font-size:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- WHAT YOU UNLOCK -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:20px 32px;">
                                    <h2>What You Now Unlock (Family Membership)</h2>

                                    <ul style="font-size:14px; line-height:1.8;">
                                      <li>Full digital library of Abdullah & Fatima books (read online)</li>
                                      <li>Complete video catalogue (episodes + shorts)</li>
                                      <li>All web mini-games + occasional bonus levels/events</li>
                                      <li>Unlimited pintable's & activity workbooks for home use</li>
                                      <li>Early access to new titles and seasonal packs (e.g., Ramadan & Eid)</li>
                                      <li>Up to 5 devices access with age-based recommendations (1–4, 5–8, 9–12)</li>
                                    </ul>
                                  </td>
                                </tr>

                                <!-- DIVIDER -->
                                <tr style="background:#E8F7FC;">
                                  <td style="padding:16px 32px 0;">
                                    <table role="presentation" width="100%">
                                      <tr>
                                        <td style="border-top:1px solid #C9D4DD; height:1px; line-height:0; font-size:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- 3 QUICK STEPS -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:20px 32px;">
                                    <h2>2 Quick Steps To Get Started</h2>

                                    <ol style="font-size:14px; line-height:1.8;">
                                      <li>Set your password using the button above.</li>
                                      <li>Explore the library—try a book, a short video, a game, and a printable today.</li>
                                      
                                    </ol>
                                  </td>
                                </tr>

                                <!-- DIVIDER -->
                                <tr style="background:#E8F7FC;">
                                  <td style="padding:16px 32px 0;">
                                    <table role="presentation" width="100%">
                                      <tr>
                                        <td style="border-top:1px solid #C9D4DD; height:1px; line-height:0; font-size:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- ORDER DETAILS -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:20px 32px;">
                                    <h2>Your Order</h2>

                                    <table width="100%" style="font-size:14px; line-height:1.8;">
                                      <tr><td><b>Email:</b></td><td>${email}</td></tr>
                                      <tr><td><b>Plan:</b></td><td>${
                                        data?.subscription?.items?.data[0]
                                          ?.price?.recurring?.interval
                                      } (${
                  data?.subscription?.plan?.billing_scheme
                })</td></tr>
                                      <tr><td><b>Amount:</b></td><td>£${(
                                        data?.amount_total / 100
                                      ).toFixed(2)}</td></tr>
                                      <tr><td><b>Date:</b></td><td>${moment()?.format(
                                        "MM/DD/YYYY"
                                      )}</td></tr>
                                    </table>

                                    <p style="font-size:16px; color:#6b7280;">A receipt has been sent to your email. Keep this for your records.</p>
                                  </td>
                                </tr>

                                <!-- DIVIDER -->
                                <tr style="background:#E8F7FC;">
                                  <td style="padding:16px 32px 0;">
                                    <table role="presentation" width="100%">
                                      <tr>
                                        <td style="border-top:1px solid #C9D4DD; height:1px; line-height:0; font-size:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- SAFETY -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:20px 32px;">
                                    <h2>Safety & Privacy (our promise)</h2>

                                    <ul style="font-size:14px; line-height:1.8;">
                                      <li>Ad-free, no public chat, and no personal data from children.</li>
                                      <li>External links and app stores sit behind a parent gate.</li>
                                      <li>You control profiles, downloads, and printing.</li>
                                    </ul>

                                    
                                  </td>
                                </tr>

                                <!-- DIVIDER -->
                                <tr style="background:#E8F7FC;">
                                  <td style="padding:16px 32px 0;">
                                    <table role="presentation" width="100%">
                                      <tr>
                                        <td style="border-top:1px solid #C9D4DD; height:1px; line-height:0; font-size:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- SUPPORT -->
                                <tr style="background:#E8F7FC;">
                                  <td class="inner" style="padding:20px 32px;">
                                    <h2>Need Help?</h2>
                                    <p style="font-size:14px;">
                                      If you need anything at all, just reply to this email or contact us at
                                      <a href="mailto:support@abdullahandfatima.com" style="color:#2563eb;">
                                        support@abdullahandfatima.com
                                      </a>
                                      <br>We’re here for parents and educators.
                                    </p>

                                    <p style="font-size:14px;">
                                      With gratitude,<br><b>The Abdullah &amp; Fatima Team</b>
                                    </p>

                                    <a href="https://abdullahandfatima.com" style="color:#2563eb;">abdullahandfatima.com</a>
                                  </td>
                                </tr>

                                <!-- BOTTOM BANNER -->
                                <tr>
                                  <td>
                                    <img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763375619/Group_11_1.png"
                                        width="600" style="display:block; width:100%;">
                                  </td>
                                </tr>

                                <!-- SOCIAL ICONS ON GRASS -->
                                <tr>
                                  <td align="center" style="margin:0; padding:0;">
                                    <table role="presentation" cellspacing="0" cellpadding="0"
                                          style="margin-top:-48px; margin-bottom:12px;">
                                      <tr>
                                        <td style="padding:0 6px;"><a href="#"><img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763369621/A1_2.png" width="34"></a></td>
                                        <td style="padding:0 6px;"><a href="#"><img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763369621/A1_3.png" width="34"></a></td>
                                        <td style="padding:0 6px;"><a href="#"><img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763369621/A1_4.png" width="34"></a></td>
                                        <td style="padding:0 6px;"><a href="#"><img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763369622/A1_5.png" width="34"></a></td>
                                        <td style="padding:0 6px;"><a href="#"><img src="https://res.cloudinary.com/dayfv4et9/image/upload/v1763369620/A1_1.png" width="34"></a></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>

                                <!-- FOOTER -->
                                <tr>
                                  <td align="center"
                                      style="padding:14px 24px; background:#f9fafb; font-size:11px; color:#6b7280; font-family:Arial;">
                                    You’re receiving this email because you joined on {{brand_site_url}}.<br>
                                    If this wasn’t you, contact
                                    <a href="mailto:support@abdullahandfatima.com" style="color:#2563eb;">support@abdullahandfatima.com</a>.
                                  </td>
                                </tr>

                              </table>

                            </td>
                          </tr>
                        </table>

                      </body>
                      </html>
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
                type="password"
                label="New Password"
                placeholder="Enter new password"
                className="text-start"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                errorMessage={error}
              />
              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  loader={submitLoad}
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
