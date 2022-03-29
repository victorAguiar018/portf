import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="assets/next.png" alt="image/png" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </nav>
            </div>
        </header>
    )
}