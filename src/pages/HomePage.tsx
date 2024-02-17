import BloodyText from '../components/BloodyText/BloodyText'
import CardsHomePage from '../components/CardsHomePage'
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={`${styles.letters} ${styles.letters_animation}`}>
                <BloodyText text='memory' />
                <BloodyText text='game' />
            </div>
            <div className={styles.cards_animation}>
                <CardsHomePage />
            </div>
        </div>
    ) 
}

export default HomePage