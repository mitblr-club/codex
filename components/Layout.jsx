import { useRouter } from "next/router";
import LoadingPage from "@/components/LoadingPage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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