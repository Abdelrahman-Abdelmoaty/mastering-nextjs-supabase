import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	typescript: true,
	apiVersion: "2024-06-20",
});

export async function POST(request: NextRequest) {
	try {
		const cartItems = await request.json();
		const session = await stripe.checkout.sessions.create({
			line_items: cartItems.map((item: any) => ({
				price_data: {
					currency: "usd",
					product_data: {
						name: item.name,
						images: [item.image],
						description: item.description,
					},
					unit_amount: Math.round(item.price * 100),
				},
				quantity: item.quantity,
			})),
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
