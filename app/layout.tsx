import '../styles/globals.css';
import Navbar from './components/Navbar';
import { fontInspiration, fontVarta } from './fonts';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>My Next.js v13 app</title>
			</head>
			<body className={fontVarta.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
