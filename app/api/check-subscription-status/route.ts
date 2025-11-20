// app/api/check-subscription-status/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { customerId } = await req.json();

    if (!customerId) {
      return NextResponse.json(
        { error: "Missing customerId" },
        { status: 400 }
      );
    }

    // Get all subscriptions for the customer
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "all", // includes active, past_due, incomplete, canceled
      expand: [
        "data.default_payment_method",
        "data.latest_invoice.payment_intent",
      ],
    });

    if (!subscriptions.data.length) {
      return NextResponse.json({
        message: "No subscriptions found for this customer.",
      });
    }

    // Map subscription info to include payment status
    const subscriptionStatuses = subscriptions.data.map((sub) => {
      const paymentIntent = sub.latest_invoice?.payment_intent as
        | Stripe.PaymentIntent
        | undefined;

      return {
        subscriptionId: sub.id,
        status: sub.status, // active, past_due, incomplete, canceled, etc.
        current_period_end: sub.current_period_end,
        cancel_at_period_end: sub.cancel_at_period_end,
        default_payment_method: sub.default_payment_method
          ? {
              id: (sub.default_payment_method as Stripe.PaymentMethod).id,
              card: (sub.default_payment_method as Stripe.PaymentMethod).card,
            }
          : null,
        latest_payment_status: paymentIntent
          ? {
              id: paymentIntent.id,
              amount: paymentIntent.amount,
              currency: paymentIntent.currency,
              status: paymentIntent.status, // requires_payment_method, succeeded, failed
              last_payment_error: paymentIntent.last_payment_error
                ? {
                    code: paymentIntent.last_payment_error.code,
                    message: paymentIntent.last_payment_error.message,
                    decline_code: paymentIntent.last_payment_error.decline_code,
                  }
                : null,
            }
          : null,
      };
    });

    return NextResponse.json({ customerId, subscriptionStatuses });
  } catch (error: any) {
    console.error("❌ Stripe subscription status error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
