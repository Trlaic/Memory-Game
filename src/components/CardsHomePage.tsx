import styles from './CardsHomePage.module.scss'

const CardsHomePage = () => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <div className={styles.topLeft}>A<br />
                <div style={{ color: 'black' }}>♥</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.heart}>♥</div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.bottomRight}>A<br />
                <div style={{ color: 'black' }}>♥</div>  
                </div>
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem2}`}>
                <div><br />
                <div></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div><br />
                <div></div>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.topLeft}>A<br />
                <div style={{ color: 'black' }}>♥</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.heart}>♥</div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.bottomRight}>A<br />
                <div style={{ color: 'black' }}>♥</div>  
                </div>
            </div>
        </div>
    )
}
export default CardsHomePage

