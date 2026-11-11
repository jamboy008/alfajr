import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'light' | 'ghost'

const variants: Record<Variant, string> = {
	primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700',
	outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
	light: 'bg-white text-indigo-700 shadow-sm hover:bg-indigo-50',
	ghost: 'border border-white/40 text-white hover:bg-white/10',
}

export function ButtonLink({
	href,
	variant = 'primary',
	className,
	children,
}: {
	href: string
	variant?: Variant
	className?: string
	children: React.ReactNode
}) {
	return (
		<Link
			href={href}
			className={cn(
				'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors',
				variants[variant],
				className,
			)}
		>
			{children}
		</Link>
	)
}
