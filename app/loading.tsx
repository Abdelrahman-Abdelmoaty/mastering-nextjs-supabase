import LoadingSpinner from "@/components/loading-spinner";

export default function Loading() {
	return (
		<div className="w-screen h-screen grid place-items-center">
			<LoadingSpinner className="size-6" />
		</div>
	);
}
