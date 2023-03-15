import Link from 'next/link';

const Navbar = () => {
	const links = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/about',
			name: 'About',
		},
		{
			href: '/posts',
			name: 'Posts',
		},
	];

	return (
		<header>
			<nav>
				<ul className='flex justify-center items-center gap-5'>
					{links.map(link => (
						<li
							key={link.href}
							className='text-lg font-semibold text-blue-600 hover:text-blue-400 transition-colors'
						>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
