import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { ProductIcon } from '@/components/products/product-icon'
import { getAllProducts, getProductBySlug } from '@/data/products'

type PageProps = {
	params: Promise<{ slug: string }>
}

export function generateStaticParams() {
	return getAllProducts().map(product => ({ slug: product.slug }))
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params
	const product = getProductBySlug(slug)

	if (!product) {
		return {}
	}

	return {
		title: product.name,
		description: product.tagline,
	}
}

export default async function ProductPage({ params }: PageProps) {
	const { slug } = await params
	const product = getProductBySlug(slug)

	if (!product) {
		notFound()
	}

	return (
		<Container className='flex flex-col gap-10 py-14'>
			<ButtonLink href='/products' variant='outline' className='w-fit'>
				<ArrowLeft className='size-4' />
				Orqaga
			</ButtonLink>

			<div className='grid gap-10 lg:grid-cols-3'>
				<div className='flex flex-col gap-8 lg:col-span-2'>
					<div className='flex flex-col gap-5'>
						<span className='flex size-16 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/30'>
							<ProductIcon slug={product.slug} className='size-8' />
						</span>
						<h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>
							{product.name}
						</h1>
						<p className='gradient-text w-fit text-xl font-semibold'>
							{product.tagline}
						</p>
						<p className='max-w-2xl text-lg leading-relaxed text-muted'>
							{product.description}
						</p>
					</div>

					<ul className='grid gap-3 sm:grid-cols-2'>
						{product.features.map(feature => (
							<li
								key={feature}
								className='flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3'
							>
								<Check className='size-5 shrink-0 text-gold' />
								{feature}
							</li>
						))}
					</ul>
				</div>

				<aside className='h-fit rounded-2xl border border-gold/30 bg-card p-6 lg:sticky lg:top-24'>
					<h2 className='text-lg font-semibold'>Loyihani boshlaymizmi?</h2>
					<p className='mt-2 text-sm leading-relaxed text-muted'>
						Ariza qoldiring, biz siz bilan boglanamiz.
					</p>
					<ButtonLink
						href={`/apply?service=${product.slug}`}
						className='mt-5 w-full'
					>
						Ariza berish
						<ArrowRight className='size-4' />
					</ButtonLink>
				</aside>
			</div>
		</Container>
	)
}
