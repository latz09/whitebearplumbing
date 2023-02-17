import { reviews } from '../../data/reviews';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ButtonLink from '../utils/ButtonLink';
const Reviews = () => {
	return (
		<div className='grid gap-8 max-w-7xl mx-auto'>
			<span className="text-center text-3xl italic text-gray-700">Forming lasting relationships with our community</span>
			<div className='grid xl:grid-cols-2 gap-16 place-items-center '>
				{reviews.map((review) => (
					<div key={review.id} className='mx-8'>
						<Review name={review.name} description={review.description} />
					</div>
				))}
			</div>
			<div className="grid place-items-center my-4 lg:my-8">
				<ButtonLink title={'Read more reviews!'} path={'/'} />
			</div>
		</div>
	);
};

export default Reviews;

const Review = ({ name, description }) => {
	return (
		<div className='grid gap-2 text-justify text-gray-700'>
			<span className='text-lg lg:text-2xl font-semibold font-tinos '>{name}.</span>
			<FiveStars />
			<span className='mx-4 lg:mx-8 lg:text-lg text-dark '>{description}</span>
		</div>
	);
};

const FiveStars = () => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<>
			<div className='flex space-x-2'>
				{stars.map((s, i) => (
					<motion.div
						key={i}
						className='text-red text-lg'
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.3, delay: 0.2 * i }}
					>
						<motion.div
							initial={{ scale: 0.75, opacity: .85 }}
							whileInView={{ scale: 1.0, opacity: 1 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
								delay: 0.2 * i,
							
							}}
						>
							<AiFillStar />
						</motion.div>
					</motion.div>
				))}
			</div>
		</>
	);
};
