import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function Hero() {
	return (
		<section className='bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 py-24 text-white'>
			<Container className='flex flex-col items-center gap-6 text-center'>
				<h1 className='text-4xl font-bold sm:text-6xl'>{siteConfig.name}</h1>
				<p className='max-w-2xl text-lg text-indigo-100'>
					{siteConfig.description}
				</p>
				<div className='flex flex-wrap justify-center gap-3'>
					<ButtonLink href='/apply' variant='light'>
						Ariza berish
					</ButtonLink>
					<ButtonLink href='/products' variant='ghost'>
						Mahsulotlar
					</ButtonLink>
				</div>
			</Container>
		</section>
	)
}
