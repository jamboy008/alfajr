import { Hero } from '@/components/home/hero'
import { Features } from '@/components/home/features'
import { ProductsPreview } from '@/components/home/products-preview'
import { Process } from '@/components/home/process'
import { ContactSection } from '@/components/home/contact-section'
import { Cta } from '@/components/home/cta'

export default function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<ProductsPreview />
			<Process />
			<ContactSection />
			<Cta />
		</>
	)
}
