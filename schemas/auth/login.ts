import { z } from "zod";

const loginSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z.string().min(1, "Password is required"),
});

export default loginSchema;

export type LoginFields = z.infer<typeof loginSchema>;
