import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
	'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

const variants: Record<Variant, string> = {
	primary:
		'bg-linear-to-r from-[#f0cd77] via-[#e3b94f] to-[#c9972f] text-[#0a1020] shadow-[0_10px_30px_-10px_var(--glow-gold)] hover:-translate-y-0.5 hover:brightness-110',
	outline:
		'border border-border bg-card/60 text-foreground backdrop-blur hover:border-gold/60 hover:text-gold',
	ghost: 'text-foreground hover:bg-card',
}

export function buttonStyles(variant: Variant = 'primary', className?: string) {
	return cn(base, variants[variant], className)
}

export function ButtonLink({
	href,
	variant = 'primary',
	className,
	onClick,
	children,
}: {
	href: string
	variant?: Variant
	className?: string
	onClick?: () => void
	children: React.ReactNode
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={buttonStyles(variant, className)}
		>
			{children}
		</Link>
	)
}
