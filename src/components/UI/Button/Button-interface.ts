import { ReactNode } from 'react';
export interface IButton {
	children: ReactNode
	onClick?: (e?: any) => void
	className?: string
	type?: 'button' | 'submit'
	disabled?: boolean
}