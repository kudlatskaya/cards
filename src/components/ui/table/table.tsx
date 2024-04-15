import { ComponentProps, FC } from 'react'

// import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = (props) => {
	return <table {...props} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = (props) => {
	return <thead {...props} />
}

export type ThProps = ComponentProps<'th'>

export const Th: FC<ThProps> = (props) => {
	return <th {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = (props) => {
	return <tbody {...props} />
}

export type TrProps = ComponentProps<'tr'>

export const Tr: FC<TrProps> = (props) => {
	return <tr {...props} />
}

export type TdProps = ComponentProps<'td'>

export const Td: FC<TdProps> = (props) => {
	return <td {...props} />
}

export const Table = {
	Body,
	Head,
	Root,
	Td,
	Th,
	Tr,
}
