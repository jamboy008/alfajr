import {  Mail, MapPin, Phone, Send } from 'lucide-react'
import { ContactCard } from '@/components/contact/contact-card'
import { contactConfig } from '@/config/contact'

const items = [
	{
		icon: Phone,
		title: 'Telefon',
		value: contactConfig.phone.label,
		href: contactConfig.phone.href,
	},
	{
		icon: Send,
		title: 'Telegram',
		value: contactConfig.telegram.label,
		href: contactConfig.telegram.href,
	},
	{
		icon: Mail,
		title: 'Email',
		value: contactConfig.email.label,
		href: contactConfig.email.href,
	},
	{
		icon: MapPin,
		title: 'Manzil',
		value: contactConfig.address,
	},
	
]

export function ContactList() {
	return (
		<div className='grid gap-4 sm:grid-cols-2'>
			{items.map(item => (
				<ContactCard key={item.title} {...item} />
			))}
		</div>
	)
}
