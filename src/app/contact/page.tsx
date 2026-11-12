import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ApplyForm } from '@/components/forms/apply-form'
import { ContactList } from '@/components/contact/contact-list'

export const metadata: Metadata = {
	title: 'Aloqa',
	description: "Aljabr bilan bog'lanish: telefon, Telegram, email va manzil.",
}

export default function ContactPage() {
	return (
		<Container className='grid gap-12 py-16 lg:grid-cols-2 lg:items-start'>
			<div className='flex flex-col gap-8'>
				<SectionHeading
					as='h1'
					align='left'
					eyebrow='Aloqa'
					title="Biz bilan bog'laning"
					description="Quyidagi usullardan birini tanlang yoki formani to'ldiring, tez orada javob beramiz."
				/>
				<ContactList />
			</div>
			<ApplyForm defaultService='' />
		</Container>
	)
}
