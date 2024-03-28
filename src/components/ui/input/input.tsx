import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  disabled?: boolean
  error?: string
  fullWidth?: boolean
  label?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const {
    as: Component = 'input',
    className,
    disabled,
    error,
    fullWidth,
    label,
    variant = 'default',
    ...rest
  } = props

  return (
    <label className={`${s.label} ${disabled ? s.disabled : ''}`}>
      {label}
      <Component
        className={`${s.input} ${disabled || s[variant]} ${fullWidth ? s.fullWidth : ''} ${
          disabled ? s.disabled : ''
        } ${className}`}
        disabled={disabled}
        placeholder={'Input'}
        {...rest}
      />
      <span className={s.error}>{error}</span>
    </label>
  )
}
