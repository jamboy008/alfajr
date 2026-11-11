import { ProductCard } from '@/components/products/product-card'
import { Reveal } from '@/components/ui/reveal'
import type { Product } from '@/types/product'

export function ProductGrid({ items }: { items: Product[] }) {
	return (
		<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
			{items.map((product, index) => (
				<Reveal key={product.slug} delay={index * 60} className='h-full'>
					<ProductCard product={product} />
				</Reveal>
			))}
		</div>
	)
}
