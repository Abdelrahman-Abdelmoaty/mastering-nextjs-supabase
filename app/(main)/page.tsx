import Products from "@/components/product/products";
import Hero from "@/components/home/hero";
import getProducts from "@/actions/getProducts";

export default async function Home() {
	const products = await getProducts();

	return (
		<div className="flex flex-col">
			<Hero />
			<Products products={products} />
		</div>
	);
}
