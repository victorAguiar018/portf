import Image from 'next/image'
import styles from './styles.module.scss'
import  SeoJpg  from '../../../public/image/seo.jpg'
import RespJpg from '../../../public/image/responsivo.jpg'
import CleanCode from '../../../public/image/cleanCode.jpg'

export function Diferencias(){
    return(
        <section className={styles.container}>
                <div data-aos='fade-right' className={styles.diferencias}>
                    <h1>Diferenciais</h1>
                </div>
                <div data-aos='fade-up' className={styles.content}>
                    <div className={styles.contentItem}>
                        <div className={styles.item}>
                            <Image 
                                src={RespJpg}
                                alt="responsivo"
                                width={500}
                                height={300} 
                            />
                            <h4>Design Responsivo</h4>
                            <p>Sites totalmente modernos e responsivos, se adaptando a qualquer dispositivo e tamanho de tela.</p>
                        </div>
                    </div>
                    <div className={styles.contentItem}>
                        <div className={styles.item}>
                            <Image 
                                src={SeoJpg} 
                                alt="seo"
                                width={500}
                                height={300}
                            />
                            <h4>Técnicas SEO</h4>
                            <p>Seu site no topo das pesquisas do Google, técnica essencial para otiminizar o posicionamento nos sites de buscas orgânicas.</p>
                        </div>
                    </div>
                    <div className={styles.contentItem}>
                        <div className={styles.item}>
                            <Image 
                                src={CleanCode}
                                alt="clean code"
                                width={500}
                                height={300}
                            />
                            <h4>Clean Code</h4>
                            <p>Um código limpo de fácil manutenção e de fácil compreensão</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}