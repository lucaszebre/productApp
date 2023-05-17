import React from 'react'
import styles from '@/styles/category.module.css'
import {  useDispatch } from 'react-redux';
import { setCategory } from '@/store/store';

const category = () => {
    const  dispatch =useDispatch()
    return (
        <div className={styles.category}>
            <div className={styles.categoryCol1}>
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('all'))}}
                >
                    All
                </div> 
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('ui'))}}
                >
                    UI
                </div>
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('ux'))}}
                >
                    UX
                </div>
            </div>
            <div className={styles.categoryCol1}>
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('enhancement'))}}
                >
                Enhancement
                </div> 
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('bug'))}}
                >
                Bug
                </div>
            
            </div>
            <div className={styles.categoryCol1}>
                <div className={styles.bubble}
                onClick={()=>{dispatch(setCategory('feature'))}}
                >
                Feature
                </div> 
            </div>
        </div>
    )
}

export default category
