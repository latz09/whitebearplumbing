
import {GiFurnace } from 'react-icons/gi';
import { MdPlumbing, MdOutlineConstruction } from 'react-icons/md';
import { motion } from 'framer-motion';

const IconFilter = ({ name }) => {
	return (
		<>
			<motion.div
				className='text-9xl '
				initial={{ scale: 0.96 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{name === 'Plumbing' && (
					<span className=' '>
						{' '}
						<MdPlumbing />
					</span>
				)}
				{name === 'New Construction' && (
					<span className='  '>
						{' '}
						<MdOutlineConstruction />
					</span>
				)}
				{name === 'Boiler Services' && (
					<span className=' text-red'>
						{' '}
						<GiFurnace />
					</span>
				)}
			</motion.div>
		</>
	);
};

export default IconFilter;
