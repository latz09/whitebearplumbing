import { motion } from 'framer-motion';
const AboutSnip = () => {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='grid gap-2 text-center  '>
				<span className='text-3xl lg:text-5xl font-semibold text-dark/80'>
					Thanks For Visiting Us
				</span>
				<div>
					<Snip />
				</div>
			</div>
		</div>
	);
};

export default AboutSnip;

const Snip = () => {
	return (
		<div className='grid gap-4 text-lg lg:text-xl mx-2 '>
			<p className='text-xl lg:text-3xl  font-semibold '>
				We work to be the best, no matter what the size and scope of your
				plumbing issue.
			</p>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.1 }}
				className='mx-2 lg:mx-0'
			>
				From the start, we realized that simply providing quality services at
				budget-friendly prices was not sufficient to achieve genuine success. In
				addition, it was essential to be transparent and direct in all of our
				business actions, offering customers with the knowledge they need to
				make educated decisions. We always make clear what services we can
				provide, the associated costs, and the estimated time of completion.
			</motion.div>
		</div>
	);
};
