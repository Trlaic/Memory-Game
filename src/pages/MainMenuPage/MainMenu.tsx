import { useRef } from 'react'
import styles from './MainMenu.module.scss'
import OptionsMenu from '../../components/OptionsMenu/OptionsMenu'

const MainMenu = () => {

    const menuRef = useRef<HTMLDivElement>(null)
    const optionsRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    function openOptionsMenu() {
        menuRef.current?.classList.remove(`${styles.hidden}`)
        buttonRef.current?.classList.add(`${styles.hidden}`)

        setTimeout(() => {
            videoRef.current?.classList.add(`${styles.hidden}`)
        }, 2100)
        setTimeout(() => {
            optionsRef.current?.classList.remove(`${styles.hidden}`)
        }, 3000)
    }

    return (
        <div className={styles.container}>
            <video ref={videoRef} className={styles.video} autoPlay loop muted>
                <source src="../../../../public/castle.mp4" type="video/mp4" />
                Your browser doesn't support the video tag
            </video>
            <button ref={buttonRef} className={`${styles.button} ${styles.button_animation}`}>
                <img onMouseEnter={openOptionsMenu} className={styles.image} src="../../../../public/icons8-bat-100.png" alt="Button options" />
            </button>
            <div ref={menuRef} className={`${styles.hidden} ${styles.options_menu}`}>
                <div ref={optionsRef} className={`${styles.hidden} ${styles.options_container}`}>
                    <OptionsMenu />
                </div>
            </div>
        </div>
    )
}

export default MainMenu