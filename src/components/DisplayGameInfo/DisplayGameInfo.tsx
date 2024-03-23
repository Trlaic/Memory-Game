import style from './DisplayGameInfo.module.scss'

const DisplayGameInfo = () => {
    return (
        <div className={style.info}>
            <div className={style.details}>
                <h2 className={style.heading2}>0</h2>
                <h3 className={style.heading3}>moves</h3>
            </div>
            <div className={style.details}>
                <h2 className={style.heading2}>0</h2>
                <h3 className={style.heading3}>misses</h3>
            </div>
    </div>
    )
}

export default DisplayGameInfo