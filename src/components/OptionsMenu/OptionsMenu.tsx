import { useNavigate } from 'react-router-dom'
import styles from './OptionsMenu.module.scss'

const OptionsMenu = () => {

    const navigate = useNavigate()

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        const datatype = e.currentTarget.getAttribute('datatype')
        const param = datatype === 'cards-1' ? 12 : datatype === 'cards-2' ? 16 : 20
        navigate(`/play-game/${param}`)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Choose</h2>
            <ul className={styles.list}>
                <li datatype='cards-1' onClick={handleClick} className={styles.item}>12 <span className={styles.span}>cards</span></li>
                <li datatype='cards-2' onClick={handleClick} className={styles.item}>16 <span className={styles.span}>cards</span></li>
                <li datatype='cards-3' onClick={handleClick} className={styles.item}>20 <span className={styles.span}>cards</span></li>
            </ul>
        </div>
    )
}

export default OptionsMenu