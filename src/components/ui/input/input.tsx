import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  disabled?: boolean
  fullWidth?: boolean
  label?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const {
    as: Component = 'input',
    className,
    disabled,
    fullWidth,
    label,
    variant = 'default',
    ...rest
  } = props

  return (
    <label className={s.label}>
      {label}
      <Component
        className={`${s.input} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${
          disabled ? s.disabled : ''
        } ${className}`}
        {...rest}
      />
    </label>
  )
}
