import Header from "@/components/header/header";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<div className="flex-1">{children}</div>
		</>
	);
}
