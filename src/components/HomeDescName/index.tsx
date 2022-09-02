import Image from 'next/image'
import styles from './styles.module.scss'
import FotoPerfil from '../../../public/image/fotoVictor.png'

export function HomeDescName(){
    return(
        <section  className={styles.container}>
            <div className={styles.content}>
                
                <div className={styles.contentInfo} data-aos='fade-left'>
                    <div className={styles.contentInfoName}>
                        <h1>Victor Aguiar</h1>
                    </div>
                    <div  className={styles.contentDesc}>
                        <h3>Desenvolvedor Front-end</h3>
                    </div>  
                </div>
                <div data-aos='fade-right' className={styles.contentFoto}>
                    <img 
                        src='image/fotoVictor.png'
                        className={styles.fotoPerfil}
                    />
                </div>
            </div>
            <div  className={styles.divisoria}></div>
        </section>
    )
}