import React from 'react'
import Goback from '../goback'
import Card from '../Suggestion/card'
import styles from '@/styles/top.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'
const top = () => {
    const display = useSelector((state: RootState) => state.display.product);
    const router = useRouter()
    return (
        <div className={styles.topDiv}>
            <div className={styles.top}>
                <Goback />
                <button className={styles.topButton}
                onClick={()=>{
                    router.push('/editfeed')
                }} 
                >
                    Edit Feedback
                </button>
            </div>
            <Card title={display.title} category={display.category} upvotes={ display.upvotes} status={display.status} description={display.description}
                id={display.id} comments={display.comments}     />    
        </div>
    )
}

export default top
