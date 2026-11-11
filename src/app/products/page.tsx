import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProductGrid } from '@/components/products/product-grid'
import { getAllProducts } from '@/data/products'

export const metadata: Metadata = {
	title: 'Mahsulotlar',
}

export default function ProductsPage() {
	return (
		<Container className='flex flex-col gap-12 py-16'>
			<SectionHeading
				as='h1'
				eyebrow='Xizmatlar'
				title='Mahsulotlar'
				description='Biznesingiz uchun kerakli yechimni tanlang.'
			/>
			<ProductGrid items={getAllProducts()} />
		</Container>
	)
}
