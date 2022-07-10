import MainNav from "./MainNav";
import TopList from "./TopList";

const Navbar = ({ onMenuOpened }) => {
	return (
		<div className="w-100 flex flex-col">
			<TopList />
			<MainNav onMenuOpened={onMenuOpened} />
		</div>
	);
};

export default Navbar;
