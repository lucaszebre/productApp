import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/styles/Home.module.css'
import EditFeed from '@/components/editFeed'
import { RootState } from '@/store/store';
export default function EditFeedPage() {
    const display = useSelector((state: RootState) => state.display);

    return (
    <>
        <div className={styles.CenterAll}>
            <EditFeed />
        </div>
    </>
    )
}
