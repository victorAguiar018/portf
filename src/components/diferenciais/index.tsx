
import styles from './styles.module.scss'

export function Diferencias(){
    return(
        <section className={styles.container}>
            <div className={styles.diferencias}>
                <h1>Diferenciais</h1>
            </div>
            <div className={styles.ContainerBarra}>
                <div className={styles.barra}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentItem}>
                    <div className={styles.item}>
                        <img src="image/responsivo.jpg" alt="responsivo" />
                        <p>sadasd</p>
                    </div>
                </div>
                <div className={styles.contentItem}>
                    <div className={styles.item}>
                        <img src="image/responsivo.jpg" alt="responsivo" />
                        <p>sadasd</p>
                    </div>
                </div>
                <div className={styles.contentItem}>
                    <div className={styles.item}>
                        <img src="image/responsivo.jpg" alt="responsivo" />
                        <p>sadasd</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}