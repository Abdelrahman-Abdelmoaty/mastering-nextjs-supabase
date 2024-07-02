"use server";
import { createClient } from "@/lib/supabase/server";
import Product from "@/types/product";

export default async function getProducts(page = 1) {
	const supabase = createClient();

	let { data: products, error } = await supabase
		.from("products")
		.select("*")
		.range((page - 1) * 8, page * 8 - 1);

	if (error) {
		console.error(error);
		return [];
	}

	return products as Product[];
}
