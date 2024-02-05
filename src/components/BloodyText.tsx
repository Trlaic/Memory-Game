import React, { ReactElement, useEffect, useRef } from "react"

import styles from './BloodyText.module.scss'
import { cssNameDependingOnElementCount } from "../functions/countHtmlElements"

interface ComponentProps {
    text: string
}

const BloodyText: React.FC<ComponentProps> = ({text}) => {
    
    const el = useRef<ReactElement[]>([])

    useEffect(() => {
        const arr = []
        const len = text.length
        const letter = cssNameDependingOnElementCount(len)
        for(let i = 0; i < len; i+=1) {
            arr.push(<span key={i} className={`${styles.letter} ${styles[letter]}`}>{'\u00a0'}</span>)
        }
        el.current = arr
    }, [text.length])

    return (
        <h2 className={styles.heading}>
            {text}
            {el.current.map((el)=> el)}
        </h2>
    )
}

export default BloodyText