export default function Icon({ name }: { name: string }) {
	return (
		<div
			className="me-4 h-5 w-5 shrink-0 bg-stone-900 dark:bg-stone-50"
			style={{
				maskImage: `url(app/assets/icons/${name}.svg)`,
				maskSize: "contain",
				maskRepeat: "no-repeat",
				maskPosition: "center",
			}}
		/>
	);
}
