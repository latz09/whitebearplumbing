import Link from 'next/link';

const ButtonLink = ({path, title}) => {
    return ( 	<>
        <Link href={path}>
            <button className='px-6 py-2 lg:px-12 lg:py-4 bg-red text-white lg:text-2xl uppercase rounded-full shadow-lg border-2 border-red hover:scale-95 hover:bg-red/70 transition duration-700 font-tinos'>
                {title}
            </button>
        </Link>
    </> );
}
 
export default ButtonLink;