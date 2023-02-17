import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-scree font-nunito'>
			<div className="bg-gradient-to-b from-dark via-dark to-dark/90">
				<Navbar />
			</div>
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
