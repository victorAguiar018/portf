import styles from './styles.module.scss'


export function ProjetoTrabalho({carousel}) {

    return(
        <>
            <div data-aos='fade-up' className={styles.projetosAcademicosContent} ref={carousel}>
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
        </>
    )
}