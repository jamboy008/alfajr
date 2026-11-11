import { z } from 'zod'

export const applicationSchema = z.object({
	name: z.string().min(2, 'Ismingizni kiriting'),
	phone: z.string().regex(/^\+?[0-9\s()-]{9,15}$/, "Telefon raqami noto'g'ri"),
	service: z.string().min(1, 'Xizmatni tanlang'),
	message: z.string().max(1000, 'Matn juda uzun'),
})

export type ApplicationValues = z.infer<typeof applicationSchema>
