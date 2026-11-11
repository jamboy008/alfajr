import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'

export default function NotFound() {
	return (
		<Container className='flex flex-col items-center gap-5 py-32 text-center'>
			<span className='gradient-text text-8xl font-extrabold'>404</span>
			<p className='text-lg text-muted'>Sahifa topilmadi</p>
			<ButtonLink href='/'>Bosh sahifaga qaytish</ButtonLink>
		</Container>
	)
}
