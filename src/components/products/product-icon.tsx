import {
	Bot,
	Building2,
	Globe,
	LayoutGrid,
	Send,
	ShoppingCart,
	Smartphone,
	Users,
	type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
	websites: Globe,
	ecommerce: ShoppingCart,
	crm: Users,
	erp: Building2,
	'mobile-apps': Smartphone,
	telegram: Send,
	'telegram-mini-app': LayoutGrid,
	ai: Bot,
}

export function ProductIcon({
	slug,
	className,
}: {
	slug: string
	className?: string
}) {
	const Icon = icons[slug] ?? Globe

	return <Icon className={className} aria-hidden='true' />
}
