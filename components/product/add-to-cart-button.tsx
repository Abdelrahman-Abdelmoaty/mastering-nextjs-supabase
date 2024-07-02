"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Product from "@/types/product";
import useCart from "@/contexts/CartProvider";
import { toast } from "sonner";

export default function AddToCartButton({ product }: { product: Product }) {
	const { addToCart } = useCart();
	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		addToCart({
			...product,
			quantity: 1,
		});
		toast.success(`${product.name} added to cart`);
	};

	return (
		<Button size="sm" onClick={handleAddToCart}>
			<ShoppingCartIcon className="w-4 h-4 mr-2" />
			Add to Cart
		</Button>
	);
}
