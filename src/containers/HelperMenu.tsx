import TheAudio from "../components/Audio/TheAudio"
import TheFullscreen from "../components/Fullscreen/TheFullscreen"
import styles from './HelperMenu.module.scss'

const HelperMenu = () => {
    return (
        <div className={styles.container}>
            <TheAudio />
            <TheFullscreen />
        </div>
    )
}

export default HelperMenu