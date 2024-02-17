import { PuffLoader } from "react-spinners"
import styles from './PageSpinner.module.scss'

const PageSpinner = () => {
    return (
        <div className={styles.container}>
            <PuffLoader size={300} color="#880808"/>
        </div>
    )
}

export default PageSpinner