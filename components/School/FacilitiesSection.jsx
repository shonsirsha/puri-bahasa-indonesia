import React from "react";
import ThirtyFiveSixtyFive from "components/ThirtyFiveSixtyFive";
import CardWithIcon from "components/CardWithIcon";
import BriefCase from "components/Icons/Briefcase";
import ClipBoard from "components/Icons/ClipBoard";
import Smiley from "components/Icons/Smiley";
import WiFi from "components/Icons/WiFi";
import Computer from "components/Icons/Computer";
import Book from "components/Icons/Book";
import Online from "components/Icons/Online";
const FacilitiesSection = () => {
	const LeftContent = <h3 className="text-4xl font-bold">Facilities</h3>;
	const RightContent = (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
			<CardWithIcon
				text="Qualified & experienced teachers"
				svgIcon={<ClipBoard />}
			/>
			<CardWithIcon
				text="Quiet & air-conditioned classes"
				svgIcon={<Smiley />}
			/>
			<CardWithIcon text="Wi-Fi connection" svgIcon={<WiFi />} />
			<CardWithIcon text="Public computer" svgIcon={<Computer />} />
			<CardWithIcon text="Library" svgIcon={<Book />} />
			<CardWithIcon text="Online training programs" svgIcon={<Online />} />
		</div>
	);
	return (
		<section id="facilities">
			<ThirtyFiveSixtyFive
				leftContent={LeftContent}
				rightContent={RightContent}
				className="bg-gray-75"
			/>
		</section>
	);
};

export default FacilitiesSection;
