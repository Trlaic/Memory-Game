import BloodyText from '../components/BloodyText'
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.container}>
            <BloodyText text='memory' />
            <BloodyText text='game' />
        </div>
    ) 
}

export default HomePage