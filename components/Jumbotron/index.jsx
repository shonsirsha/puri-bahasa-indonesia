import BareLink from "components/BareLink";
import MainButton from "components/Buttons/MainButton";
import SecondaryButton from "components/Buttons/SecondaryButton";
import RightArrow from "components/Icons/RightArrow";
import Container from "components/Container";
const Jumbotron = () => {
	return (
		<div className="flex flex-col xl:flex-row min-h-[400px]">
			<div className="w-[100%] xl:w-[65%] bg-jumbotron-pattern bg-center bg-no-repeat bg-cover">
				<div className="backdrop-blur-sm py-10 xl:py-0 bg-[#696969]/50 min-h-full flex justify-center">
					<Container>
						<h1 className="font-bold text-5xl text-white">
							Puri Bahasa Indonesia
						</h1>
						<h2 className="font-semibold mt-1 text-white text-2xl">
							School of Indonesian
						</h2>

						<p className="font-medium mt-10 text-white text-lg">
							Trial classes are available!
						</p>

						<div className="w-100 max-w-[380px] mt-6 flex flex-col md:mt-4">
							<MainButton
								className="text-left w-100 "
								text="Check out our classes!"
								href="/visa"
								icon={<RightArrow />}
							/>
							<div className="flex flex-col md:flex-row mt-4">
								<SecondaryButton
									className="text-left w-[100%] mb-4 mr-3 md:w-[50%] xl:mb-0 md:mb-0"
									text="In-person classes"
									href="/visa"
									icon={<RightArrow />}
								/>{" "}
								<SecondaryButton
									className="text-left w-[100%] md:w-[50%]"
									text="Online classes"
									href="/visa"
									icon={<RightArrow />}
								/>
							</div>
						</div>
					</Container>
				</div>
			</div>
			<div className="w-[100%] xl:w-[35%] bg-red-550 flex items-center justify-between px-[80px] py-10 xl:p-6">
				<div className="hidden sm:flex sm:flex-col">
					<BareLink text="Home" className="mb-3" active />
					<BareLink text="The School" className="mb-3" />
					<BareLink text="Classes" className="mb-3" />
					<BareLink text="Sample Lessons" className="mb-3" />
					<BareLink text="Register" className="mb-3" />
					<BareLink text="Contact Us" />
				</div>

				<div className="mx-auto sm:ml-4 sm:mx-0 flex flex-col max-w-[225px] text-sm text-white text-center">
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
