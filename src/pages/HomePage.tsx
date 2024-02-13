import TheAudio from '../components/Audio/TheAudio'
import BloodyText from '../components/BloodyText/BloodyText'
import CardsHomePage from '../components/CardsHomePage'
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.container}>
            <TheAudio />
            <div className={styles.letters}>
                <BloodyText text='memory' />
                <BloodyText text='game' />
            </div>
            <CardsHomePage />
        </div>
    ) 
}

export default HomePage