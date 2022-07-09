import BareLink from "components/BareLink";
import MainButton from "components/Buttons/MainButton";
import SecondaryButton from "components/Buttons/SecondaryButton";
import RightArrow from "components/Icons/RightArrow";
import React from "react";

const Jumbotron = () => {
	return (
		<div className="flex min-h-[400px]">
			<div className="w-[65%] flex-none bg-jumbotron-pattern bg-center bg-no-repeat bg-cover">
				<div className="backdrop-blur-sm bg-[#696969]/50 min-h-full flex">
					<div className="flex flex-col container px-[80px] min-h-full justify-center">
						<h1 className="font-bold text-5xl text-white">
							Puri Bahasa Indonesia
						</h1>
						<h2 className="font-semibold mt-1 text-white text-2xl">
							School of Indonesian
						</h2>

						<p className="font-medium mt-10 text-white text-lg">
							Trial classes are available!
						</p>

						<div className="w-100 max-w-[380px] mt-4 flex flex-col">
							<MainButton
								className="text-left w-100 "
								text="Check out our classes!"
								href="/visa"
								icon={<RightArrow />}
							/>
							<div className="flex mt-4">
								<SecondaryButton
									className="text-left w-[50%] mr-3"
									text="In-person classes"
									href="/visa"
									icon={<RightArrow />}
								/>{" "}
								<SecondaryButton
									className="text-left w-[50%] "
									text="Online classes"
									href="/visa"
									icon={<RightArrow />}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[35%] flex-none bg-red-550 flex items-center justify-between p-6 px-10">
				<div className="flex flex-col">
					<BareLink text="Home" className="mb-3" active />
					<BareLink text="The School" className="mb-3" />
					<BareLink text="Classes" className="mb-3" />
					<BareLink text="Sample Lessons" className="mb-3" />
					<BareLink text="Register" className="mb-3" />
					<BareLink text="Contact Us" />
				</div>

				<div className="ml-4 flex flex-col max-w-[225px] text-sm text-white text-center">
					<p>
						<span className="font-semibold">
							Puri Bahasa Indonesia is Accredited {"'A'"} by National
							Accreditation Body, Republic of Indonesia,
						</span>{" "}
						as the highest standard of Institution for the Indonesian Language
						Training
					</p>

					<hr className="my-4 border-t-[3px] border-white" />

					<p className="font-semibold">
						The Decree of Accreditation: Number 081/K/SK/AKR/2016{" "}
						<u>Rewarding You A Certificate of competency.</u>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
