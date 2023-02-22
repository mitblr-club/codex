import Head from "next/head";

import siteConfig from "@/site.config";

export default function Home() {
	return (
		<>
			<Head>
				<title>{siteConfig.title}</title>
				<meta name="description" content={siteConfig.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};
