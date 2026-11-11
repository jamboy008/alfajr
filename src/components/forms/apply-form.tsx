'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { buttonStyles } from '@/components/ui/button'
import { applicationSchema, type ApplicationValues } from '@/lib/validations'
import { submitApplication } from '@/app/apply/actions'
import { getAllProducts } from '@/data/products'

const inputClass =
	'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20'

export function ApplyForm({ defaultService }: { defaultService: string }) {
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [errorText, setErrorText] = useState('')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ApplicationValues>({
		resolver: zodResolver(applicationSchema),
		defaultValues: {
			name: '',
			phone: '',
			service: defaultService,
			message: '',
			website: '',
		},
	})

	async function onSubmit(values: ApplicationValues) {
		setStatus('idle')
		const result = await submitApplication(values)

		if (result.ok) {
			setStatus('success')
			reset({ name: '', phone: '', service: '', message: '', website: '' })
			return
		}

		setErrorText(result.error ?? 'Xatolik yuz berdi')
		setStatus('error')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className='relative flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8'
		>
			<div
				aria-hidden='true'
				className='absolute -left-[9999px] h-0 w-0 overflow-hidden'
			>
				<label htmlFor='website'>Website</label>
				<input
					id='website'
					type='text'
					tabIndex={-1}
					autoComplete='off'
					{...register('website')}
				/>
			</div>

			<div className='flex flex-col gap-1.5'>
				<label htmlFor='name' className='text-sm font-medium'>
					Ism
				</label>
				<input
					id='name'
					autoComplete='name'
					className={inputClass}
					{...register('name')}
				/>
				{errors.name && (
					<p className='text-sm text-red-500'>{errors.name.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1.5'>
				<label htmlFor='phone' className='text-sm font-medium'>
					Telefon
				</label>
				<input
					id='phone'
					type='tel'
					autoComplete='tel'
					placeholder='+998 90 123 45 67'
					className={inputClass}
					{...register('phone')}
				/>
				{errors.phone && (
					<p className='text-sm text-red-500'>{errors.phone.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1.5'>
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
					<p className='text-sm text-red-500'>{errors.service.message}</p>
				)}
			</div>

			<div className='flex flex-col gap-1.5'>
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
					<p className='text-sm text-red-500'>{errors.message.message}</p>
				)}
			</div>

			<button
				type='submit'
				disabled={isSubmitting}
				className={buttonStyles('primary', 'w-full disabled:opacity-60')}
			>
				{isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
			</button>

			{status === 'success' && (
				<p
					role='status'
					className='rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400'
				>
					Arizangiz yuborildi. Tez orada boglanamiz.
				</p>
			)}
			{status === 'error' && (
				<p
					role='alert'
					className='rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400'
				>
					{errorText}
				</p>
			)}
		</form>
	)
}
