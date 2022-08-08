import styles from './styles.module.scss'

export function Rodape(){
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <p>Copyright © 2022 | Desenvolvido por <a href="https://www.linkedin.com/in/victoraguiar018/">Victor Aguiar.</a></p>
                <ul className={styles.contentIcons}>
                    <li className={styles.iconIten}>
                         <a href="https://www.linkedin.com/in/victoraguiar018/"><img src='assets/linkedin.svg' /></a>
                    </li>
                    <li className={styles.iconIten}>
                        <a href="https://github.com/victorAguiar018?tab=repositories"><img src="assets/github.svg" alt="github"/></a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}