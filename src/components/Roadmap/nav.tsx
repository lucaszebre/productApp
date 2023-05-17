import React from 'react'
import Goback from '../goback'
import styles from '@/styles/nav.module.css'
import { useRouter } from 'next/router';
const nav = () => {
    const router = useRouter()
    return (
        <div className={styles.nav}>
            <div className={styles.navBlock1}>
                <Goback  />
                <p className={styles.navP}>Roadmap</p>
            </div>
            <button onClick={()=>{router.push('/newfeed')}} className={styles.navButton}>
                + Add FeedBack
            </button>
        </div>
    )
}

export default nav
