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

	const paddingsStyle = iconStart ? s.paddings : ''
	//= variant === 'password' ? s.iconEnd : variant === 'search' ? s.iconStart : ''

	return (
		<label className={`${s.label} ${disabled ? s.disabled : ''}`}>
			{label}
			<div className={s.inputWrapper}>
				{iconStart && <span className={s.iconStart}>{iconStart}</span>}
				<Component
					className={` ${s.input} 
					${paddingsStyle}
                     ${disabled || s[variant]} 
                     ${fullWidth && s.fullWidth} 
                     ${className} 
                     ${errorMessage && s.error}`}
					disabled={disabled}
					placeholder={'Input'}
					{...rest}
				/>
				{iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
			</div>
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</label>
	)
}
