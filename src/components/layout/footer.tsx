import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/layout/logo'
import { ctaLink, mainNav } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { getAllProducts } from '@/data/products'

export function Footer() {
	const pages = [...mainNav, ctaLink]

	return (
		<footer className='border-t border-border bg-card/40'>
			<Container className='grid gap-10 py-14 md:grid-cols-3'>
				<div className='flex flex-col gap-4'>
					<Logo />
					<p className='max-w-xs text-sm leading-relaxed text-muted'>
						{siteConfig.description}
					</p>
				</div>
				<div>
					<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gold'>
						Sahifalar
					</h3>
					<ul className='flex flex-col gap-2 text-sm text-muted'>
						{pages.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='transition-colors hover:text-foreground'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gold'>
						Xizmatlar
					</h3>
					<ul className='flex flex-col gap-2 text-sm text-muted'>
						{getAllProducts().map(product => (
							<li key={product.slug}>
								<Link
									href={`/products/${product.slug}`}
									className='transition-colors hover:text-foreground'
								>
									{product.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Container>
			<div className='border-t border-border py-5 text-center text-xs text-muted'>
				© {siteConfig.name}. Barcha huquqlar himoyalangan.
			</div>
		</footer>
	)
}
