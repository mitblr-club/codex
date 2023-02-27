import { Analytics } from "@vercel/analytics/react";

import Layout from "@/components/Layout";
import ProgressBar from "@/components/ProgressBar";
import "@/styles/globals.css";
import "@/styles/notion.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<ProgressBar />
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</>
	);
};
