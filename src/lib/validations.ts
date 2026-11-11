import { z } from 'zod'
import { getProductBySlug } from '@/data/products'

export const applicationSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Ismingizni kiriting')
		.max(80, 'Ism juda uzun'),
	phone: z
		.string()
		.trim()
		.regex(/^\+?[0-9\s()-]{9,17}$/, "Telefon raqami noto'g'ri"),
	service: z
		.string()
		.min(1, 'Xizmatni tanlang')
		.refine(value => getProductBySlug(value) !== undefined, "Xizmat noto'g'ri"),
	message: z.string().trim().max(1000, 'Matn juda uzun'),
	website: z.string().optional(),
})

export type ApplicationValues = z.infer<typeof applicationSchema>
