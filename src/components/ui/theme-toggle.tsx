'use client'

import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
	function toggle() {
		const isDark = document.documentElement.classList.toggle('dark')

		try {
			localStorage.setItem('theme', isDark ? 'dark' : 'light')
		} catch {}
	}

	return (
		<button
			type='button'
			onClick={toggle}
			aria-label='Mavzuni almashtirish'
			className='inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-gold/60 hover:text-gold'
		>
			<Sun className='hidden size-5 dark:block' />
			<Moon className='size-5 dark:hidden' />
		</button>
	)
}
