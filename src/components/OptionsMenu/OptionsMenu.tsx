import styles from './OptionsMenu.module.scss'

const OptionsMenu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Choose</h2>
            <ul className={styles.list}>
                <li className={styles.item}>Theme</li>
                <li className={styles.item}>Cards</li>
                <li className={styles.item}>Players</li>
            </ul>
        </div>
    )
}

export default OptionsMenu