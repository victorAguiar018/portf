import Image from 'next/image'
import styles from './styles.module.scss'
import FotoPerfil from '../../../public/image/fotoVictor.png'

export function HomeDescName(){
    return(
        <section  className={styles.container}>
            <div className={styles.content}>
                <div data-aos='fade-right' className={styles.contentFoto}>
                    <Image 
                        src={FotoPerfil}
                        alt="foto-perfil"
                        width={302}
                        height={379}
                        className={styles.fotoPerfil}
                    />
                </div>
                <div className={styles.contentInfo} data-aos='fade-left'>
                    <div className={styles.contentInfoName}>
                        <h1>Victor Aguiar</h1>
                    </div>
                    <div  className={styles.contentDesc}>
                        <h3>Desenvolvedor Front-end</h3>
                    </div>  
                </div>
            </div>
            <div data-aos='fade-up' className={styles.divisoria}></div>
        </section>
    )
}