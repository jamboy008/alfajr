import type { LucideIcon } from 'lucide-react'

type ContactCardProps = {
	icon: LucideIcon
	title: string
	value: string
	href?: string
}

const baseClass =
	'flex items-center gap-4 rounded-2xl border border-border bg-card p-5'

export function ContactCard({
	icon: Icon,
	title,
	value,
	href,
}: ContactCardProps) {
	const content = (
		<>
			<span className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30'>
				<Icon className='size-5' aria-hidden='true' />
			</span>
			<span className='flex min-w-0 flex-col'>
				<span className='text-xs font-semibold uppercase tracking-wider text-muted'>
					{title}
				</span>
				<span className='truncate font-medium'>{value}</span>
			</span>
		</>
	)

	if (!href) {
		return <div className={baseClass}>{content}</div>
	}

	const external = href.startsWith('http')

	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
			className={`${baseClass} transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_var(--glow-gold)]`}
		>
			{content}
		</a>
	)
}
