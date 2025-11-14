import nodemailer from "nodemailer";
import "server-only";

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json();

    if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
      throw new Error("Email credentials missing.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, // MUST be a Google App Password
      },
    });

    await transporter.sendMail({
      from: `"ANF Team" <${process.env.EMAIL_USERNAME}>`,
      to,
      subject,
      html,
    });

    return Response.json({ success: true });
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
