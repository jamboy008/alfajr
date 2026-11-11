'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationSchema, type ApplicationValues } from '@/lib/validations'
import { submitApplication } from '@/app/apply/actions'
import { getAllProducts } from '@/data/products'

const inputClass =
	'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'

export function ApplyForm() {
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [errorText, setErrorText] = useState('')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ApplicationValues>({
		resolver: zodResolver(applicationSchema),
		defaultValues: { name: '', phone: '', service: '', message: '' },
	})

	async function onSubmit(values: ApplicationValues) {
		setStatus('idle')
		const result = await submitApplication(values)

		if (result.ok) {
			setStatus('success')
			reset()
			return
		}

		setErrorText(result.error ?? 'Xatolik yuz berdi')
		setStatus('error')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
		>
			<div className='flex flex-col gap-1'>
				<label htmlFor='name' className='text-sm font-medium'>
					Ism
				</label>
				<input id='name' className={inputClass} {...register('name')} />
				{errors.name && (
					<p className='text-sm text-red-600'>{errors.name.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1'>
				<label htmlFor='phone' className='text-sm font-medium'>
					Telefon
				</label>
				<input
					id='phone'
					type='tel'
					placeholder='+998 90 123 45 67'
					className={inputClass}
					{...register('phone')}
				/>
				{errors.phone && (
					<p className='text-sm text-red-600'>{errors.phone.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1'>
				<label htmlFor='service' className='text-sm font-medium'>
					Xizmat
				</label>
				<select id='service' className={inputClass} {...register('service')}>
					<option value=''>Tanlang</option>
					{getAllProducts().map(product => (
						<option key={product.slug} value={product.slug}>
							{product.name}
						</option>
					))}
				</select>
				{errors.service && (
					<p className='text-sm text-red-600'>{errors.service.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1'>
				<label htmlFor='message' className='text-sm font-medium'>
					Xabar
				</label>
				<textarea
					id='message'
					rows={4}
					className={inputClass}
					{...register('message')}
				/>
				{errors.message && (
					<p className='text-sm text-red-600'>{errors.message.message}</p>
				)}
			</div>

			<button
				type='submit'
				disabled={isSubmitting}
				className='rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-60'
			>
				{isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
			</button>

			{status === 'success' && (
				<p className='rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700'>
					Arizangiz yuborildi. Tez orada boglanamiz.
				</p>
			)}
			{status === 'error' && (
				<p className='rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700'>
					{errorText}
				</p>
			)}
		</form>
	)
}
