import React from "react";
import Link from "next/link";
const BareLink = ({
	text = "Link",
	url = "#",
	newTab = false,
	className = "",
	active = false,
}) => {
	return (
		<Link href={url} passHref>
			<a
				className={`transition duration-200 text-base font-medium ${className} hover:translate-x-[4px]`}
			>
				<span
					className={`${
						active && `active`
					} link-underline text-white inline-block`}
				>
					{text}
				</span>
			</a>
		</Link>
	);
};

export default BareLink;
