import BloodyText from '../components/BloodyText/BloodyText'
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.letters}>
                <BloodyText text='memory' />
                <BloodyText text='game' />
            </div>
        </div>
    ) 
}

export default HomePage