import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductIcon } from '@/components/products/product-icon'
import type { Product } from '@/types/product'

export function ProductCard({ product }: { product: Product }) {
	return (
		<Link
			href={`/products/${product.slug}`}
			className='group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_var(--glow-gold)]'
		>
			<span className='flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 transition group-hover:bg-gold group-hover:text-background'>
				<ProductIcon slug={product.slug} className='size-6' />
			</span>
			<div className='flex flex-col gap-1.5'>
				<h3 className='text-lg font-semibold'>{product.name}</h3>
				<p className='text-sm leading-relaxed text-muted'>{product.tagline}</p>
			</div>
			<span className='mt-auto inline-flex items-center gap-1 text-sm font-medium text-gold'>
				Batafsil
				<ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
			</span>
		</Link>
	)
}
