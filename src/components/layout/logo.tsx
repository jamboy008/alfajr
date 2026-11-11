import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export function Logo({ className }: { className?: string }) {
	return (
		<Link
			href='/'
			aria-label={siteConfig.name}
			className={cn('flex items-center gap-3', className)}
		>
			<Image
				src='/logo.png'
				alt=''
				width={40}
				height={40}
				priority
				className='rounded-xl ring-1 ring-gold/40'
			/>
			<span className='gradient-text text-xl font-extrabold tracking-tight'>
				{siteConfig.name}
			</span>
		</Link>
	)
}
