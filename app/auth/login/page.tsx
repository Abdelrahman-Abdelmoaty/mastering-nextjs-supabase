import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/forms/login-form";
import { ShirtIcon } from "lucide-react";
import SignWithGoogle from "@/components/sign-with-google";

export default function Login() {
	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<Link href="/" className="flex items-center gap-2">
						<ShirtIcon className="h-6 w-6" />
						<span className="text-lg font-bold">NexBase</span>
					</Link>
					<h1 className="text-3xl font-bold text-center">Login</h1>
					<div className="grid gap-4">
						<LoginForm />
						<SignWithGoogle>Login with Google</SignWithGoogle>
					</div>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href="/auth/signup" className="underline">
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden bg-muted lg:block">
				<Image
					src="/placeholder.svg"
					alt="Image"
					width="1920"
					height="1080"
					className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}