import { useRef, useState } from 'react'
import styles from './TheAudio.module.scss'

const TheAudio = () => {
    const [audio, setAudio] = useState(false)
    const audioRef = useRef(new Audio('../../../public/authorized_music.mp3'))
    const audioStyling = audio ? '' : styles.audio_block

    function toggleAudio() {
        if(audio) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            setAudio(false)
        } else {
            audioRef.current.play()
            audioRef.current.loop = true
            setAudio(true)
        }
    }

    return (
        <div className={`${styles.audio_container} ${audioStyling}`} onClick={toggleAudio}>
            <img className={styles.audio} src="../../../public/musical_note.png" alt="Audio" />
        </div>
    )
}

export default TheAudio