import styles from './styles.module.scss'
import { useEffect } from 'react'




export function Header(){
    var scroll = require('react-scroll');
    var scroll = scroll.animateScroll;

    useEffect(()=>{
        scroll.scrollTo(0, 'smooth')
    },[])

    function handleScrollAbout () {
        scroll.scrollTo(710, {smooth: true}, {delay: 500});
    }
    function handleScrollHome () {
        scroll.scrollTo(0, {smooth: true}, {delay: 500});
    }
    function handleScrollProjetos () {
        scroll.scrollTo(2280, {smooth: true}, {delay: 500});
    }
    function handleScrollContato () {
        scroll.scrollTo(3400, {smooth: true}, {delay: 500});
    }
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <button onClick={handleScrollHome}><img src="assets/next.png" alt="image/png" /></button>
                <nav>
                    <button onClick={handleScrollHome} className={styles.active}>Home</button>
                    <button onClick={handleScrollAbout}>Sobre</button> 
                    <button onClick={handleScrollProjetos}>Projetos</button>
                    
                    <button onClick={handleScrollContato}>Contato</button>         
                </nav>
            </div>
        </header>
    )
}