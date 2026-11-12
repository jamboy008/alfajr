import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllProducts } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ['', '/products', '/contact', '/apply'].map(path => ({
		url: `${siteConfig.url}${path}`,
	}))

	const productPages = getAllProducts().map(product => ({
		url: `${siteConfig.url}/products/${product.slug}`,
	}))

	return [...pages, ...productPages]
}
