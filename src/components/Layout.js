import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</>
	);
}
export default Layout;
