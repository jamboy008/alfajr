import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz'>
			<body className='flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased'>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
