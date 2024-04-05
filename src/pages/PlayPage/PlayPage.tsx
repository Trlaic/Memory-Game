import { useParams } from 'react-router-dom'
import style from './PlayPage.module.scss'

import CardsGrid from '../../components/CardsGrid/CardsGrid'
import { useCallback, useState } from 'react'
import DisplayGameInfo from '../../components/DisplayGameInfo/DisplayGameInfo'
import ReplayGame from '../../components/ReplayGame/ReplayGame'

const PlayPage = () => {

    const {id} = useParams()
    
    const [moves, setMoves] = useState(0)
    const [misses, setMisses] = useState(0)
    
    const isOver = moves - misses === (Number(id) / 2) ? true : false

    const moveMade = useCallback(() => {
        setMoves((prev) => prev+1)
    }, [])

    const missMade = useCallback(() => {
        setMisses((prev) => prev+1)
    }, [])

    return (
        <div className={style.container}>
            {isOver && <ReplayGame moves={moves} misses={misses} />}
            <CardsGrid id={Number(id)} moveMade = {moveMade} missMade = {missMade}/>
            <DisplayGameInfo moves={moves} misses={misses}/>
        </div>
    )
}

export default PlayPage