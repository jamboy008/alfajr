import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProductGrid } from '@/components/products/product-grid'
import { getAllProducts } from '@/data/products'

export function ProductsPreview() {
	return (
		<section className='py-20'>
			<Container className='flex flex-col gap-12'>
				<Reveal>
					<SectionHeading
						eyebrow='Xizmatlar'
						title='Bizning mahsulotlar'
						description='Biznesingiz uchun kerakli yechimni tanlang.'
					/>
				</Reveal>
				<ProductGrid items={getAllProducts()} />
			</Container>
		</section>
	)
}
