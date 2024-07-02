import { z } from "zod";

const signupSchema = z
	.object({
		email: z.string().min(1, "Email is required").email("Invalid email"),
		password: z
			.string()
			.min(1, "Password is required")
			.regex(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
				"Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character."
			),
		confirmPassword: z.string().min(1, "Confirm password is required"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export default signupSchema;

export type SignupFields = z.infer<typeof signupSchema>;
