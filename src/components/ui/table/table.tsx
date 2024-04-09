import s from './table.module.scss'

type Data = {
    heads: string[],
    values: Value[]
}

type Value = {
    questionImg: string,
    question: string,
    answer: string,
    deckId: string,
    userId: string,
    grade: number,
    id: string,
    shots: number,
    answerImg: string,
    questionVideo: string,
    answerVideo: string,
    created: string,
    updated: string

}

export type Props = {
    data: Data
}

export const Table = (props: Props) => {
    const { data } = props
    // const columnCount =  data.heads.length;

    return (
        <table className={s.table}>
            {/*<div className={s.column}>*/}
            {/*    {*/}
            {/*        data.heads.map(head => <div>{head}</div>)*/}
            {/*    }*/}
            {/*</div>*/}
            <tr className={`${s.head} ${s.row} `}>
                {
                    data.heads.map(head => <th>{head}</th>)
                }
            </tr>

                {
                    data.values.map(value =>
                        <tr className={s.row}>
                            <td><img src={value.questionImg} /></td>
                            <td> {value.questionVideo}</td>
                            <td> {value.answer}</td>
                            <td> {value.shots}</td>
                            <td> {value.grade}</td>
                            <td> {'icons'}</td>
                        </tr>
                    )
                }

        </table>
    )
}
