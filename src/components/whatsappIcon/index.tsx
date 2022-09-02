import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import Whatsapp from '../../../public/assets/whatsapp.svg'

export function WhatsappIcon(){
    return(
        <section className={styles.container}>
            <div className={styles.contentIconWhatsApp}>
                
                <Link href="https://wa.me/5518996301943?text=Solicite%20o%20seu%20orçamento%20gratis">
                    <a target="_blank">
                        <Image 
                            src={Whatsapp} 
                            alt="whatsapp" 
                            width={48}
                            height={48}
                            className={styles.wpIcon}
                        />
                    </a>
                </Link>
            </div>
        </section>
    )
}