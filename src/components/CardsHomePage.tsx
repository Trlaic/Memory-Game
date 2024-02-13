import styles from './CardsHomePage.module.scss'
import CompleteCard from './CompleteCard/CompleteCard'

const CardsHomePage = () => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <div className={styles.topLeft}>A<br />
                <div>♥</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.heart}>♥</div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.bottomRight}>A<br />
                <div>♥</div>  
                </div>
            </div>
            <CompleteCard text='PLAY'/>
            <div className={styles.gridItem}>
                <div className={styles.topLeft}>A<br />
                <div>♥</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.heart}>♥</div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.bottomRight}>A<br />
                <div>♥</div>  
                </div>
            </div>
        </div>
    )
}
export default CardsHomePage

