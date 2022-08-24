import styles from './styles.module.scss';
import { useRef, useState } from 'react';
import { ProjetoEstudo } from './projetoEstudo/index'
import { ProjetoTrabalho } from './projetoTrabalho/index';
import { GithubLink } from './githubLink';
import Arrow from '../../../public/assets/arrow.svg'
import Image from 'next/image';

export function Projetos () {

    const [handleClickButton, sethandleClickButton ] = useState(false);
    const [activeButton, setActiveButton] = useState(true)

    const carousel = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    const handleClickButtonEstudo = (e) => {
        e.preventDefault();
        if(handleClickButton === true ){
            sethandleClickButton(false);
            setActiveButton(true);
        }
    }
    const handleClickButtonTrabalho = (e) => {
        e.preventDefault();
        if(handleClickButton === false){
             sethandleClickButton(true);
             setActiveButton(false);
        }
    }

    
    return(
        <section className={styles.container}>
            <div className={styles.content} >
                <div data-aos='fade-right' className={styles.projetos}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles.contentButtonProjetos}>
                    <div data-aos="fade-right" className={styles.contentButtonArea1}>
                        <button onClick={handleClickButtonEstudo} className={(activeButton ? `${styles.active}` : ``)}>Projetos de Estudos</button>    
                    </div>
                    <div data-aos="fade-left" className={styles.contentButtonArea2}>
                        <button onClick={handleClickButtonTrabalho} className={(activeButton ? `` : `${styles.active}`)}>Projetos de Trabalho</button>
                    </div>
                </div>

                {handleClickButton ? (
                    <ProjetoTrabalho carousel={carousel}/>
                ) : (
                    
                    <ProjetoEstudo carousel={carousel}/>
                ) }
                
                <div className={styles.carrosselContainer}>
                    <button onClick={handleLeftClick}>
                        <Image 
                            src={Arrow} 
                            alt="arrow left"
                            width={50}
                            height={50} 
                        />
                    </button>
                    <button onClick={handleRightClick} className={styles.leftCarrossel}>
                        <Image 
                            src={Arrow} 
                            alt="arrow Right"
                            width={50}
                            height={50} 
                        />
                    </button>
                </div>

                <GithubLink/>
            </div>
        </section>
    );
}