import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ className }: { className?: string }) {
	return <LoaderCircle className={cn("animate-spin size-4", className)} />;
}
