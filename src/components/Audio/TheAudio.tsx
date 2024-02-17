import { useRef, useState } from 'react'
import styles from './TheAudio.module.scss'

const TheAudio = () => {
    const [audio, setAudio] = useState(false)
    const audioRef = useRef(new Audio())
    const audioStyling = audio ? '' : styles.audio_block

    function toggleAudio() {
        if(audio) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            setAudio(false)
        } else {
            const random = Math.random()
            if(random < 0.2) {
                audioRef.current = new Audio('../../../public/authorized_music.mp3')
            } else if(random < 0.6) {
                audioRef.current = new Audio('../../../public/tropical_music.mp3')
            } else {
                audioRef.current = new Audio('../../../public/colorful_flowers.mp3')
            }
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