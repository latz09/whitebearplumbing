import Layout from '../components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 1,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.7 } },
	};

	return (
		<>
			<Layout>
				<AnimatePresence mode='wait'>
					<motion.div
						key={router.route}
						variants={pageAnimateVariable}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<Component {...pageProps} />{' '}
					</motion.div>
				</AnimatePresence>
			</Layout>
		</>
	);
}

export default MyApp;
