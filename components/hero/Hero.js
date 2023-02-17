import hero from '../../public/Images/hero.jpg';
import companyVan from '../../public/Images/company-van.png';
import Image from 'next/image';
import ButtonLink from '../utils/ButtonLink';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={hero}
				alt='ddd'
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
			/>

			<div className='relative h-full bg-gradient-to-b from-dark/30 lg:from-dark/50 via-dark/60 lg:via-dark/70 to-dark lg:to-dark '>
				<div className='max-w-7xl mx-auto  flex flex-col justify-between lg:grid place-items-center lg:grid-cols-3 h-full   lg:gap-16'>
					<motion.div
						className='lg:col-span-1 order-2 lg:order-1'
						initial={{ scale: 0.98 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 1.5,
							delay: 1.2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<motion.div
							// using framermotion to animate from left and scale in
							initial={{ x: -400, scale: 0.9 }}
							animate={{ x: 0, scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className='hidden lg:block'
						>
							<Image
								src={companyVan}
								alt='company van'
								// width={600}
								// height={600}
							/>
						</motion.div>
					</motion.div>
					<div className='lg:col-span-2   gap-4 pt-8 grid place-items-center lg:place-items-start   lg:gap-8 order-2 pb-8 lg:pb-0  '>
						<HeroText />
						<div className='hidden lg:block place-self-center'>
							<ButtonLink title='Request a quote' path='/' />
						</div>
						<div className='lg:hidden text-4xl text-red font-semibold font-tinos tracking-widest'>
							<span>612-426-6000</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

const HeroText = () => {
	return (
		<div className=' text-xl text-light lg:text-2xl grid place-items-center gap-2 lg:gap-2  mx-auto  text-center   lg:tracking-wide '>
			<span className='text-4xl lg:text-5xl font-bold tracking-wider  text-white  font-tinos scale-110 lg:scale-y-125'>
				White Bear Plumbing
			</span>
			<span className='font-semibold opacity-90 mx-8'>
				The name to know and trust for all your plumbing services.
			</span>
		</div>
	);
};
