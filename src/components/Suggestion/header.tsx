import React from 'react'
import styles from '@/styles/header.module.css'
import Image from 'next/image'
import data from '../../../public/data/data.json'
import { useSelector , useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setFilter,RootState } from '@/store/store';


const header = () => {
    const  dispatch =useDispatch()
    const display = useSelector((state: RootState) => state.display);

    const handleChange = (event: { target: { value: any; }; }) => {
        dispatch(setFilter(event.target.value));
    }
    const router = useRouter()
    return (
        <div className={styles.header}>
            <div className={styles.headerblock1}>
                <div className={styles.headersuggestion}>
                    <Image src={'/assets/suggestions/icon-suggestions.svg'} alt='icon-suggestion' width={23} height={24} />
                    <p className={styles.headerP}>
                        {`${data.productRequests.length} Suggestions`}
                    </p>
                </div>
                <div className={styles.headersort}>
                    <p className={styles.headerP2}>
                        Sort by :
                    </p>
                    <select className={styles.headerP} value={display.filter} onChange={handleChange}>
                        <option className={styles.option} value="most-upvotes">Most Upvotes</option>
                        <option className={styles.option} value="least-upvotes">Least Upvotes</option>
                        <option className={styles.option} value="most-comments">Most Comments</option>
                        <option className={styles.option} value="least-comments">Least Comments</option>
                    </select>
                </div>
            </div>
            <button onClick={()=>{router.push('/newfeed')}} className={styles.headerButton}>
                + Add Feedback
            </button>
        </div>
    )
    }

export default header
