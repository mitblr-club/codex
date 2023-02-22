import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import LoadingPage from "@/components/LoadingPage";
import Navigation from "@/components/Navigation";

export default function Layout({ children }) {
	const router = useRouter()

	if (router.isFallback) {
		return <LoadingPage />
	}

	return (
		<>
			<Navigation />
			<main className="pt-16">{children}</main>
			<Footer />
		</>
	);
};