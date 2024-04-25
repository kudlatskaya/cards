import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type Props<T extends ElementType = 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'> = {
	color?: string
	href?: string
} & ComponentPropsWithoutRef<T>
export const H1 = ({ children, color }: Props) => {
	return <h1 className={`${s.H1} ${color === 'light' ? s.light : s.dark} `}>{children} </h1>
}

export const H2 = ({ children, color }: Props) => {
	return <h2 className={`${s.H2} ${color === 'light' ? s.light : s.dark} `}>{children} </h2>
}

export const Body1 = ({ children, color }: Props) => {
	return <p className={`${s.Body1} ${color === 'light' ? s.light : s.dark} `}>{children} </p>
}

export const Body2 = ({ children, color }: Props) => {
	return <p className={`${s.Body2} ${color === 'light' ? s.light : s.dark} `}>{children} </p>
}

export const Caption = ({ children, color }: Props) => {
	return <p className={`${s.Caption} ${color === 'light' ? s.light : s.dark} `}>{children} </p>
}

export const H3 = ({ children, color }: Props) => {
	return <h3 className={`${s.H3} ${color === 'light' ? s.light : s.dark} `}>{children} </h3>
}

export const H4 = ({ children, color }: Props) => {
	return <h4 className={`${s.H4} ${color === 'light' ? s.light : s.dark} `}>{children} </h4>
}

export const Link1 = ({ children, color, href }: Props) => {
	return (
		<a className={`${s.Link1} ${color === 'light' ? s.light : s.dark} `} href={href}>
			{children}{' '}
		</a>
	)
}

export const Link2 = ({ children, color, href }: Props) => {
	return (
		<a className={`${s.Link2} ${color === 'light' ? s.light : s.dark} `} href={href}>
			{children}{' '}
		</a>
	)
}

export const Overline = ({ children, color }: Props) => {
	return <p className={`${s.Overline} ${color === 'light' ? s.light : s.dark} `}>{children} </p>
}

export const Subtitle1 = ({ children, color }: Props) => {
	return <h5 className={`${s.Subtitle1} ${color === 'light' ? s.light : s.dark} `}>{children} </h5>
}

export const Subtitle2 = ({ children, color }: Props) => {
	return <h6 className={`${s.Subtitle2} ${color === 'light' ? s.light : s.dark} `}>{children} </h6>
}

export const Typography = {
	Body1,
	Body2,
	Caption,
	H1,
	H2,
	H3,
	H4,
	Link1,
	Link2,
	Overline,
	Subtitle1,
	Subtitle2,
}
