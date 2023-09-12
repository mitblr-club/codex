import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import siteConfig from "@/site.config";

export default function Register() {
	const router = useRouter();
	useEffect(() => {
		router.replace("https://www.hackerrank.com/forfeit-12092023");
	});

	return (
		<Head>
			<title>{`Forfeit | ${siteConfig.headerTitle}`}</title>
			<meta
				name="og:title"
				content={`Forfeit | ${siteConfig.headerTitle}`}
			/>
			<meta name="og:description" content={siteConfig.description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
