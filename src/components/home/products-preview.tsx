import { Container } from '@/components/ui/container'
import { ProductGrid } from '@/components/products/product-grid'
import { getAllProducts } from '@/data/products'

export function ProductsPreview() {
	return (
		<section className='py-16'>
			<Container className='flex flex-col gap-8'>
				<h2 className='text-3xl font-bold'>Bizning mahsulotlar</h2>
				<ProductGrid items={getAllProducts()} />
			</Container>
		</section>
	)
}
