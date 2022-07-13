import FiftyFifty from "components/FiftyFifty";
import Layout from "components/Layout";
import PageDetail from "components/Activities/PageDetail";

const Activities = () => {
	const fiftyFiftyContent = (
		<p className="mt-3">
			<b>
				Besides class activities Puri Bahasa Indoensia arranges extra activities
			</b>{" "}
			like cooking traditional food, visiting some objects of interest i.e.
			Borobudur temple, and more.
		</p>
	);
	return (
		<Layout
			title="Activities | Puri Bahasa Indonesia"
			description="For entry to Indonesia, your passport must be valid for at least 6
			months from the date of entry, even if you are staying only a month."
			keywords="visa, indonesia visa, indonesian visa, visa indonesia, social-cultural visa, social-cultural visas indonesia, puri bahasa indonesia visa, business visas indonesia, yogyakarta visa, puri bahasa indonesia, puri bahasa visa"
		>
			<FiftyFifty
				title="Activities"
				desc={fiftyFiftyContent}
				image="bg-activities"
			/>
			<PageDetail />
		</Layout>
	);
};

export default Activities;
