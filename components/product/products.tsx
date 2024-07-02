"use client";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import ProductCard from "./product-card";
import Product from "@/types/product";
import { useIntersectionObserver } from "usehooks-ts";

import getProducts from "@/actions/getProducts";
import LoadingSpinner from "../loading-spinner";

export default function Products({ products: initialProducts }: { products: Product[] }) {
	const [products, setProducts] = useState(initialProducts);

	const [sortBy, setSortBy] = useState("featured");

	const filteredProducts = useMemo(() => {
		return products.sort((a, b) => {
			switch (sortBy) {
				case "price-asc":
					return a.price - b.price;
				case "price-desc":
					return b.price - a.price;
				default:
					return 0;
			}
		});
	}, [products, sortBy]);

	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0,
		root: null,
		rootMargin: "0px",
	});

	useEffect(() => {
		async function loadMoreProducts() {
			setLoading(true);
			const newProducts = await getProducts(page + 1);
			setProducts((prev) => [...prev, ...newProducts]);
			setLoading(false);
		}
		if (isIntersecting) {
			loadMoreProducts();
			setPage(page + 1);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isIntersecting]);

	return (
		<section id="featured-products" className="w-full py-10 bg-muted">
			<div className="container">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Featured Products
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Browse our curated selection of top-quality products and find
							the perfect fit for your needs.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-center gap-4 w-full">
						<div className="relative flex-1">
							<div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search products..."
								className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
							/>
						</div>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" className="flex-1 sm:flex-none">
									<ArrowUpDownIcon className="w-4 h-4 mr-2" />
									Sort by:{" "}
									{sortBy === "featured"
										? "Featured"
										: sortBy === "price-asc"
										? "Price: Low to High"
										: "Price: High to Low"}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[200px]" align="end">
								<DropdownMenuRadioGroup
									value={sortBy}
									onValueChange={setSortBy}
								>
									<DropdownMenuRadioItem value="featured">
										Featured
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="price-asc">
										Price: Low to High
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="price-desc">
										Price: High to Low
									</DropdownMenuRadioItem>
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				<div ref={ref}>
					{loading && (
						<div className="flex justify-center my-12">
							<LoadingSpinner className="size-6" />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
