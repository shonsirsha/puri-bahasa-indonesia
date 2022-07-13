/* eslint-disable @next/next/no-html-link-for-pages */
import MainButton from "components/Buttons/MainButton";
import CardWithIcon from "components/CardWithIcon";
import Container from "components/Container";
import BriefCase from "components/Icons/Briefcase";
import Calendar from "components/Icons/Calendar";
import Document from "components/Icons/Document";
import GradCap from "components/Icons/GradCap";
import MagnifyingGlass from "components/Icons/MagnifyingGlass";
import RightArrow from "components/Icons/RightArrow";
import UserGroup from "components/Icons/UserGroup";

const PageDetail = () => {
	return (
		<Container className="py-[48px] bg-gray-75">
			<h2 className="text-xl font-bold mb-8 text-center">
				Extra Activities Offered by Us
			</h2>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
				<CardWithIcon text="Cooking traditional foods" svgIcon={<GradCap />} />
				<CardWithIcon
					text="Traditional dancing classes"
					svgIcon={<BriefCase />}
				/>
				<CardWithIcon
					text="Visiting some objects of interest"
					svgIcon={<UserGroup />}
				/>
				<CardWithIcon
					text="Enjoying art performances"
					svgIcon={<MagnifyingGlass />}
				/>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-16">
				<div className="flex flex-col">
					<p className="font-bold mb-4">About visiting objects of interest</p>
					<CardWithIcon
						text={
							<>
								Objects of interest such as:{" "}
								<b>
									Borobudur temple, Prambanan temple, Sultan Palace, Silver art
									work shop.
								</b>{" "}
								Students may experience{" "}
								<b>to make silver jewellery if they wish.</b> <br />
								<br /> Students also may visit local business centres namely{" "}
								<b>
									the traditional market, local newspaper company and batik work
									shop.
								</b>
							</>
						}
						large
					/>
				</div>

				<div className="flex flex-col">
					<p className="font-bold mb-4">About enjoying art performances</p>
					<CardWithIcon
						text={
							<>
								There are art performances in the evening for students of Puri
								Bahasa Indonesia to enjoy;{" "}
								<b>
									Ramayana ballet with Prambanan temple as the background,
									Javanese Gamelan orchestra and leather puppet show held at
									Sono Budoyo museum
								</b>
								.
							</>
						}
						large
					/>
				</div>
			</div>
			<div className="flex flex-col items-center w-full mt-[56px] ">
				<h2 className="text-xl font-bold mb-[32px]">Sounds Interesting?</h2>
				<div className="flex flex-col w-full md:flex-row items-center justify-center">
					<MainButton
						text="Register"
						href="/register"
						outlined
						className="mb-5 md:mb-0 md:mr-5 max-w-[320px] w-full"
						icon={<RightArrow />}
					/>
					<MainButton
						text="See Our Classes"
						href="/classes"
						outlined
						icon={<RightArrow />}
						className="max-w-[320px] w-full"
					/>
				</div>
			</div>
		</Container>
	);
};

export default PageDetail;
