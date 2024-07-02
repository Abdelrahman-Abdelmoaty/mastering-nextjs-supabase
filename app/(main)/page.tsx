import Products from "@/components/product/products";
import Hero from "@/components/home/hero";
import getProducts from "@/actions/getProducts";
import CheckoutPage from "@/components/checkout/checkout-page";

export default async function Home() {
	const products = await getProducts();

	return (
		<div className="flex flex-col">
			<Hero />
			<CheckoutPage /> 
			<Products products={products} />
		</div>
	);
}
