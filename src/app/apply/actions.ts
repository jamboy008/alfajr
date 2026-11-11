'use server'

import { applicationSchema, type ApplicationValues } from '@/lib/validations'
import { getProductBySlug } from '@/data/products'

type Result = { ok: boolean; error?: string }

export async function submitApplication(
	values: ApplicationValues,
): Promise<Result> {
	const parsed = applicationSchema.safeParse(values)

	if (!parsed.success) {
		return { ok: false, error: "Ma'lumotlar noto'g'ri" }
	}

	const token = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID

	if (!token || !chatId) {
		return { ok: false, error: 'Server sozlanmagan' }
	}

	const { name, phone, service, message } = parsed.data
	const serviceName = getProductBySlug(service)?.name ?? service

	const text = [
		'Yangi ariza',
		`Ism: ${name}`,
		`Telefon: ${phone}`,
		`Xizmat: ${serviceName}`,
		`Xabar: ${message || '-'}`,
	].join('\n')

	try {
		const response = await fetch(
			`https://api.telegram.org/bot${token}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: chatId, text }),
			},
		)

		if (!response.ok) {
			return { ok: false, error: "Yuborib bo'lmadi" }
		}

		return { ok: true }
	} catch {
		return { ok: false, error: 'Tarmoq xatosi' }
	}
}
