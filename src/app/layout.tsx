import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/config/site'

const jakarta = Plus_Jakarta_Sans({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-jakarta',
	display: 'swap',
})

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":true;document.documentElement.classList.toggle("dark",d)}catch(e){document.documentElement.classList.add("dark")}})();`

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#faf8f3' },
		{ media: '(prefers-color-scheme: dark)', color: '#04060c' },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz' suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body
				className={`${jakarta.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
			>
				<a
					href='#content'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0a1020]'
				>
					Asosiy kontentga otish
				</a>
				<Header />
				<main id='content' className='flex-1'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
