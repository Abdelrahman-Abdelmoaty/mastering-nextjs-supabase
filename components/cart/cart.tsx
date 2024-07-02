"use client";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ShoppingBag, X } from "lucide-react";
import useCart from "@/contexts/CartProvider";
import Image from "next/image";

export default function Cart() {
	const { cartItems, clearCart, removeFromCart, getCartTotal } = useCart();
	return (
		<Sheet>
			<Button variant="ghost" asChild>
				<SheetTrigger className="relative">
					<ShoppingBag />
					<div className="absolute bottom-0 right-2.5 -mt-2 -mr-2 bg-primary text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
						{cartItems.length}
					</div>
				</SheetTrigger>
			</Button>
			<SheetContent className="flex flex-col overflow-y-scroll">
				<SheetHeader>
					<SheetTitle>Your Cart</SheetTitle>
					<SheetDescription>
						{cartItems.length ? (
							<p>{cartItems.length} items in your cart</p>
						) : (
							<p>Your cart is empty</p>
						)}
					</SheetDescription>
				</SheetHeader>
				{cartItems?.length > 0 && (
					<div className="mb-auto my-4 flex flex-col gap-4">
						{cartItems.map((item) => (
							<div key={item.id} className="flex gap-2 items-center">
								<Image
									src={item.image}
									alt={item.name}
									width={75}
									height={75}
								/>
								<div className="flex-1">
									<p className="font-semibold">{item.name}</p>
									<p className="text-muted-foreground">${item.price}</p>
									<div className="flex items-center justify-between">
										<p className="mr-2">Qty: {item.quantity}</p>
										<Button
											variant="destructive"
											size="sm"
											onClick={() => removeFromCart(item)}
										>
											<X className="size-4" />
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
				{cartItems?.length > 0 && (
					<SheetFooter>
						<div className="flex items-center justify-between w-full mt-4">
							<p>Total: {getCartTotal()}$</p>
							<Button onClick={clearCart}>Clear Cart</Button>
						</div>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	);
}
