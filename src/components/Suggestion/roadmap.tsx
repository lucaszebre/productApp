import React from 'react'
import styles from '@/styles/roadmap.module.css'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import data from '../../../public/data/data.json'
const roadmap = () => {
    const router = useRouter()
    const inProgressItems = data.productRequests.filter(request => request.status === 'in-progress');
    const plannedItems = data.productRequests.filter(request => request.status === 'planned');
    const liveItems = data.productRequests.filter(request => request.status === 'live');
    return (
        <div className={styles.roadmap}>
            <div className={styles.roadmapTop}>
                <h1 className={styles.roadmapH1}>
                    Roadmap
                </h1>
                <p className={styles.roadmapP}
                onClick={()=>{
                    router.push('/roadmap')
                }}
                >
                    View
                </p>
            </div>
            <div className={styles.roadmapBottom}>
                <div className={styles.roadmapCol}>
                    <div className={styles.block1}>
                        <div style={{'background':'#F49F85'}}className={styles.round}></div>
                        <p className={styles.blockP}>
                            Planned
                        </p>
                    </div>
                    <div className={styles.block2}>
                        {inProgressItems.length}
                    </div>  
                </div> 
                <div className={styles.roadmapCol}>
                    <div className={styles.block1}>
                        <div style={{'background':'#AD1FEA'}} className={styles.round}></div>
                        <p className={styles.blockP}>
                            In-Progress
                        </p>
                    </div>
                    <div className={styles.block2}>
                        {plannedItems.length}
                    </div>  
                </div>
                <div className={styles.roadmapCol}>
                    <div className={styles.block1}>
                        <div style={{'background':'#62BCFA'}} className={styles.round}></div>
                        <p className={styles.blockP}>
                            Live
                        </p>
                    </div>
                    <div className={styles.block2}>
                        {liveItems.length}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default roadmap
