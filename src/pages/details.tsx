import React from 'react'
import Comment from '@/components/Feedback/comment'
import AddComment from '@/components/Feedback/addComment'
import Top from '@/components/Feedback/top'
import styles from '@/styles/details.module.css'
import { useSelector } from 'react-redux';
import { RootState }  from '@/store/store'

const Details = () => {
    const product = useSelector((state: RootState) => state.display.product);
    const comments = useSelector((state: RootState) => state.display.product.comments);

    return (
        <div className={styles.detailsCenter}>
            <div className={styles.detailsWrapper}>
                <Top />
                <Comment   />
                <AddComment />
            </div>
        </div>
    )
}

export default Details;

