import React from 'react'
import styles from '@/styles/MiniBoard.module.css'
import Image from 'next/image'
import {  useDispatch } from 'react-redux';
import { toggleSideBar } from '@/store/store';
const MiniBoard = () => {
    const dispatch= useDispatch();
    return (
        <div className={styles.MiniBoard}>
            <Image className={styles.ImageMiniBoard} src={'/assets/suggestions/desktop/background-header.png'} fill alt='background-header' />
            <div className={styles.MiniBoardWrapper}>
                <h1 className={styles.MiniBoardH1}>
                    Frontend Mentor
                </h1>
                <p className={styles.MiniBoardP}>
                    Feedback Board
                </p>
            </div>
            <Image onClick={() => dispatch(toggleSideBar())} className={styles.Hamburger} src={'/assets/shared/mobile/icon-hamburger.svg'} width={20} height={17} alt='icon-hamburger' />
        </div>
    )
    }

export default MiniBoard
