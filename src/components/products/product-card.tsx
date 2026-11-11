import Link from 'next/link'
import type { Product } from '@/types/product'

export function ProductCard({ product }: { product: Product }) {
	return (
		<Link
			href={`/products/${product.slug}`}
			className='flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg'
		>
			<span className='flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg font-bold text-indigo-700'>
				{product.name.charAt(0)}
			</span>
			<h3 className='text-lg font-semibold'>{product.name}</h3>
			<p className='text-sm text-slate-600'>{product.tagline}</p>
			<span className='text-sm font-medium text-indigo-600'>Batafsil →</span>
		</Link>
	)
}
