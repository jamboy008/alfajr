'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
	children,
	className,
	delay = 0,
}: {
	children: React.ReactNode
	className?: string
	delay?: number
}) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = ref.current

		if (!element) {
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.classList.add('is-visible')
					observer.disconnect()
				}
			},
			{ threshold: 0.15 },
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
			className={cn('reveal', className)}
		>
			{children}
		</div>
	)
}
