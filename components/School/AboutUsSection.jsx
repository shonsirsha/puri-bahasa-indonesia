import React from "react";
import ThirtyFiveSixtyFive from "components/ThirtyFiveSixtyFive";
import MainButton from "components/Buttons/MainButton";
const AboutUsSection = () => {
	const LeftContent = <h3 className="text-4xl font-bold">About Us</h3>;
	const RightContent = (
		<div className="flex flex-col">
			<p>
				<b>Puri Bahasa Indonesia</b> is an independent school located in{" "}
				<a href="#yogyakarta" className="underline italic text-red-550">
					Yogyakarta, in Central Java,
				</a>{" "}
				a very historic city, considered to be the cultural and artistic
				heartland of Java.
			</p>

			<p className="mt-3">
				The educational philosophy and academic approach of Puri Bahasa
				Indonesia is based on the concept that a language, i.e. {`"`}Bahasa
				Indonesia{`"`} is best learnt as a second language within its
				socio-cultural setting. <b>Puri Bahasa Indonesia</b> applies
				communicative approach methods and the materials are tailored to
				students{"'"} needs and purposes in the Indonesian training.
			</p>

			<p className="mt-3">
				<b>The school is located in a purpose-built facility</b>, designed to
				accommodate both individual and group study in{" "}
				<b>
					a pleasant and peaceful environment, but nonetheless situated within
					minutes of the main cultural, tourist accommodation and shopping
					areas.
				</b>
			</p>

			<div className="flex flex-col mt-8 md:flex-row w-full items-center">
				<MainButton
					outlined
					href="#facilities"
					className="w-[100%] lg:w-[280px]"
					text="See Facilities"
				/>
				<MainButton
					outlined
					href="#teaching-staffs"
					className="w-[100%] mt-4 lg:w-[280px] md:mt-0 md:ml-3"
					text="Teaching Staffs"
				/>
			</div>
		</div>
	);
	return (
		<section id="#about-us">
			<ThirtyFiveSixtyFive
				leftContent={LeftContent}
				rightContent={RightContent}
				className="bg-gray-75"
			/>
		</section>
	);
};

export default AboutUsSection;
