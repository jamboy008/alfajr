import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

export function Cta() {
	return (
		<section className='py-20'>
			<Container>
				<Reveal>
					<div className='relative overflow-hidden rounded-3xl border border-gold/30 bg-linear-to-br from-[#0a1330] via-[#0f2257] to-[#16347f] px-6 py-14 text-center text-white sm:px-12'>
						<div className='pointer-events-none absolute -right-10 -top-20 size-72 rounded-full bg-[#e3b94f]/25 blur-3xl' />
						<div className='relative flex flex-col items-center gap-5'>
							<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
								Loyihangizni bugun boshlaymiz
							</h2>
							<p className='max-w-xl text-blue-100/80'>
								Arizangizni qoldiring, biz siz bilan boglanib, eng mos yechimni
								taklif qilamiz.
							</p>
							<ButtonLink href='/apply'>
								Ariza qoldirish
								<ArrowRight className='size-4' />
							</ButtonLink>
						</div>
					</div>
				</Reveal>
			</Container>
		</section>
	)
}
