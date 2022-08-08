import styles from './styles.module.scss'

export function HomeDescName(){
    return(
        <section  className={styles.container}>
            <div className={styles.content}>
                <div data-aos='fade-right' className={styles.contentFoto}>
                    <img src="image/fotoVictor.png" alt="foto-perfil" />
                </div>
                <div className={styles.contentInfo} data-aos='fade-left'>
                    <div className={styles.contentInfoName}>
                        <h1>Victor Aguiar</h1>
                    </div>
                    <div  className={styles.contentDesc}>
                        <span>Desenvolvedor Front-end</span>
                    </div>  
                </div>
            </div>
            <div data-aos='fade-up' className={styles.divisoria}></div>
        </section>
    )
}