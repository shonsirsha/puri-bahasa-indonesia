import React from "react";
import Head from "next/head";

const Layout = ({
	title = "Puri Bahasa Indonesia",
	description = "Description (for SEO)",
	keywords = "indonesian school, indonesian language school, puri bahasa, puri indonesian, indonesian language learning, indonesian classes, indonesian language training",
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="shortcut icon" href="imgs/favicon.ico" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>

			<div>{children}</div>
		</>
	);
};
export default Layout;