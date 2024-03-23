import style from './DisplayGameInfo.module.scss'

interface ComponentProps {
    moves: number,
    misses: number
}

const DisplayGameInfo : React.FC<ComponentProps> = ({moves, misses}) => {
    return (
        <div className={style.info}>
            <div className={style.details}>
                <h2 className={style.heading2}>{moves}</h2>
                <h3 className={style.heading3}>moves</h3>
            </div>
            <div className={style.details}>
                <h2 className={style.heading2}>{misses}</h2>
                <h3 className={style.heading3}>misses</h3>
            </div>
    </div>
    )
}

export default DisplayGameInfo