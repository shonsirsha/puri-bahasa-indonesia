import FiftyFifty from "components/FiftyFifty";
import Layout from "components/Layout";
import PageDetail from "components/VisaServices/PageDetail";

const Visa = () => {
	const fiftyFiftyContent = (
		<p className="mt-3">
			<b>For entry to Indonesia</b>, your passport must be valid for at least 6
			months from the date of entry, even if you are staying only a month.
		</p>
	);
	return (
		<Layout
			title="Visa Services | Puri Bahasa Indonesia"
			description="For entry to Indonesia, your passport must be valid for at least 6
			months from the date of entry, even if you are staying only a month."
			keywords="visa, indonesia visa, indonesian visa, visa indonesia, social-cultural visa, social-cultural visas indonesia, puri bahasa indonesia visa, business visas indonesia, yogyakarta visa, puri bahasa indonesia, puri bahasa visa"
		>
			<FiftyFifty title="Visa Services" desc={fiftyFiftyContent} />
			<PageDetail />
		</Layout>
	);
};

export default Visa;
