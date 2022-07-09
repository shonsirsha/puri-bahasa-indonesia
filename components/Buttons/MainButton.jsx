import React from "react";
import Link from "next/link";
const MainButton = ({
	className = "",
	text = "ButtonText",
	href = "",
	newTab = false,
	icon = <></>,
}) => {
	const classNames = `"transition ease-in duration-150 bg-red-550 text-white py-4 px-4 text-md font-medium drop-shadow-lg ${className} hover:scale-[1.01] hover:translate-x-1 hover:translate-y-[-2px]`;

	const content = (
		<div className="flex justify-between items-center w-100">
			<p> {text}</p>
			{icon}
		</div>
	);
	if (!href) {
		return <button className={classNames}>{content}</button>;
	}

	return (
		<Link href={href}>
			<a
				target={newTab ? `_blank` : ``}
				rel="noopener noreferrer"
				className={classNames}
			>
				{content}
			</a>
		</Link>
	);
};

export default MainButton;
