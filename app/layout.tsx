import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'MemoRize',
	description:
		'Test out that amazing brain of yours and see just how much you can remember in this dynamic game of memorizeation!',
	openGraph: {
		title: 'MemoRize',
		description:
			'Test out that amazing brain of yours and see just how much you can remember in this dynamic game of memorizeation!',
		url: 'https://memo-rize-game.vercel.app',
		siteName: 'MemoRize',
		images: [
			{
				url: 'https://memorize.vercel.app/og-image.png',
				width: 1200,
				height: 630,
				alt: 'MemoRize OG Image',
			},
		],
		type: 'website',
		locale: 'en_US',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
