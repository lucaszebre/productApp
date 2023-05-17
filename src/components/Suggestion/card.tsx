import React from 'react'
import Image from 'next/image'
import styles from '@/styles/cardSuggestion.module.css'
import { useDispatch } from 'react-redux';
import {setComment, setProduct  } from '@/store/store';
import { useRouter } from 'next/router';
import { Comment } from '@/types/types';
const Card = (props:{
    id:number
    status:string,
    upvotes:number,
    title:string,
    description:string,
    category:string,
    comments:Comment[]
}) => {
    const  dispatch = useDispatch();
    const router = useRouter()

    return (
        <div className={styles.card} 
        onClick={()=>{
            dispatch(
                setProduct(
                    {
                        id:props.id,
                        title:props.title,
                        category:props.category,
                        upvotes:props.upvotes,
                        status:props.status,
                        description:props.description,
                        comments:props.comments
                    }
                )
            )
            
            router.push('/details')
        }}
        >
            <div className={styles.cardblock}>
                <div className={styles.cardbubble}>
                    <Image src={'/assets/shared/icon-arrow-up.svg'} alt='icon-arrow-up' width={10} height={10} />
                    <p className={styles.cardbubbleP}>
                        {props.upvotes}
                    </p>
                </div>
                <div className={styles.cardtag}>
                    <h1 className={styles.cardH1}>
                    {props.title}
                    </h1>
                    <p className={styles.cardP}>
                        {props.description}
                    </p>
                    <div className={styles.bubble}>
                    {props.category}
                    </div>
                </div>
            </div>
            <div className={styles.cardBlock2}>
                <div className={styles.cardMessage}>
                    <Image src={'/assets/shared/icon-comments.svg'} width={18} height={16} alt='icon-comments' />
                    <p className={styles.cardMessageNumber}>
                        {props.comments.length}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
