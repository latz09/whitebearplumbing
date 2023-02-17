import { rates } from '../../data/rates';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsFillFileTextFill } from 'react-icons/bs';
import ButtonLink from '../utils/ButtonLink';

const Rates = () => {
	return (
		<motion.div
			className='grid gap-8 tracking-wider max-w-5xl mx-auto'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
		>
			<RatesHeading />
		
			<div className='grid gap-12 lg:gap-0  lg:flex lg:justify-between lg:items-center '>
				<div className='order-2 lg:order-1 grid place-items-center'>
					<ButtonLink title={'Contact Now'} path={'/'} />
				</div>
				<div className='order-1 lg:order-2 grid place-items-center'>
					<WarrantyLink />
				</div>
			</div>
		</motion.div>
	);
};

export default Rates;

const RatesHeading = () => {
	return (
		<div className='grid gap-2 tracking-wider text-center ont-tinos font-semibold mx-2'>
			<span className='text-3xl lg:text-5xl font-semibold font-tinos text-center'>
				Upfront Pricing
			</span>
			<span className="text-lg lg:text-4xl text-dark text-center">There are no surprises when you contract with White Bear Plumbing.</span>
			<div className='text-lg lg:text-2xl text-dark grid '>
			
				<span className="py-4">
					 Our estimates are completely transparent, and we will never charge you for
					work that you did not authorize beforehand.  	Contact White Bear Plumbing when time is of the essence and price is a
					concern. You will discover why so many in the White Bear Lake area
					have chosen us to be their go-to plumbing company.
				</span>
			
			
			</div>
		</div>
	);
};

const RatesCard = ({ rate }) => {
	return (
		<div className='grid gap-1 text-center p-4 rounded border border-blue/40 h-full hover:border-blue/100 transtion duration-700 '>
			<span className='text-2xl font-semibold font-tinos '>{rate.name}</span>
			<span className='text-dark font-semibold'>{rate.description}</span>
		</div>
	);
};

const WarrantyLink = () => {
	return (
		<div>
			<Link href='/'>
				<button className='font-semibold tracking-wide text-red-600/80 text-2xl flex items-center space-x-2 '>
					<span> Upfront warranty info</span>
					<span className=''>
						<BsFillFileTextFill />
					</span>
				</button>
			</Link>
		</div>
	);
};
