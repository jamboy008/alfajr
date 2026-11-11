import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { MobileNav } from '@/components/layout/mobile-nav'
import { mainNav } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Header() {
	return (
		<header className='sticky top-0 z-50 border-b border-neutral-200 bg-white'>
			<Container className='flex h-16 items-center justify-between'>
				<Link href='/' className='text-lg font-bold'>
					{siteConfig.name}
				</Link>
				<nav className='hidden md:block'>
					<ul className='flex items-center gap-6 text-sm'>
						{mainNav.map(item => (
							<li key={item.href}>
								<Link href={item.href} className='hover:text-neutral-600'>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<MobileNav />
			</Container>
		</header>
	)
}
