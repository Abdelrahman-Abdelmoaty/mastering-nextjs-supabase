import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	typescript: true,
	apiVersion: "2024-06-20",
});

export async function GET() {
	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "T-shirt",
						},
						unit_amount: 2000,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: process.env.NEXT_PUBLIC_URL + "/checkout/success",
			cancel_url: process.env.NEXT_PUBLIC_URL + "/checkout/cancel",
		});

		return NextResponse.json({ id: session.id, url: session.url });
	} catch (error) {
		return NextResponse.json(
			{ error: `Internal Server Error: ${error}` },
			{ status: 500 }
		);
	}
}
