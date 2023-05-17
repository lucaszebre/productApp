import React from 'react'
import styles from '@/styles/empty.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const empty = () => {
    const router = useRouter()

    return (
        <div className={styles.empty}>
            <Image src={'/assets/suggestions/illustration-empty.svg'} alt='illustration-empty' width={130} height={137} />
            <h1 className={styles.emptyH1}>
            There is no feedback yet.
            </h1>
            <p className={styles.emptyP}>
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
            </p>
            <button onClick={()=>{router.push('/newfeed')}} className={styles.emptyButton}>+ Add Feedback</button>
        </div>
    )
}

export default empty
