import FiftyFifty from "components/FiftyFifty";
import Layout from "components/Layout";
import AboutUsSection from "components/School/AboutUsSection";
import HighlightSection from "components/School/HighlightSection";
import FacilitiesSection from "components/School/FacilitiesSection";
import TeachingStaffs from "components/School/TeachingStaffs";
import YogyakartaCard from "components/School/YogyakartaCard";

const School = () => {
	const fiftyFiftyContent = (
		<div className="flex flex-col">
			<p className="mt-3">
				<b>Puri Bahasa Indonesia (PBI)</b> is an Indonesian School whose goal is
				to aid foreigners to learn the Indonesian Language{" "}
				<b>in order to truly communicate and connect with Indonesian</b> within
				its socio-cultural setting.
			</p>
			<p className="mt-2">
				<strong>Puri Bahasa Indonesia</strong> prides ourselves on the warm and
				friendly atmosphere at our school and is committed to looking after our
				students
				{"'"} welfare during their visit.
			</p>
		</div>
	);
	return (
		<Layout
			title="School | Puri Bahasa Indonesia"
			description={`Puri Bahasa Indonesia is an independent school located in Yogyakarta, in Central Java, a very historic city, considered to be the cultural and artistic heartland of Java. The educational philosophy and academic approach of Puri Bahasa Indonesia is based on the concept that a language, i.e. "Bahasa Indonesia" is best learnt as a second language within its socio-cultural setting.`}
			keywords="bahasa indonesia school yogyakarta, indonesian language school yogyakarta, indonesian language school, indonesian school yogyakarta, yogyakarta bahasa school, puri school, puri bahasa indonesia, school indonesian, social-cultural indonesian school, social-cultural schools indonesia, language school indonesia, yogyakarta school, indonesian language school for foreigners, foreign school indonesia, online classes indonesian, online class bahasa indonesia, learn indonesian, learn bahasa, learn bahasa indonesia"
		>
			<FiftyFifty
				title="School"
				desc={fiftyFiftyContent}
				image="bg-activities"
			/>

			<AboutUsSection />
			<HighlightSection />
			<FacilitiesSection />
			<TeachingStaffs />
			<YogyakartaCard />
		</Layout>
	);
};

export default School;
