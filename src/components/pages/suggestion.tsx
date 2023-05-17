import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Category from '@/components/Suggestion/category';
import MiniBoard from '@/components/Suggestion/MiniBoard';
import Roadmap from '@/components/Suggestion/roadmap';
import Header from '@/components/Suggestion/header';
import Card from '@/components/Suggestion/card';
import Empty from '../Suggestion/empty';
import Sidebar from '../Suggestion/sidebar';
import styles from '@/styles/suggestion.module.css';
import data from '../../../public/data/data.json';
import { RootState } from '@/store/store';

const Suggestion = () => {
    // Initial check if data is available and in expected format
    if (!data || !data.productRequests || !Array.isArray(data.productRequests)) {
        console.error('Invalid data');
        return;
    }

    const productRequests = data.productRequests;
    const { filter, category } = useSelector((state: RootState) => state.display);
    const [requests, setRequests] = useState(productRequests);

    useEffect(() => {
        let sortedRequests = [...productRequests]; 

        // Sort requests based on selected filter
        switch (filter) {
            case 'most-upvotes':
                sortedRequests.sort((a, b) => b.upvotes - a.upvotes);
                break;
            case 'least-upvotes':
                sortedRequests.sort((a, b) => a.upvotes - b.upvotes);
                break;
            case 'most-comments':
                sortedRequests.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
                break;
            case 'least-comments':
                sortedRequests.sort((a, b) => (a.comments?.length || 0) - (b.comments?.length || 0));
                break;
        }

        // Filter requests based on selected category
        if (category && category !== 'all') {
            sortedRequests = sortedRequests.filter((request) => request.category === category);
        }

        setRequests(sortedRequests);
    }, [filter, category]);

    return (
        <>
            <Sidebar />
            <div className={styles.CenterAll}>
                <div className={styles.Center}>
                    <div className={styles.Block1}>
                        <MiniBoard />
                        <Category />
                        <Roadmap />
                    </div>
                    <div className={styles.Block2}>
                        <Header />
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <Card 
                                    id={request.id}
                                    key={request.id}
                                    title={request.title}
                                    category={request.category}
                                    upvotes={request.upvotes}
                                    status={request.status}
                                    description={request.description}
                                    comments={request.comments || []}
                                />
                            ))
                        ) : (
                            <Empty />
                        )}
                    </div>
                </div>
                <div className={styles.CenterMobile}>
                    <MiniBoard />
                    <Header />
                    <div className={styles.BlockMobile}>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <Card 
                                    id={request.id}
                                    key={request.id}
                                    title={request.title}
                                    category={request.category}
                                    upvotes={request.upvotes}
                                    status={request.status}
                                    description={request.description}
                                    comments={request.comments || []}
                                />
                            ))
                        ) : (
                            <Empty />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Suggestion;

