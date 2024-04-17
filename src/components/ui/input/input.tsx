import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
	as?: T
	disabled?: boolean
	errorMessage?: string
	fullWidth?: boolean
	iconEnd?: ReactNode
	iconStart?: ReactNode
	label?: string
	variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
	const {
		as: Component = 'input',
		className,
		disabled,
		errorMessage,
		fullWidth,
		iconEnd,
		iconStart,
		label,
		variant = 'default',
		...rest
	} = props

	const icon = variant === 'password' ? s.iconPassword : variant === 'search' ? s.iconSearch : ''

	return (
		<label className={`${s.label} ${disabled ? s.disabled : ''}`}>
			{label}
			{iconStart}
			<Component
				className={` ${s.input} 
                     ${disabled || s[variant]} 
                     ${fullWidth && s.fullWidth} 
                     ${className} 
                     ${icon} 
                     ${errorMessage && s.error}`}
				disabled={disabled}
				placeholder={'Input'}
				{...rest}
			/>
			{iconEnd}
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</label>
	)
}
