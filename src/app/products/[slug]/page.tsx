import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
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
		<Container className='flex flex-col gap-8 py-12'>
			<ButtonLink href='/products' variant='outline' className='w-fit'>
				Orqaga
			</ButtonLink>
			<div className='flex flex-col gap-3'>
				<h1 className='text-4xl font-bold'>{product.name}</h1>
				<p className='text-lg text-neutral-600'>{product.tagline}</p>
			</div>
			<p className='max-w-3xl'>{product.description}</p>
			<ul className='grid gap-2 sm:grid-cols-2'>
				{product.features.map(feature => (
					<li
						key={feature}
						className='rounded-lg border border-neutral-200 px-4 py-3'
					>
						{feature}
					</li>
				))}
			</ul>
			<ButtonLink href='/apply' className='w-fit'>
				Ariza berish
			</ButtonLink>
		</Container>
	)
}
