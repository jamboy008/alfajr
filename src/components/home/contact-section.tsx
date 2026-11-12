import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { ButtonLink } from '@/components/ui/button'
import { ContactList } from '@/components/contact/contact-list'

export function ContactSection() {
	return (
		<section className='py-20'>
			<Container className='flex flex-col items-center gap-12'>
				<Reveal>
					<SectionHeading
						eyebrow='Aloqa'
						title="Biz bilan bog'laning"
						description="Savolingiz bormi? Qulay usulda yozing yoki qo'ng'iroq qiling."
					/>
				</Reveal>
				<Reveal className='w-full'>
					<ContactList />
				</Reveal>
				<ButtonLink href='/contact' variant='outline'>
					Batafsil
				</ButtonLink>
			</Container>
		</section>
	)
}
