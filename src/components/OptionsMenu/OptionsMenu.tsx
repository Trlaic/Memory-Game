import styles from './OptionsMenu.module.scss'

const OptionsMenu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Choose</h2>
            <ul className={styles.list}>
                <li className={styles.item}>12 <span className={styles.span}>cards</span></li>
                <li className={styles.item}>16 <span className={styles.span}>cards</span></li>
                <li className={styles.item}>20 <span className={styles.span}>cards</span></li>
            </ul>
        </div>
    )
}

export default OptionsMenu