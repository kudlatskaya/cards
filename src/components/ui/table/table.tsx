import s from './table.module.scss'

export type Props = {}

export const Table = (props: Props) => {
    const {  } = props

    return (
        <div className={s.table}>
            <div className={s.head}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.body}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
