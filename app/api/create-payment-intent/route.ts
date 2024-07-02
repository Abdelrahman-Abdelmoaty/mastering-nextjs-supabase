import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	typescript: true,
	apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
	const { amount } = await req.json();

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount,
			currency: "usd",
			automatic_payment_methods: { enabled: true },
		});

		return NextResponse.json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		// console.error("Internal Error:", error);
		// Handle other errors (e.g., network issues, parsing errors)
		return NextResponse.json(
			{ error: `Internal Server Error: ${error}` },
			{ status: 500 }
		);
	}
}
