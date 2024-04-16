import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
	as?: T
	disabled?: boolean
	errorMessage?: string
	fullWidth?: boolean
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
		label,
		variant = 'default',
		...rest
	} = props

	const icon = variant === 'password' ? s.iconPassword : variant === 'search' ? s.iconSearch : ''

	return (
		<label className={`${s.label} ${disabled ? s.disabled : ''}`}>
			{label}
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
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</label>
	)
}
