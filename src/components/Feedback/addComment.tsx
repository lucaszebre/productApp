import React, { useState } from 'react'
import styles from '@/styles/addComment.module.css'

const addComment = () => {
    const [input,setInput] = useState('')
    
    return (
        <div className={styles.addComment}>
            <h1 className={styles.addCommentH1}>
                Add Comment
            </h1>
            <textarea content={input} maxLength={250} onChange={(e)=>{setInput(e.target.value)}} className={styles.addCommentTextArea}  placeholder='Type your comments here' name="" id="" cols={30} rows={10} />
            <div className={styles.addCommentBottom}>
                <p className={styles.addCommentP}>
                {`${250- input.length} Characters left`}
                </p>
                <button className={styles.addCommentButton}>
                Post Comment
                </button>
            </div>
        </div>
    )
}

export default addComment
