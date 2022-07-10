import { useState } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Menu from "components/Menu";

const Layout = ({
	title = "Puri Bahasa Indonesia",
	description = "Description (for SEO)",
	keywords = "indonesian school, indonesian language school, puri bahasa, puri indonesian, indonesian language learning, indonesian classes, indonesian language training",
	children,
}) => {
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="shortcut icon" href="imgs/favicon.ico" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>

			<div className="relative">
				<Menu opened={menuOpened} onMenuOpened={setMenuOpened} />
				<Navbar onMenuOpened={setMenuOpened} />
				<div>{children}</div>
			</div>
		</>
	);
};
export default Layout;
