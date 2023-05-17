import React from 'react'
import Category from './category'
import Roadmap from './roadmap'
import styles from '@/styles/sidebar.module.css'
import { useSelector  } from 'react-redux';
import { RootState } from '@/store/store';

const sidebar = () => {
    const display = useSelector((state: RootState) => state.display);

    return (
        <div style={display.sidebar? {'display':'flex'}:{}} className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
                <Roadmap />
                <Category />
            </div>
        </div>
    )
}

export default sidebar
