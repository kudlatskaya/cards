import { ComponentProps, ComponentPropsWithoutRef, FC, useState } from 'react'

import SvgExpandLess from '@/assets/icons/components/ExpandLess'
import ExpandMore from '@/assets/icons/components/ExpandMore'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = (props) => {
	return <table className={s.table} {...props} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = (props) => {
	return <thead className={s.head} {...props} />
}

export type ThProps = {
	children: string
	// less?: boolean
} & ComponentPropsWithoutRef<'th'>

export const Th: FC<ThProps> = ({ children, ...rest }) => {
	const [less, setLess] = useState(true)

	const onClickHandler = () => {
		setLess(!less)
	}

	return (
		<th className={s.th} {...rest}>
			{children}
			{less ? (
				<span className={s.icon} onClick={onClickHandler}>
					{<SvgExpandLess />}
				</span>
			) : (
				<span className={s.icon} onClick={onClickHandler}>
					{<ExpandMore />}
				</span>
			)}
		</th>
	)
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = (props) => {
	return <tbody {...props} />
}

export type TrProps = ComponentProps<'tr'>

export const Tr: FC<TrProps> = (props) => {
	return <tr className={s.tr} {...props} />
}

export type TdProps = ComponentProps<'td'>

export const Td: FC<TdProps> = (props) => {
	return <td className={s.td} {...props} />
}

export const Table = {
	Body,
	Head,
	Root,
	Td,
	Th,
	Tr,
}
