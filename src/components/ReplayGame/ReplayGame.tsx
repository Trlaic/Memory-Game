import { useNavigate, useParams } from 'react-router-dom'
import style from './ReplayGame.module.scss'
import { useEffect, useState } from 'react'

interface ComponentProps {
    moves: number,
    misses: number
}

const ReplayGame: React.FC<ComponentProps> = ({moves, misses}) => {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const [record, setRecord] = useState('')

    useEffect(() => {
        console.log('RENDER')
        if(localStorage.getItem(`record-${id}`)) {
            if(moves < Number(localStorage.getItem(`record-${id}`))) {
                localStorage.setItem(`record-${id}`, moves.toString())
                setRecord(localStorage.getItem(`record-${id}`) as string)
            }
        } else {
            localStorage.setItem(`record-${id}`, moves.toString())
            setRecord(localStorage.getItem(`record-${id}`) as string)
        }
    }, [id, moves])
    
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const button = event.target as HTMLButtonElement
        navigate(`/play-game/${button.textContent}`)
        location.reload()
    }

    function handleClear() {
        localStorage.removeItem(`record-${id}`)
        setRecord('')
    }
    
    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <h1 className={style.heading1}>RESULT</h1>
                <p className={style.paragraph}>Moves: {moves}</p>
                <p className={style.paragraph}>Misses: {misses}</p>
                <h2 className={style.heading2}>BEST RESULT: {record}</h2>
                <div className={style.buttons}>
                    <button onClick={handleClick} className={style.button}>12</button>
                    <button onClick={handleClick} className={style.button}>16</button>
                    <button onClick={handleClick} className={style.button}>20</button>
                </div>
                <button onClick={handleClear} className={style.button}>Clear best result</button>
            </div>
        </div>
    )
}

export default ReplayGame