// app/api/create-subscription/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { priceId, customerId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],

      ...(customerId && { customer: customerId }),

      // Stripe Checkout only allows this value in subscription mode
      subscription_data: {
        payment_behavior: "allow_incomplete",
        trial_settings: {
          end_behavior: {
            missing_payment_method: "pause",
          },
        },
      },

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership`,
    });

    console.log("🎉 Checkout Session Created:");
    console.log("Email:", session.customer_details?.email);
    console.log("Session ID:", session.id);
    console.log("Customer ID:", session.customer);
    console.log("Subscription ID:", session.subscription);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("❌ Stripe subscription error:", error);
    console.error("Type:", error.type);
    console.error("Message:", error.message);
    console.error("Decline Code:", error.decline_code || "N/A");
    console.error("Payment Method:", error.payment_method?.id || "N/A");

    return NextResponse.json(
      {
        error: error.message,
        declineCode: error.decline_code || null,
      },
      { status: 500 }
    );
  }
}
