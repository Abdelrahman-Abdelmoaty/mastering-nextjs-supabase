"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { signout } from "@/actions/auth";
import { toast } from "sonner";
import LoadingSpinner from "../loading-spinner";

export default function SignoutButton() {
	const { mutate, isPending } = useMutation({
		mutationKey: ["signout"],
		mutationFn: signout,
		onSuccess: async () => {
			toast.success("Logged out successfully");
		},
		onError: () => {
			toast.error("Failed to logout");
		},
	});
	return (
		<Button type="submit" onClick={() => mutate()} className="w-[90px]">
			{isPending ? <LoadingSpinner /> : "Sign Out"}
		</Button>
	);
}
