import { useParams } from 'react-router-dom'
import style from './PlayPage.module.scss'
import CompleteCard from '../../components/CompleteCard/CompleteCard'

const PlayPage = () => {

    const {id} = useParams()
    const gridStyle = id === '12' ? style.grid_1 : id === '16' ? style.grid_2 : style.grid_3 
    
    function renderCards() {
        const numOfCards = Number(id)
        if(numOfCards !== 12 && numOfCards !== 16 && numOfCards !== 20) {
            return //to be handled
        }
        const arrOfCards = []
        let output
        for(let i = 0; i < numOfCards; i+=1) {
            output = <CompleteCard key={i} text='CARD'/>;
            arrOfCards.push(output)
        }
        return arrOfCards
    } 

    return (
        <div className={style.container}>
            <div className={`${style.grid} ${gridStyle}`}>
                {renderCards()}
            </div>
        </div>
    )
}

export default PlayPage