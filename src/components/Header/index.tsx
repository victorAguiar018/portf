import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import LogoHeader from '../../../public/assets/next.png'
import Link from 'next/link';



export function Header(){
    var scroll = require('react-scroll');
    var scroll = scroll.animateScroll;

 

    useEffect(()=>{
        scroll.scrollTo(0, 'smooth');
    },[])

    const [activeButton, setActiveButton] = useState(1);
    


    function handleScrollHome () {
        scroll.scrollTo(0, {smooth: true}, {delay: 500});
        setActiveButton(1);    
    }
    function handleScrollAbout () {
        scroll.scrollTo(800, {smooth: true}, {delay: 500});
        setActiveButton(2);
    }
    function handleScrollProjetos () {
        scroll.scrollTo(2330 , {smooth: true}, {delay: 500});
        setActiveButton(3);  
    }
    
    function handleScrollContato () {
        scroll.scrollTo(3800, {smooth: true}, {delay: 500});
        setActiveButton(4);
    }
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <button className={styles.buttonImg} onClick={handleScrollHome}>
                    <h1>Victor Aguiar</h1>
                </button>
                <nav>
                    <button onClick={handleScrollHome} className={activeButton===1 ? `${styles.active}` : ''}>
                        Home
                    </button>
                    <button onClick={handleScrollAbout} className={activeButton===2 ? `${styles.active}` : ''} >Sobre</button>
                    <button onClick={handleScrollProjetos} className={activeButton===3 ? `${styles.active}` : ''}>Projetos</button>
                    <button onClick={handleScrollContato} className={activeButton===4 ? `${styles.active}` : ''}>Contato</button>        
                </nav>
            </div>
        </header>
    )
}