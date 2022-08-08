import styles from './styles.module.scss';
import { useRef } from 'react';

export function Projetos () {

    const carousel = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    const github = () => {
        
    }

    return(
        <section className={styles.container}>
            <div className={styles.content} >
                <div data-aos='fade-right' className={styles.projetos}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles.contentButtonProjetos}>
                    <div data-aos="fade-right" className={styles.contentButtonArea1}>
                        <button className={styles.active}>Projetos de Estudos</button>    
                    </div>
                    <div data-aos="fade-left" className={styles.contentButtonArea2}>
                        <button>Projetos de Trabalho</button>
                    </div>
                </div>
                <div data-aos='fade-up' className={styles.projetosAcademicosContent} ref={carousel}>
                    <div className={styles.projetoItem}>
                        <img src="image/NetflixClone02.gif" alt="responsivo" />
                    </div>
                    <div className={styles.projetoItem}>
                        <img src="image/dtmoney.gif" alt="responsivo" />
                    </div>
                    <div className={styles.projetoItem}>
                        <div className={styles.breve}>
                            <div className={styles.textEB}>
                                <h1>Em Breve</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projetoItem}>
                        <div className={styles.breve}>
                            <div className={styles.textEB}>
                                <h1>Em Breve</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projetoItem}>
                        <div className={styles.breve}>
                            <div className={styles.textEB}>
                                <h1>Em Breve</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projetoItem}>
                        <div className={styles.breve}>
                            <div className={styles.textEB}>
                                <h1>Em Breve</h1>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className={styles.carrosselContainer}>
                    <button onClick={handleLeftClick}><img src="assets/arrow.svg" alt="left" /></button>
                    <button onClick={handleRightClick} className={styles.leftCarrossel}><img src="assets/arrow.svg" alt="right" /></button>
                </div>
                <div className={styles.linkGitHub}>
                    <button className={styles.active}><a href="https://github.com/victorAguiar018?tab=repositories">Projetos Github</a></button>
                </div>
                <div className={styles.divisoria}></div>
            </div>
        </section>
    );
}