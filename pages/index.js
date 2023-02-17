import AboutSnip from '../components/about/AboutSnip';
import Hero from '../components/hero/Hero';
import Rates from '../components/rates/Rates';
import Reviews from '../components/reviews/Reviews';
import ServiceSnip from '../components/services/ServiceSnip';

export default function Home() {
	return (
		<div className='grid gap-24 mb-24'>
			<Hero />
			<AboutSnip />
			<ServiceSnip />
			<Rates />
			<Reviews />
		</div>
	);
}
