import React ,{useState} from 'react'
import styles from '@/styles/comment.module.css'
import Image from 'next/image'
import Reply from './reply';
import { useSelector } from 'react-redux';
import  { RootState }  from '@/store/store';



const Comment = () => {
    const [reply, setReply] = useState(false)
    const comments = useSelector((state: RootState) => state.display.product.comments);

    if (!comments) return null; // Or handle this case however you prefer

    function recursiveArrayLength(arr:any) {
        let count = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                count += recursiveArrayLength(arr[i]);
            }
        }
        return count;
    }
    
    return (
        <div className={styles.comment}>
            <h1 className={styles.commentH1}>
                {`${recursiveArrayLength(comments) || 0} Comments`}
            </h1>
            {
    comments && comments.map((comment, index) => (
        <div className={styles.commentCard} key={index}>
            <Image className={styles.avatar} src={comment.user.image} alt='avatar' width={40} height={40} />
            <div className={styles.commentBlock}>
                <div className={styles.commentRow}>
                    <div className={styles.commentCol}>
                        <h2 className={styles.commentH2}>{comment.user?.name }</h2>
                        <p className={styles.commentHashtag}>@{comment.user?.username.toLowerCase()}</p>
                    </div>
                    <p onClick={() => setReply((prevReply) => !prevReply)} className={styles.commentReply}>Reply</p>
                </div>
                <p className={styles.commentDescription}>{comment.content}</p>
                <div style={reply ? {display: 'flex'} : {display: 'none'}} className={styles.commentBottom}>
                    <textarea className={styles.commentTextArea} name="" id="" cols={30} rows={10} />
                    <button className={styles.commentButton}>Post Reply</button>
                </div>
                {
                    comment.replies && comment.replies.map((reply, index) => 
                        <div key={index} style={{ marginLeft: '40px' }}>
                            <Reply comment={reply} />
                        </div>
                    )
                }
            </div>
        </div>
    ))
}

            
        </div>
    );
}

export default Comment;



