import Image from 'next/image'
import styles from './styles.module.scss'
import NetflixClone from '../../../../public/image/NetflixClone02.gif'
import DtMoney from '../../../../public/image/dtmoney.gif'


export function ProjetoEstudo({carousel}) {

    return(
        <>
            <div data-aos='fade-up' className={styles.projetosAcademicosContent} ref={carousel}>
                    <div className={styles.projetoItem}>
                        <Image 
                            src={NetflixClone}
                            alt="NetflixClone"
                            width={515}
                            height={288}
                        />
                    </div>
                    <div className={styles.projetoItem}>
                        <Image 
                            src={DtMoney}
                            alt="Projeto dtmoney"
                            width={515}
                            height={288} 
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