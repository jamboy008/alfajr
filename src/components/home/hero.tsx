import Image from 'next/image'
import { ArrowRight, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

const highlights = [
	{ icon: Zap, label: 'Tez ishlaydi' },
	{ icon: Smartphone, label: 'Mobilga moslashgan' },
	{ icon: ShieldCheck, label: 'Xavfsiz' },
]

export function Hero() {
	return (
		<section className='relative overflow-hidden'>
			<div className='pointer-events-none absolute inset-0 bg-grid opacity-40' />
			<div className='pointer-events-none absolute -top-32 left-1/3 size-[520px] animate-glow rounded-full bg-(--glow-gold) blur-3xl' />
			<div className='pointer-events-none absolute -right-24 top-40 size-[420px] rounded-full bg-(--glow-navy) blur-3xl' />
			<Container className='relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28'>
				<div className='flex animate-fade-up flex-col items-start gap-6'>
					<span className='inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur'>
						<span className='size-1.5 rounded-full bg-gold' />
						Raqamli yechimlar
					</span>
					<h1 className='text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl'>
						Biznesingizni{' '}
						<span className='gradient-text'>raqamli kelajakka</span> olib
						chiqamiz
					</h1>
					<p className='max-w-xl text-lg leading-relaxed text-muted'>
						{siteConfig.description}
					</p>
					<div className='flex flex-wrap gap-3'>
						<ButtonLink href='/apply'>
							Ariza berish
							<ArrowRight className='size-4' />
						</ButtonLink>
						<ButtonLink href='/products' variant='outline'>
							Mahsulotlar
						</ButtonLink>
					</div>
					<ul className='flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted'>
						{highlights.map(item => (
							<li key={item.label} className='flex items-center gap-2'>
								<item.icon className='size-4 text-gold' />
								{item.label}
							</li>
						))}
					</ul>
				</div>
				<div className='relative isolate mx-auto animate-fade-up [animation-delay:150ms]'>
					<div className='absolute inset-0 -z-10 rounded-full bg-(--glow-gold) blur-3xl' />
					<div className='animate-float rounded-[2rem] border border-gold/30 bg-black p-3 shadow-2xl'>
						<Image
							src='/logo.png'
							alt='Aljabr logotipi'
							width={320}
							height={320}
							priority
							className='rounded-3xl'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
