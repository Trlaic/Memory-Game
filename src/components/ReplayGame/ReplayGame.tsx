import { useNavigate } from 'react-router-dom'
import style from './ReplayGame.module.scss'

interface ComponentProps {
    moves: number,
    misses: number
}

const ReplayGame: React.FC<ComponentProps> = ({moves, misses}) => {
    
    const navigate = useNavigate()
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const button = event.target as HTMLButtonElement
        navigate(`/play-game/${button.textContent}`)
        location.reload()
    }
    
    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <h1 className={style.heading1}>RESULT</h1>
                <p className={style.paragraph}>Moves: {moves}</p>
                <p className={style.paragraph}>Misses: {misses}</p>
                <h2 className={style.heading2}>BEST RESULT: 20</h2>
                <div className={style.buttons}>
                    <button onClick={handleClick} className={style.button}>12</button>
                    <button onClick={handleClick} className={style.button}>16</button>
                    <button onClick={handleClick} className={style.button}>20</button>
                </div>
            </div>
        </div>
    )
}

export default ReplayGame