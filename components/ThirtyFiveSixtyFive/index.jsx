import React from "react";
import Container from "components/Container";

const ThirtyFiveSixtyFive = ({
	leftContent = <h3 className="text-2xl font-bold">Left Content</h3>,
	rightContent = (
		<p className="flex-wrap">
			Right Content ContentCon tentCont entContentConte ntContentCon tentCo
			ntentCon tent Content Content Content Content Content Content Content
		</p>
	),
	className = "",
}) => {
	const LeftSection = ({ content }) => (
		<div className="flex w-[full] mb-8 md:mb-0 md:w-[40%] lg:w-[20%]">
			{content}
		</div>
	);
	const RightSection = ({ content }) => (
		<div className="flex w-full md:w-[60%] lg:w-[80%]">{content}</div>
	);

	return (
		<Container className={`${className} py-[48px] flex flex-col md:flex-row`}>
			<LeftSection content={leftContent} />
			<RightSection content={rightContent} />
		</Container>
	);
};

export default ThirtyFiveSixtyFive;
