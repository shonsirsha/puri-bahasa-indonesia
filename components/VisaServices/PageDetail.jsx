/* eslint-disable @next/next/no-html-link-for-pages */
import CardWithIcon from "components/CardWithIcon";
import Container from "components/Container";
import BriefCase from "components/Icons/Briefcase";
import Calendar from "components/Icons/Calendar";
import Document from "components/Icons/Document";
import GlobeVisa from "components/Icons/GlobeVisa";
import GradCap from "components/Icons/GradCap";
import MagnifyingGlass from "components/Icons/MagnifyingGlass";
import UserGroup from "components/Icons/UserGroup";
import World from "components/Icons/World";

const PageDetail = () => {
	return (
		<Container className="py-[48px] bg-gray-75">
			<CardWithIcon
				text={
					<>
						<b>Puri Bahasa Indonesia</b> has years of experience in arranging
						and sponsoring applications for the various types of visa available
						in Indonesia
					</>
				}
				svgIcon={<World big />}
				large
				className="mb-10"
			/>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
				<CardWithIcon
					text="6 month Social-Cultural Visa"
					svgIcon={<GlobeVisa />}
				/>
				<CardWithIcon text="1 Year Student Visa" svgIcon={<GradCap />} />
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-16">
				<CardWithIcon
					text={
						<>
							<b>Puri Bahasa Indonesia</b> offers an{" "}
							<b>all-inclusive service</b>, processing the application from
							start to finish, and assisting with visa renewal where
							appropriate.
						</>
					}
					svgIcon={<Document big />}
					large
				/>

				<CardWithIcon
					text={
						<>
							The visa arrangement process <b>takes a relatively short time</b>:
							a six month Social-Cultural Visa{" "}
							<b>takes less than a week to process.</b>
						</>
					}
					svgIcon={<Calendar big />}
					large
				/>
			</div>

			<p className="font-semibold mt-5">
				Please, do not hesitate to{" "}
				<a
					href="/#contact-us"
					className="text-red-550"
					target={"_blank"}
					rel="norefferer noopener"
				>
					<u>contact us</u>
				</a>{" "}
				for further information.
			</p>
		</Container>
	);
};

export default PageDetail;
