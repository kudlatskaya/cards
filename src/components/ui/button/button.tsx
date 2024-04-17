import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
	as?: T
	disabled?: boolean
	fullWidth?: boolean
	icon?: ReactNode
	variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
	const {
		as: Component = 'button',
		children,
		className,
		disabled,
		fullWidth,
		icon,
		variant = 'primary',
		...rest
	} = props

	return (
		<Component
			className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${
				disabled ? s.disabled : ''
			} ${className}`}
			{...rest}
		>
			<span className={s.icon}>{icon}</span>
			{children}
		</Component>
	)
}
