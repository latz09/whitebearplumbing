import { motion } from 'framer-motion';
import { services } from '../../data/services';
import ButtonLink from '../utils/ButtonLink';
import IconFilter from '../utils/IconFilter';

const ServiceSnip = () => {
	return (
		<>
			<div className='max-w-[90rem] mx-auto grid lg:grid-cols-3 gap-16 lg:gap-8 '>
				{services.map((service, index) => (
					<div
						key={service.id}
						className='flex flex-col place-items-center gap-4  '
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 * index }}
							className='grid gap-2 place-items-center'
						>
							<div>
								<IconFilter name={service.name} />
							</div>
							<span className='text-3xl font-semibold text-center'>{service.name}</span>
						</motion.div>
						<span className='text-center px-4 text-lg text-gray-700 font-semibold  '>
							{service.description}
						</span>
					</div>
				))}
			</div>

			<div className='grid place-items-center '>
				<ButtonLink title={'All of our services!'} path={'/'} />
			</div>
		</>
	);
};

export default ServiceSnip;
