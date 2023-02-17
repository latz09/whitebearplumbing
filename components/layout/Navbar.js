import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/Images/whitebearlogo.png';
import { navLinks } from '../../data/navigation';

import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import ButtonLink from '../utils/ButtonLink';

const Navbar = () => {
	return (
		<div className='max-w-7xl mx-auto w-full pb-4 lg:pb-0 lg:py-6 '>
			<div className='grid gap-4 lg:gap-6 '>
				<div className='text-4xl lg:text-6xl'>
					<Logo />
				</div>
				<Navigation />
			</div>
		</div>
	);
};

export default Navbar;

export const Logo = () => {
	const areas = ['MSP', 'Edina', 'Richfield', 'Roseville', 'St Anthony'];
	return (
		<motion.div
			className='place-items-center grid gap-2'
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
		>
			<div className='hidden lg:block'>
				<Image src={logo} alt='' />
			</div>
		</motion.div>
	);
};

const Navigation = () => {
	return (
		<>
			{/* mobile to large */}
			<div className='lg:hidden  flex justify-between mx-4'>
				<span>
					<ButtonLink title='Request a quote' path='/' />
				</span>
				<span className='text-4xl text-blue'>
					<GiHamburgerMenu />
				</span>
			</div>

			{/* large and up */}
			<div className='hidden lg:flex justify-between w-full pb-4 mx-2'>
				{navLinks.map((link, index) => (
					<Link href={link.path} key={index}>
						<span className={`${link.name === 'Contact us' ? 'text-red font-extrabold xl:scale-110 hover:text-light ' : 'text-white'}' text-xl font-semibold tracking-wide text-light uppercase hover:font-bold hover:scale-105 hover:text-red transition duration-700 cursor-pointer cursor-pointer'`}>
							{link.name}
						</span>
					</Link>
				))}
			</div>
		</>
	);
};
