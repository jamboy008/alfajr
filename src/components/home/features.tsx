import { Headset, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const items = [
	{
		icon: Zap,
		title: 'Tezkor ishlash',
		text: 'Yengil va optimallashtirilgan kod, sahifalar tez ochiladi.',
	},
	{
		icon: Smartphone,
		title: 'Barcha qurilmalarga mos',
		text: "Telefon, planshet va kompyuterda bir xil qulay ko'rinadi.",
	},
	{
		icon: ShieldCheck,
		title: 'Xavfsizlik',
		text: "Ma'lumotlar himoyalangan, maxfiy kalitlar serverda saqlanadi.",
	},
	{
		icon: Headset,
		title: 'Doimiy aloqa',
		text: "Loyiha davomida siz bilan doimiy aloqada bo'lamiz.",
	},
]

export function Features() {
	return (
		<section className='py-20'>
			<Container className='flex flex-col gap-12'>
				<Reveal>
					<SectionHeading
						eyebrow='Afzalliklar'
						title='Nega aynan Aljabr'
						description="Sifat, tezlik va ishonchlilikka e'tibor beramiz."
					/>
				</Reveal>
				<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
					{items.map((item, index) => (
						<Reveal key={item.title} delay={index * 80} className='h-full'>
							<div className='flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6'>
								<item.icon className='size-7 text-gold' />
								<h3 className='font-semibold'>{item.title}</h3>
								<p className='text-sm leading-relaxed text-muted'>
									{item.text}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	)
}
