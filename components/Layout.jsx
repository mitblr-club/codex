import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Layout({ children }) {

	return (
		<>
			<Navigation />
			<main className="pt-16">{children}</main>
			<Footer />
		</>
	);
};