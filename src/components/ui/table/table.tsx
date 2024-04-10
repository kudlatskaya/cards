import s from './table.module.scss'

type Data = {
	heads: string[]
	values: Value[]
}

type Value = {
	answer: string
	answerImg: string
	answerVideo: string
	created: string
	deckId: string
	grade: number
	id: string
	question: string
	questionImg: string
	questionVideo: string
	shots: number
	updated: string
	userId: string
}

export type Props = {
	data: Data
}

export const Table = (props: Props) => {
	const { data } = props

	return (
		<table className={s.table}>
			<tr className={`${s.head} ${s.row} `}>
				{data.heads.map((head) => (
					<th>{head}</th>
				))}
			</tr>
			{data.values.map((value) => (
				<tr className={s.row}>
					{Object.values(value).map((item) => (
						<td> {item}</td>
					))}
				</tr>
			))}
		</table>
	)
}
