"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { LoginFields } from "@/schemas/auth/login";
import { SignupFields } from "@/schemas/auth/signup";

export async function login(loginFields: LoginFields) {
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword(loginFields);

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(signupFields: SignupFields) {
	const supabase = createClient();

	const { error } = await supabase.auth.signUp(signupFields);

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signout() {
	const supabase = createClient();

	const { error } = await supabase.auth.signOut();

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signWithGoogle() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL}/auth/google/callback`,
			queryParams: {
				access_type: "offline",
				prompt: "consent",
			},
		},
	});

	if (error) {
		throw error;
	}

	redirect(data.url);
}
