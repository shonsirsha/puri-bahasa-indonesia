import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "components/Home";
import Layout from "components/Layout";
export default function Index() {
	return (
		<Layout>
			<Home />
		</Layout>
	);
}
