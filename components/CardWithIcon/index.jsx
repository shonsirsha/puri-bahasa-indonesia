const CardWithIcon = ({
	svgIcon = <></>,
	text = "Text",
	className = "",
	large = false,
}) => {
	return (
		<div
			className={`flex rounded-md padding ${
				large ? `p-8` : `p-6`
			} items-center bg-white drop-shadow-md ${className}`}
		>
			<div className={`text-red-550 ${large ? `mr-5` : `mr-3`}`}>{svgIcon}</div>
			<p className="text-lg">{text}</p>
		</div>
	);
};

export default CardWithIcon;
