'use server'

import { headers } from 'next/headers'
import { applicationSchema, type ApplicationValues } from '@/lib/validations'
import { getProductBySlug } from '@/data/products'

type Result = { ok: boolean; error?: string }

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 3
const hits = new Map<string, number[]>()

function isRateLimited(key: string) {
	const now = Date.now()

	if (hits.size > 5000) {
		hits.clear()
	}

	const recent = (hits.get(key) ?? []).filter(time => now - time < WINDOW_MS)

	if (recent.length >= MAX_REQUESTS) {
		hits.set(key, recent)
		return true
	}

	recent.push(now)
	hits.set(key, recent)
	return false
}

function singleLine(value: string) {
	return value.replace(/[\r\n]+/g, ' ').trim()
}

export async function submitApplication(
	values: ApplicationValues,
): Promise<Result> {
	const parsed = applicationSchema.safeParse(values)

	if (!parsed.success) {
		return { ok: false, error: "Ma'lumotlar noto'g'ri" }
	}

	if (parsed.data.website) {
		return { ok: true }
	}

	const headerList = await headers()
	const ip =
		headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

	if (isRateLimited(ip)) {
		return {
			ok: false,
			error: "Juda ko'p urinish. Birozdan keyin qayta urinib ko'ring.",
		}
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
		`Ism: ${singleLine(name)}`,
		`Telefon: ${singleLine(phone)}`,
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
				signal: AbortSignal.timeout(8000),
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
