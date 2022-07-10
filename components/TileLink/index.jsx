import React from "react";
import Link from "next/link";
const TileLink = ({
	width = "100%",
	text = "Text",
	href = "#",
	className = "",
}) => {
	let vwidth = `${width}`;
	return (
		<Link href={href}>
			<a
				className={`drop-shadow-lg transition-all duration-300 py-6 px-4 bg-red-550 flex ${className} hover:scale-[1.01] hover:translate-x-0 hover:translate-y-[-3px]`}
			>
				<p className="mt-auto text-white font-semibold text-2xl">{text}</p>
			</a>
		</Link>
	);
};

export default TileLink;
