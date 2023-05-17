import React from 'react'
import styles from '@/styles/roadmapPage.module.css'
import Nav from '../Roadmap/nav'
import Roadcenter from '../Roadmap/roadcenter'
const roadmap = () => {
    
    return (
        <div className={styles.Roadmap}>
            <div className={styles.RoadmapCenter}>
                <Nav />
                <Roadcenter />
            </div>
        </div>
    )
}

export default roadmap
