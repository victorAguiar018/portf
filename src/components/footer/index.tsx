import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import Linkedin from '../../../public/assets/linkedin.svg'
import Github from '../../../public/assets/github.svg'

export function Rodape(){
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <p>Copyright © 2022 | Desenvolvido por <Link href="https://www.linkedin.com/in/victoraguiar018/"><a target="_blank">Victor Aguiar.</a></Link></p>
                <ul className={styles.contentIcons}>
                    <li className={styles.iconIten}>
                         <Link href="https://www.linkedin.com/in/victoraguiar018/">
                            <a target="_blank">
                                <Image 
                                    src={Linkedin}
                                    alt="Linkedin"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.iconIten}>
                        <Link href='https://github.com/victorAguiar018?tab=repositories'>
                            <a target="_blank">
                                <Image 
                                    src={Github} 
                                    alt="github"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>

            </div>
        </footer>
    )
}