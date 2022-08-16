import styles from './styles.module.scss'

export function WhatsappIcon(){
    return(
        <section className={styles.container}>
            <div className={styles.contentIconWhatsApp}>
                <a target="_blank" href="https://wa.me/5518996301943?text=Solicite%20o%20seu%20orçamento%20gratis">
                    <img src="assets/whatsapp.svg" alt="whatsapp" />
                </a>
            </div>
        </section>
    )
}