import AccountForm from "@/components/forms/account-form";
import { createClient } from "@/lib/supabase/server";

export default async function Account() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return <AccountForm user={user} />;
}
