"use client";

const CheckoutPage = () => {
	const handleClick = async () => {
		const response = await fetch("/api/create-checkout-session");
		const { url } = await response.json();

		window.location = url;
	};

	return <button onClick={handleClick}>Pay 50 Now</button>;
};

export default CheckoutPage;
