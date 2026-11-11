import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'

export function Footer() {
	return (
		<footer className='border-t border-neutral-200 py-8'>
			<Container className='text-sm text-neutral-500'>
				© {siteConfig.name}. Barcha huquqlar himoyalangan.
			</Container>
		</footer>
	)
}
