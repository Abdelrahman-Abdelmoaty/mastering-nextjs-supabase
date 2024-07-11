import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full pb-6 container">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="flex flex-col justify-center space-y-4">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Discover the Best Products for Your Lifestyle
						</h1>
						<p className="max-w-[600px] text-muted-foreground md:text-xl">
							Browse our curated selection of top-quality products
							and find the perfect fit for your needs.
						</p>
					</div>
					<Link
						href="#featured-products"
						className="inline-flex w-fit h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					>
						Shop Now
					</Link>
				</div>
				<Image
					src="/placeholder.svg"
					width="550"
					height="550"
					alt="Hero"
					className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
				/>
			</div>
		</section>
	);
}
