import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ApplyForm } from '@/components/forms/apply-form'
import { getProductBySlug } from '@/data/products'

export const metadata: Metadata = {
	title: 'Ariza berish',
}

type PageProps = {
	searchParams: Promise<{ service?: string | string[] }>
}

const steps = [
	"Ma'lumotlaringizni qoldirasiz",
	"Biz siz bilan bog'lanamiz",
	'Loyihani birgalikda rejalashtiramiz',
]

export default async function ApplyPage({ searchParams }: PageProps) {
	const { service } = await searchParams
	const defaultService =
		typeof service === 'string' && getProductBySlug(service) ? service : ''

	return (
		<Container className='grid gap-12 py-16 lg:grid-cols-2 lg:items-start'>
			<div className='flex flex-col gap-8'>
				<SectionHeading
					as='h1'
					align='left'
					eyebrow='Aloqa'
					title='Ariza berish'
					description="Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz."
				/>
				<ol className='flex flex-col gap-4'>
					{steps.map((step, index) => (
						<li key={step} className='flex items-center gap-4'>
							<span className='flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10 font-bold text-gold ring-1 ring-gold/30'>
								{index + 1}
							</span>
							<span className='text-muted'>{step}</span>
						</li>
					))}
				</ol>
			</div>
			<ApplyForm defaultService={defaultService} />
		</Container>
	)
}
