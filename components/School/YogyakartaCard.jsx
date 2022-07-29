import MainButton from "components/Buttons/MainButton";
import Container from "components/Container";

const YogyakartaCard = () => {
	const Card = () => (
		<div
			className="w-full max-w-[860px] flex drop-shadow-xl rounded-lg bg-white flex-col md:flex-row"
			id="yogyakarta"
		>
			<div className="w-[100%] md:w-[30%] bg-no-repeat bg-[center_bottom_-120px] bg-yogyakarta rounded-tl-lg rounded-bl-lg min-h-[320px] md:bg-[center_bottom_0px]"></div>
			<div className="w-[100%] md:w-[70%] flex flex-col p-12">
				<h3 className="text-4xl font-bold">Yogyakarta</h3>
				<p className="font-semibold text-gray-400 text-2xl mt-2">ꦔꦪꦺꦴꦒꦾꦏꦂꦠ</p>
				<p className="mt-5">
					<b>Yogyakarta</b> is the location of the royal court of the Sultan of
					Yogyakarta, situated in the Keraton, an enclosed city in the centre of
					Yogyakarta, and near to the school.
				</p>
				<p className="mt-3">
					<b>The school is located in a purpose-built facility</b>, designed to
					accommodate both individual and group study in{" "}
					<b>
						a pleasant and peaceful environment, but nonetheless situated within
						minutes of the main cultural, tourist accommodation and shopping
						areas.
					</b>
					<b>It takes 15 minutes to walk from Malioboro street to the east.</b>{" "}
				</p>
				<p className="mt-3">
					Please kindly click the {`"`}Open Map{`"`} button below to see our
					class building on <b>Google Maps</b>
				</p>

				<div className="flex mt-8 flex-col md:mt-6 md:flex-row">
					<MainButton
						text="See Accommodations"
						href="/accommodations"
						className="py-2 mb-3 md:mr-3 md:mb-0"
					/>
					<MainButton
						text="Open Map"
						href="https://www.google.com/maps/place/Puri+Bahasa+Indonesia/@-7.8009154,110.3721278,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a5780e0b756a1:0x577afae83982df7b!8m2!3d-7.8009235!4d110.3743166"
						newTab
						className="py-2"
					/>
				</div>
			</div>
		</div>
	);

	return (
		<Container className="bg-white py-[48px] items-center relative">
			<div className="bg-gray-75 absolute w-full h-[50%] bottom-0"></div>
			<Card />
		</Container>
	);
};

export default YogyakartaCard;
