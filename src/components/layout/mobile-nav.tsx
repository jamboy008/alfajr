'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button'
import { ctaLink, mainNav } from '@/config/navigation'

export function MobileNav() {
	const [open, setOpen] = useState(false)

	return (
		<div className='md:hidden'>
			<button
				type='button'
				aria-label='Menyu'
				aria-expanded={open}
				onClick={() => setOpen(value => !value)}
				className='inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60'
			>
				{open ? <X size={20} /> : <Menu size={20} />}
			</button>
			{open && (
				<nav className='absolute inset-x-0 top-full border-b border-border bg-background/95 p-4 backdrop-blur-xl'>
					<ul className='flex flex-col gap-1'>
						{mainNav.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={() => setOpen(false)}
									className='block rounded-xl px-4 py-3 text-base font-medium hover:bg-card'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<ButtonLink
						href={ctaLink.href}
						onClick={() => setOpen(false)}
						className='mt-3 w-full'
					>
						{ctaLink.label}
					</ButtonLink>
				</nav>
			)}
		</div>
	)
}
