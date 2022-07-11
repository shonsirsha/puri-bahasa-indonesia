import Container from "components/Container";
import TileLink from "components/TileLink";
import React from "react";

const Opener = () => {
	return (
		<div className="flex" id="#opener">
			<Container className="py-[48px]">
				<p className="text-regular">
					<b>Puri Bahasa Indonesia (PBI)</b> is an Indonesian School whose goal
					is to aid foreigners to learn the Indonesian Language{" "}
					<b>in order to truly communicate and connect with Indonesian</b>{" "}
					within its socio-cultural setting.
				</p>

				<div className="flex mt-8 flex-col md:flex-row md:h-[164px]">
					<TileLink text="School" href={"/school"} className="w-[100%]" />
					<TileLink
						text="Activities"
						className="w-[100%] my-4 md:mx-4 md:my-0"
						href="/activities"
					/>
					<TileLink
						text="Courses & Fees"
						href="/courses-and-fees"
						className="w-[100%]"
					/>
				</div>

				<div className="flex mt-4 flex-col md:flex-row md:h-[164px]">
					<TileLink
						text="Accommodations"
						href={"/accommodations"}
						className="w-[100%] md:w-[30%] mb-4 md:mr-4 md:mb-0"
					/>
					<TileLink
						text="Visa Services"
						href="/visa-services"
						className="w-[100%] md:w-[20%] mb-4 md:mr-4 md:mb-0"
					/>
					<TileLink
						text="Register"
						href="/register"
						className="w-[100%] md:w-[20%] mb-4 md:mr-4 md:mb-0"
					/>
					<TileLink
						text="Students' Reviews"
						href={"/reviews"}
						className="w-[100%] md:w-[30%]"
					/>
				</div>
			</Container>
		</div>
	);
};

export default Opener;
