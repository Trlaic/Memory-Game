import style from './ReplayGame.module.scss'

interface ComponentProps {
    moves: number,
    misses: number
}

const ReplayGame: React.FC<ComponentProps> = ({moves, misses}) => {
    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <h1 className={style.heading1}>RESULT</h1>
                <p className={style.paragraph}>Moves: {moves}</p>
                <p className={style.paragraph}>Misses: {misses}</p>
                <h2 className={style.heading2}>BEST RESULT: 20</h2>
                <button className={style.button}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default ReplayGame