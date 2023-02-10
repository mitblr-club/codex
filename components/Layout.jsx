import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};