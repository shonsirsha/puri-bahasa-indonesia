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
				className={`drop-shadow-lg transition-all duration-300 bg-red-550 flex ${className} hover:scale-[1.01] hover:translate-x-0 hover:translate-y-[-3px] p-3 lg:py-4 lg:px-4 `}
			>
				<p className="mt-auto text-white font-semibold text-md lg:text-[24px]">
					{text}
				</p>
			</a>
		</Link>
	);
};

export default TileLink;
