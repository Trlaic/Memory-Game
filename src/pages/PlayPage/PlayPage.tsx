import { useParams } from 'react-router-dom'
import style from './PlayPage.module.scss'

import CardsGrid from '../../components/CardsGrid/CardsGrid'
import { useCallback, useState } from 'react'
import DisplayGameInfo from '../../components/DisplayGameInfo/DisplayGameInfo'

const PlayPage = () => {

    const {id} = useParams()
    
    const [moves, setMoves] = useState(0)
    const [misses, setMisses] = useState(0)

    const moveMade = useCallback(() => {
        setMoves((prev) => prev+1)
    }, [])

    const missMade = useCallback(() => {
        setMisses((prev) => prev+1)
    }, [])

    return (
        <div className={style.container}>
            <CardsGrid id={Number(id)} moveMade = {moveMade} missMade = {missMade}/>
            <DisplayGameInfo moves={moves} misses={misses}/>
        </div>
    )
}

export default PlayPage