"use client";

import Product from "@/types/product";
import { createContext, useState, useEffect, useContext } from "react";

interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (item: CartItem) => void;
	clearCart: () => void;
	getCartTotal: () => string;
}

export const CartContext = createContext<CartContextType>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {},
	getCartTotal: () => "0",
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	useEffect(() => {
		const localCartItems = localStorage.getItem("cartItems");
		if (localCartItems) {
			setCartItems(JSON.parse(localCartItems));
		}
	}, []);

	useEffect(() => {
		if (cartItems.length > 0) {
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
		}
	}, [cartItems]);

	const addToCart = (item: CartItem) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

		if (isItemInCart) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, quantity: 1 }]);
		}
	};

	const removeFromCart = (item: CartItem) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

		if (isItemInCart?.quantity === 1) {
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
		} else {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				)
			);
		}
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const getCartTotal = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				getCartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export default useCart;
