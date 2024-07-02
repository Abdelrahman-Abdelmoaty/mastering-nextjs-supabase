import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import QueryProvider from "@/contexts/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NexBase",
	description: "Developed by Abdelrahman Abdelmoaty",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
				<QueryProvider>
					<CartProvider>
						<div className="flex-1 grid">{children}</div>
						<Toaster richColors />
					</CartProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
