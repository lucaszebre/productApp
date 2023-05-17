import React ,{useEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/goback.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';
const goback = () => {
    const display = useSelector((state: RootState) => state.display);
    const router = useRouter()
    function GetSrc(){
        if(router.pathname=='/roadmap'){
            return 'assets/shared/icon-arrow-white.svg'
        }
        else{
            return '/assets/shared/icon-arrow-left.svg'
        }
    }
    function GetStyle(){
        if(router.pathname=='/roadmap'){
            return {'color':'white'}
        }
        else{
            return {}
        }
    }
    
    return (
        <div style={GetStyle()} className={styles.goback} onClick={()=>{
            router.back()
        }}>
            <Image src={GetSrc()} width={8} height={7} alt='arrow-left' />
            <p className={styles.gobackP}>Go Back</p>
        </div>
    )
}

export default goback
