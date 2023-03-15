import Link from 'next/link';
import { FC } from 'react';

const SeeMoreLink: FC<any> = props => {
	const { href } = props;

	return (
		<Link
			href={href}
			className='bg-blue-500 px-2 py-1 rounded-md text-white font-semibold hover:bg-blue-600 transition-colors'
		>
			See More
		</Link>
	);
};

export default SeeMoreLink;
