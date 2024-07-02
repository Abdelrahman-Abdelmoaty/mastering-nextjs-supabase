"use client";
import { login } from "@/actions/auth";
import loginSchema, { LoginFields } from "@/schemas/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import LoadingSpinner from "../loading-spinner";

export default function LoginForm() {
	const methods = useForm<LoginFields>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { mutate, isPending } = useMutation({
		mutationKey: ["login"],
		mutationFn: login,

		onSuccess: async (data) => {
			console.log(data);
			toast.success("Logged in successfully");
		},

		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = (data: LoginFields) => {
		mutate(data);
	};

	return (
		<Form {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="contents">
				<FormField
					control={methods.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="m@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={methods.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="••••••••"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">{isPending ? <LoadingSpinner /> : "Submit"}</Button>
			</form>
		</Form>
	);
}
