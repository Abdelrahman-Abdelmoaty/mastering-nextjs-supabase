import { cn } from "@/lib/utils/cn";
import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ className }: { className?: string }) {
	return <LoaderCircle className={cn("animate-spin size-4", className)} />;
}
