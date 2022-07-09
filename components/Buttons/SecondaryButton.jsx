import React from "react";
import Link from "next/link";
const SecondaryButton = ({
	className = "",
	text = "ButtonText",
	href = "",
	newTab = false,
	icon = <></>,
}) => {
	const classNames = `"transition ease-in duration-150 bg-white text-red-550 border-none rounded-full py-2 px-4 text-[13px] font-semibold drop-shadow-md ${className} hover:scale-[1.01] hover:translate-x-1 hover:translate-y-[-2px]`;

	const content = (
		<div className="flex justify-between w-100 items-center">
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

export default SecondaryButton;
