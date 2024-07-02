"use client";

import { signWithGoogle } from "@/actions/auth";
import { Button } from "./ui/button";

export default function SignWithGoogle({ children }: { children: React.ReactNode }) {
	return (
		<Button variant="outline" className="w-full" onClick={() => signWithGoogle()}>
			{children}
		</Button>
	);
}
