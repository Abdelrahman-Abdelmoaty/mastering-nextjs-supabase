import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShirtIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import SignoutButton from "./signout-button";
import Cart from "../cart/cart";

export default async function Header() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="container">
			<header className="flex h-20 w-full shrink-0 items-center">
				<Link
					href="/"
					className="mr-6 flex transition hover:scale-105 ease-in-out"
				>
					<ShirtIcon className="h-6 w-6" />
					<span className="sr-only">NexBase</span>
				</Link>
				<div className="ml-auto flex gap-2">
					<Cart />
					{/* <Link
						href="/"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
					>
						Home
					</Link>
					<Link
						href="#"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
					>
						About
					</Link>

					<Link
						href="#"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
					>
						Contact
					</Link> */}
					{user ? (
						<>
							<Button variant="outline" asChild>
								<Link href="/account">Account</Link>
							</Button>
							<SignoutButton />
						</>
					) : (
						<>
							<Button variant="outline" asChild>
								<Link href="/auth/login">Login</Link>
							</Button>
							<Button asChild>
								<Link href="/auth/signup" className="w-[90px]">
									Sign Up
								</Link>
							</Button>
						</>
					)}
				</div>
			</header>
		</div>
	);
}
