import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ApplyForm } from '@/components/forms/apply-form'

export const metadata: Metadata = {
	title: 'Ariza berish',
}

export default function ApplyPage() {
	return (
		<Container className='flex max-w-2xl flex-col gap-8 py-12'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl font-bold'>Ariza berish</h1>
				<p className='text-slate-600'>
					Malumotlaringizni qoldiring, siz bilan boglanamiz.
				</p>
			</div>
			<ApplyForm />
		</Container>
	)
}
