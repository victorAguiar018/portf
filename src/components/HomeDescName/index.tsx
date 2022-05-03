import styles from './styles.module.scss'

export function HomeDescName(){
    return(
        <section>
            <div className={styles.contentInfo}>
                <div className={styles.contentInfoName}>
                    <h1>Victor Aguiar</h1>
                </div>
                <div className={styles.contentDesc}>
                    <span>Desenvolvedor Front-end</span>
                </div>  
            </div>
        </section>
    )
}