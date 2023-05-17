import React ,{useState} from 'react'
import styles from '@/styles/reply.module.css'
import Image from 'next/image'
import { Comment as CommentType } from '@/types/types'

interface CommentProps {
    comment: CommentType;
}

const Reply: React.FC<CommentProps> = ({ comment }) => {
    const [reply, setReply] = useState(false)
    
    if (!comment) return null; // Or handle this case however you prefer

    return (
        <div className={styles.reply}>
            
            <Image className={styles.avatar} src={comment.user.image} alt='avatar' width={40} height={40} />
            <div className={styles.commentBlock} >
                <div className={styles.commentRow}>
                    <div className={styles.commentCol}>
                        <h2 className={styles.commentH2}>{comment.user?.name }</h2>
                        <p className={styles.commentHashtag}>@{comment.user?.username.toLowerCase()}</p>
                    </div>
                    <p onClick={() => setReply((prevReply) => !prevReply)} className={styles.commentReply}>Reply</p>
                </div>
                <p className={styles.commentDescription}><span className={styles.ReplySpan}>@{comment.replyingTo}</span> {comment.content}</p>
                <div style={reply ? {display: 'flex'} : {display: 'none'}} className={styles.commentBottom}>
                    <textarea className={styles.commentTextArea} name="" id="" cols={30} rows={10} />
                    <button className={styles.commentButton}>Post Reply</button>
                </div>
                {
                    comment.replies && comment.replies.map((reply, index) => 
                        <div key={index} style={{ marginLeft: '20px' }}>
                            <Reply comment={reply} />
                        </div>
                    )
                }
            </div>
            </div>
    );
}

export default Reply;