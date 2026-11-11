'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { mainNav } from '@/config/navigation'

export function MobileNav() {
	const [open, setOpen] = useState(false)

	return (
		<div className='md:hidden'>
			<button
				type='button'
				aria-label='Menyu'
				aria-expanded={open}
				onClick={() => setOpen(value => !value)}
				className='p-2'
			>
				{open ? <X size={24} /> : <Menu size={24} />}
			</button>
			{open && (
				<nav className='absolute inset-x-0 top-full border-b border-neutral-200 bg-white p-4'>
					<ul className='flex flex-col gap-3'>
						{mainNav.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={() => setOpen(false)}
									className='block py-1 text-base'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	)
}
