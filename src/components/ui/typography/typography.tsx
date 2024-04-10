import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'h1'> = {
	as?: T
	color?: string
	text: string
	variant?:
		| 'Body1'
		| 'Body2'
		| 'Caption'
		| 'H1'
		| 'H2'
		| 'H3'
		| 'H4'
		| 'Link1'
		| 'Link2'
		| 'Overline'
		| 'Subtitle1'
		| 'Subtitle2'
} & ComponentPropsWithoutRef<T>

const Typography = <T extends ElementType = 'h1'>(props: TypographyProps<T>) => {
	const { as: Component = 'h1', className, color, text, variant = 'h1', ...rest } = props

	return (
		<Component className={`${s[variant]} ${color === 'light' ? s.light : s.dark} `} {...rest}>
			{text}
		</Component>
	)
}

export default Typography
