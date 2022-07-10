import Jumbotron from "components/Jumbotron/index";
import ContactUs from "./ContactUs";
import Opener from "./Opener";
const Home = () => {
	return (
		<div className="flex flex-col">
			<Jumbotron />
			<Opener />
			<ContactUs />
		</div>
	);
};

export default Home;
