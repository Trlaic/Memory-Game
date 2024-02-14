import React, { useRef } from 'react'
import styles from './CompleteCard.module.scss'
import { useNavigate } from 'react-router-dom'

interface ComponentProps {
    text?: string,
    image?: string
}

const CompleteCard: React.FC<ComponentProps> = ({text, image}) => {

    const navigate = useNavigate()
    const headingRef = useRef<HTMLHeadingElement>(null)
    function handleClick() {
        if(headingRef.current?.textContent === 'PLAY') {
          navigate('/main-menu')
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    &nbsp;
                </div>
                <div className={styles.cardBack}>
                    {text ? <h2 ref={headingRef} onClick={handleClick} className={styles.heading2}>{text}</h2> : image}
                </div>
            </div>
        </div>
    )
}

export default CompleteCard

{/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div> */}