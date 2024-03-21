import { useRef } from "react"
import styles from './TheFullscreen.module.scss'

const TheFullscreen = () => {
    
    const bodyRef = useRef<HTMLElement>(document.body)
    function handleFullscreen() {
        if(document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            bodyRef.current.requestFullscreen()
            bodyRef.current.style.overflow = 'auto';
        }
    }
    
    return (
        <div className={styles.container}>
            <img className={styles.image} onClick={handleFullscreen} src="../../../public/fullscreen.png" alt="Fullscreen" />
        </div>
    )
}

export default TheFullscreen