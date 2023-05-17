import React from 'react'
import styles from '@/styles/roadmapPage.module.css'
import Nav from '@/components/Roadmap/nav'
import Roadcenter from '@/components/Roadmap/roadcenter'
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
