import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Logo } from '@/components/layout/logo'
import { MobileNav } from '@/components/layout/mobile-nav'
import { ctaLink, mainNav } from '@/config/navigation'

export function Header() {
	return (
		<header className='sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl'>
			<Container className='flex h-16 items-center justify-between gap-4'>
				<Logo />
				<nav className='hidden md:block' aria-label='Asosiy menyu'>
					<ul className='flex items-center gap-1'>
						{mainNav.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='flex items-center gap-2'>
					<ThemeToggle />
					<ButtonLink
						href={ctaLink.href}
						className='hidden px-5 py-2 md:inline-flex'
					>
						{ctaLink.label}
					</ButtonLink>
					<MobileNav />
				</div>
			</Container>
		</header>
	)
}
