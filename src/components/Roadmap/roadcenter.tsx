import React ,{useState,useEffect} from 'react'
import styles from '@/styles/roadcenter.module.css'
import Card from '../Roadmap/card'
import data from '../../../public/data/data.json'

const roadcenter = () => {
    const inProgressItems = data.productRequests.filter(request => request.status === 'in-progress');
    const plannedItems = data.productRequests.filter(request => request.status === 'planned');
    const liveItems = data.productRequests.filter(request => request.status === 'live');

    const [choose,setChoose] = useState({
        planned:true,
        progress:false,
        live:false
    })

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);
    
    return (
        <div className={styles.roadcenter}>
        <div className={styles.roadMobileDiv}>
            <div 
            style={choose.planned ? {'color':'#3A4374',
            'borderBottom':'#AD1FEA 4px solid'}:{}}
            onClick={()=>{
                setChoose({
                    planned:true,
                    progress:false,
                    live:false
                })
            }} className={styles.Planned}>
            Planned
            </div>
            <div 
            style={choose.progress ? {'color':'#3A4374',
            'borderBottom':'#AD1FEA 4px solid'}:{}}
            onClick={()=>{
                setChoose({
                    planned:false,
                    progress:true,
                    live:false
                })
            }} className={styles.InProgress}>
            In-progress
            </div>
            <div 
            style={choose.live ? {'color':'#3A4374',
        'borderBottom':'#AD1FEA 4px solid'}:{}}
            onClick={()=>{
                setChoose({
                    planned:false,
                    progress:false,
                    live:true
                })
            }} className={styles.Live}>
            Live
            </div>
        </div>
        <div className={styles.roadColumn} 
        style={windowWidth < 765 && !choose.planned ? { display: 'none' } : {}}
        >
            <div className={styles.roadcenterTop}>
            <h1 className={styles.roadcenterH1}>{`Planned (${plannedItems.length})`}</h1>
            <p className={styles.roadcenterP}>Ideas priorizited for research</p>
            </div>
            <div id='planned' className={styles.roadcenterBottom}>
            {plannedItems.map(item => <Card 
                        key={item.id} 
                        status={item.status}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        numberFeedback={item.upvotes} // assuming `numberFeedback` is the number of upvotes
                        numberComment={item.comments ?item.comments.length : 0} // assuming `numberComment` is the number of comments
                        color="#F49F85" // replace with the actual color value
                    />)}
            </div>
        </div>
        <div className={styles.roadColumn}
        style={windowWidth < 765 && !choose.progress ? { display: 'none' } : {}}
        >
            <div className={styles.roadcenterTop}>
            <h1 className={styles.roadcenterH1}>{`In-Progress (${inProgressItems.length}`}</h1>
            <p className={styles.roadcenterP}>Currently Being developed</p>
            </div>
            <div id='inprogress' className={styles.roadcenterBottom}>
            {inProgressItems.map(item => <Card 
                        key={item.id} 
                        status={item.status}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        numberFeedback={item.upvotes} // assuming `numberFeedback` is the number of upvotes
                        numberComment={item.comments ?item.comments.length : 0} // assuming `numberComment` is the number of comments
                        color="#AD1FEA" // replace with the actual color value
                    />)}
            </div>
        </div>
        <div className={styles.roadColumn}
        style={windowWidth < 765 && !choose.live ? { display: 'none' } : {}}
        >
            <div className={styles.roadcenterTop}>
            <h1 className={styles.roadcenterH1}>{`Live (${liveItems.length})`}</h1>
            <p className={styles.roadcenterP}>Released features</p>
            </div>
            <div id='live' className={styles.roadcenterBottom}>
            {liveItems.map(item => <Card 
                        key={item.id} 
                        status={item.status}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        numberFeedback={item.upvotes} // assuming `numberFeedback` is the number of upvotes
                        numberComment={item.comments ?item.comments.length : 0} // assuming `numberComment` is the number of comments
                        color="#62BCFA" // replace with the actual color value
                    />)}
            </div>
        </div>
        </div>
    )
    }

export default roadcenter
