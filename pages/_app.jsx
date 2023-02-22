import { Analytics } from "@vercel/analytics/react";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/notion.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</>
	);
};
