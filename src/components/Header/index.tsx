import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="assets/next.png" alt="image/png" />
                <nav>
                    <button className={styles.active}>Home</button>
                    <button >Projetos</button>
                    <button >Contato</button>         
                </nav>
            </div>
        </header>
    )
}