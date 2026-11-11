import { cn } from '@/lib/utils'

export function SectionHeading({
	eyebrow,
	title,
	description,
	as: Tag = 'h2',
	align = 'center',
}: {
	eyebrow?: string
	title: string
	description?: string
	as?: 'h1' | 'h2'
	align?: 'center' | 'left'
}) {
	return (
		<div
			className={cn(
				'flex max-w-2xl flex-col gap-3',
				align === 'center' && 'mx-auto items-center text-center',
			)}
		>
			{eyebrow && (
				<span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
					{eyebrow}
				</span>
			)}
			<Tag className='text-3xl font-bold tracking-tight sm:text-4xl'>
				{title}
			</Tag>
			{description && <p className='text-muted'>{description}</p>}
		</div>
	)
}
