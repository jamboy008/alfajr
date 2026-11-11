import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
	{
		title: 'Ariza qoldirasiz',
		text: "Formani to'ldirib, kerakli xizmatni tanlaysiz.",
	},
	{
		title: 'Muhokama qilamiz',
		text: 'Ehtiyojingizni aniqlab, yechim rejasini tuzamiz.',
	},
	{
		title: 'Ishlab chiqamiz',
		text: 'Loyihani bosqichma-bosqich yaratamiz.',
	},
	{
		title: 'Topshiramiz',
		text: 'Tayyor mahsulotni ishga tushirib, yordam beramiz.',
	},
]

export function Process() {
	return (
		<section className='py-20'>
			<Container className='flex flex-col gap-12'>
				<Reveal>
					<SectionHeading
						eyebrow='Jarayon'
						title='Qanday ishlaymiz'
						description="Ariza qoldirishdan tayyor mahsulotgacha to'rt qadam."
					/>
				</Reveal>
				<div className='grid gap-5 md:grid-cols-4'>
					{steps.map((step, index) => (
						<Reveal key={step.title} delay={index * 100} className='h-full'>
							<div className='flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6'>
								<span className='gradient-text text-4xl font-extrabold'>
									0{index + 1}
								</span>
								<h3 className='font-semibold'>{step.title}</h3>
								<p className='text-sm leading-relaxed text-muted'>
									{step.text}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	)
}
