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

				<div className="flex mt-8 h-[164px]">
					<TileLink text="School" href={"/school"} className="w-[33.3%]" />
					<TileLink
						text="Activities"
						className="w-[33.3%] mx-4"
						href="/activities"
					/>
					<TileLink
						text="Courses & Fees"
						href="/courses-and-fees"
						className="w-[33.3%]"
					/>
				</div>

				<div className="flex mt-4 h-[164px]">
					<TileLink
						text="Accommodations"
						href={"/accommodations"}
						className="w-[30%] mr-4"
					/>
					<TileLink
						text="Visa Services"
						href="/visa-services"
						className="w-[15%] mr-4"
					/>
					<TileLink text="Register" href="/register" className="w-[25%] mr-4" />
					<TileLink
						text="Students' Reviews"
						href={"/reviews"}
						className="w-[30%]"
					/>
				</div>
			</Container>
		</div>
	);
};

export default Opener;
