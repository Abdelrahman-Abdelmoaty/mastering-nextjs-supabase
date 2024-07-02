"use client";
import { login, signup } from "@/actions/auth";
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
import signupSchema, { SignupFields } from "@/schemas/auth/signup";

export default function SignupForm() {
	const methods = useForm<SignupFields>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { mutate, isPending } = useMutation({
		mutationKey: ["signup"],
		mutationFn: signup,

		onSuccess: async (data) => {
			console.log(data);
			toast.success("Account created successfully");
		},

		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = (data: SignupFields) => {
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

				<FormField
					control={methods.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
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
