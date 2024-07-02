import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Product from "@/types/product";
import AddToCartButton from "./add-to-cart-button";

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 flex flex-col">
			{/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
				<span className="sr-only">View {product.name}</span>
			</Link> */}
			<Image
				src={product.image}
				alt={product.name}
				width={500}
				height={400}
				className="object-cover w-full h-64"
			/>
			<div className="p-4 bg-background flex flex-col flex-1">
				<h3 className="text-xl font-bold">{product.name}</h3>
				<p className="text-sm text-muted-foreground mb-auto">
					{product.description}
				</p>
				<div className="flex items-center justify-between mt-2">
					<h4 className="text-lg font-semibold">${product.price}</h4>
					<AddToCartButton product={product} />
				</div>
			</div>
		</div>
	);
}
