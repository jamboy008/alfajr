import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'

export default function NotFound() {
	return (
		<Container className='flex flex-col items-center gap-4 py-24 text-center'>
			<h1 className='text-4xl font-bold'>404</h1>
			<p className='text-neutral-600'>Sahifa topilmadi</p>
			<ButtonLink href='/'>Bosh sahifaga qaytish</ButtonLink>
		</Container>
	)
}
