import { CircleX } from "lucide-react";
import Link from "next/link";

export default function Cancel() {
	return (
		<div className="flex flex-col items-center justify-center bg-background py-12 lg:py-24">
			<div className="mx-auto max-w-md text-center">
				<CircleX className="mx-auto h-12 w-12 text-red-500" />
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
					Payment Cancelled
				</h1>
				<p className="mt-4 text-muted-foreground">
					Your payment has been cancelled. Please try again.
				</p>
				<div className="mt-6">
					<Link
						href="/"
						className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						Return to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}
