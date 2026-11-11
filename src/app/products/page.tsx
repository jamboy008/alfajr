import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ProductGrid } from '@/components/products/product-grid'
import { getAllProducts } from '@/data/products'

export const metadata: Metadata = {
	title: 'Mahsulotlar',
}

export default function ProductsPage() {
	return (
		<Container className='flex flex-col gap-8 py-12'>
			<h1 className='text-3xl font-bold'>Mahsulotlar</h1>
			<ProductGrid items={getAllProducts()} />
		</Container>
	)
}
