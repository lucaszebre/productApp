import React from 'react'
import styles from '@/styles/card.module.css'
import Image from 'next/image'
const Card = (props:{
    status:string,
    title:string,
    description:string,
    category:string,
    numberFeedback?:number,
    numberComment?:number,
    color:string,
}) => {
    
    return (
        <div className={styles.card} style={{'borderTop':` ${props.color} 5px solid` }}>
            <div className={styles.cardStatus}>
                <div style={{'background':props.color}} className={styles.round}></div>
                <p className={styles.cardStatusP}>{props.status}</p>
            </div>
            <h1 className={styles.cardTitle}>
                {props.title}
            </h1>
            <p className={styles.cardDescription}>
                {props.description}
            </p>
            <div className={styles.cardCategory}>
                {props.category}
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomBlock1}>
                    <Image src='/assets/shared/icon-arrow-up.svg' alt='arrow-up' width={10} height={10} />
                    <p className={styles.cardNumberFeed}>{props.numberFeedback}</p>
                </div>
                <div className={styles.cardBottomBlock2}>
                    <Image src='/assets/shared/icon-comments.svg' alt='icon-comment' width={18} height={16} />
                    <p className={styles.cardNumberComment}>{props.numberComment}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
