import { useRef } from 'react'
import styles from './MainMenu.module.scss'

const MainMenu = () => {

    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    function openOptionsMenu() {
        menuRef.current?.classList.remove(`${styles.hidden}`)
        buttonRef.current?.classList.add(`${styles.hidden}`)
    }


    return (
        <div className={styles.container}>
            <video className={styles.video} autoPlay loop muted>
                <source src="../../../../public/castle.mp4" type="video/mp4" />
                Your browser doesn't support the video tag
            </video>
            <button ref={buttonRef} className={styles.button}>
                <img onClick={openOptionsMenu} className={styles.image} src="../../../../public/icons8-bat-100.png" alt="Button options" />
            </button>
            <div ref={menuRef} className={styles.hidden}>MENU</div>
        </div>
    )
}

export default MainMenu