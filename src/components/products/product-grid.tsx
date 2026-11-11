import { ProductCard } from '@/components/products/product-card'
import type { Product } from '@/types/product'

export function ProductGrid({ items }: { items: Product[] }) {
	return (
		<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
			{items.map(product => (
				<ProductCard key={product.slug} product={product} />
			))}
		</div>
	)
}
