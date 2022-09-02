import Image from 'next/image'
import styles from './styles.module.scss'
import NetflixClone from '../../../../public/image/NetflixClone02.gif'
import DtMoney from '../../../../public/image/dtmoney.gif'


export function ProjetoEstudo({carousel}) {

    return(
        <>
            <div data-aos='fade-up' className={styles.projetosAcademicosContent} ref={carousel}>
                    <div className={styles.projetoItem}>
                        <img 
                            src='image/NetflixClone02.gif'
                            alt="NetflixClone"
                        />
                    </div>
                    <div className={styles.projetoItem}>
                        <img 
                            src='image/dtmoney.gif'
                            alt="Projeto dtmoney"
                        />
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