import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/styles/Home.module.css'
import NewFeed from '@/components/newFeed'
import { RootState } from '@/types/types';
export default function newFeed() {
    const display = useSelector((state: RootState) => state.display);

    return (
        <>


        <div className={styles.CenterAll}>
            <NewFeed />
        </div>
        </>
    )
}