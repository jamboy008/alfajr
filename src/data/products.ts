import type { Product } from '@/types/product'

export const products: Product[] = [
	{
		slug: 'websites',
		name: 'Veb-saytlar',
		tagline: 'Biznesingiz uchun zamonaviy sayt',
		description:
			'Tez, mobilga moslashgan va qidiruv tizimlariga tayyor veb-saytlar.',
		features: ['Responsiv dizayn', 'SEO', 'Tez yuklanish', 'Admin panel'],
	},
	{
		slug: 'ecommerce',
		name: 'E-commerce',
		tagline: "Onlayn do'kon va to'lov tizimlari",
		description: "Mahsulot katalogi, savat va to'lov bilan onlayn do'kon.",
		features: ['Katalog', 'Savat', "Onlayn to'lov", 'Buyurtmalar boshqaruvi'],
	},
	{
		slug: 'crm',
		name: 'CRM',
		tagline: 'Mijozlar bilan ishlashni tartibga soling',
		description: 'Mijozlar bazasi, sotuv jarayoni va hisobotlar bitta tizimda.',
		features: ['Mijozlar bazasi', 'Sotuv voronkasi', 'Hisobotlar'],
	},
	{
		slug: 'erp',
		name: 'ERP',
		tagline: 'Butun biznes jarayonlari bitta tizimda',
		description: 'Ombor, moliya, xodimlar va ishlab chiqarishni boshqarish.',
		features: ['Ombor', 'Moliya', 'Xodimlar', 'Analitika'],
	},
	{
		slug: 'mobile-apps',
		name: 'Mobil ilovalar',
		tagline: 'iOS va Android uchun ilovalar',
		description: 'Biznesingiz uchun yagona kod bazasida mobil ilovalar.',
		features: ['iOS', 'Android', 'Push xabarnoma', 'Backend integratsiya'],
	},
	{
		slug: 'telegram',
		name: 'Telegram botlar',
		tagline: 'Mijozlar bilan Telegram orqali aloqa',
		description:
			"Buyurtma, to'lov va qo'llab-quvvatlash uchun Telegram botlar.",
		features: [
			'Buyurtma qabul qilish',
			"To'lov",
			'Xabarnoma',
			'Admin boshqaruvi',
		],
	},
	{
		slug: 'telegram-mini-app',
		name: 'Telegram Mini App',
		tagline: "Telegram ichida to'liq ilova",
		description:
			"Telegram ichida ishlaydigan do'kon, xizmat va boshqa ilovalar.",
		features: ['Telegram ichida ishlaydi', 'Tez ishga tushish', "To'lov"],
	},
	{
		slug: 'ai',
		name: 'AI yechimlar',
		tagline: "Sun'iy intellekt bilan avtomatlashtirish",
		description:
			'Chatbot, tahlil va jarayonlarni avtomatlashtiruvchi AI tizimlar.',
		features: ['Chatbot', 'Hujjatlar tahlili', 'Avtomatlashtirish'],
	},
]

export function getAllProducts() {
	return products
}

export function getProductBySlug(slug: string) {
	return products.find(product => product.slug === slug)
}
