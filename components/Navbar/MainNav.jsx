import Container from "components/Container";
import Burger from "components/Icons/Burger";
import Image from "next/image";

const MainNav = ({ onMenuOpened }) => {
	return (
		<Container className="py-5">
			<div className="flex justify-between">
				<Image
					src={"/img/pbi.svg"}
					width="288px"
					height="53px"
					alt="PBI Logo"
					layout="fixed"
				/>

				<MenuButton
					onClick={() => {
						onMenuOpened(true);
					}}
				/>
			</div>
		</Container>
	);
};

const MenuButton = ({ onClick = () => {} }) => {
	return (
		<button onClick={onClick} className="flex items-center p-3 pr-0">
			<Burger />
			<p className="text-md ml-2">Menu</p>
		</button>
	);
};

export default MainNav;
