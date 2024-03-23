import style from './CardsGrid.module.scss'
import disableBodyInteractionForTime from "../../functions/disableUserInteraction"
import CompleteCard from '../CompleteCard/CompleteCard'
import shuffleArray from '../../functions/shuffleArray'
import React from 'react'

interface ComponentProps {
    id: number,
    moveMade: () => void,
    missMade: () => void
}

const CardsGrid : React.FC<ComponentProps> = React.memo(({ id, moveMade, missMade }) => {
    console.log('CARDS GRID RENDER')
    const gridStyle = id === 12 ? style.grid_1 : id === 16 ? style.grid_2 : style.grid_3 
    
    let cardInnerClicked = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let previousCard: HTMLDivElement | null
    
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {   
        const target = event.target as HTMLElement;
        if (target.getAttribute('datatype') === 'complete-card') {
            cardInnerClicked+=1
            
            if(cardInnerClicked % 2 !== 0) {
                disableBodyInteractionForTime(500)
            } else {
                disableBodyInteractionForTime(1850)
            }

            const targetWrapper = target.closest("[datatype^='complete-card-wrapper']") as HTMLDivElement;
            if(cardInnerClicked % 2 !== 0) {
                previousCard = targetWrapper
            }
            
            targetWrapper.style.transform = 'rotateY(180deg)'
            
            if(cardInnerClicked > 0 && cardInnerClicked % 2 === 0) {
                setTimeout(() => {
                    moveMade()
                    if(targetWrapper.getAttribute('datatype') === previousCard?.getAttribute('datatype')) {
                        targetWrapper.style.visibility = 'hidden'
                        previousCard.style.visibility = 'hidden'
                        return
                    }
                    missMade()
                    targetWrapper.style.transform = 'rotateY(0deg)'
                    if(previousCard) {
                        previousCard.style.transform = 'rotateY(0deg)'
                    }
                }, 1250)
            }
        }
    }

    function renderCards() {
        const numOfCards = Number(id)
        if(numOfCards !== 12 && numOfCards !== 16 && numOfCards !== 20) {
            return //to be handled
        }
        const arrOfCards = []
        let output
        let image
        let temp = 0
        const max = numOfCards === 12 ? 6 : numOfCards === 16 ? 8 : 10
        for(let i = 0; i < numOfCards; i+=1) {
            if(i === max) temp = 0
            image = <img src={`/game-images/img-${temp+1}.jpg`} className={style.image} alt='image'/>
            output = <CompleteCard serialNumber={temp+1} key={i} image={image} gameCard={true}/>;
            arrOfCards.push(output)
            temp+=1
        }
        const arrayShuffled = shuffleArray(arrOfCards)
        return arrayShuffled
    } 
    return (
        <div onClick={handleClick} className={`${style.grid} ${gridStyle}`}>
            {renderCards()}
        </div>
    )
})

export default CardsGrid