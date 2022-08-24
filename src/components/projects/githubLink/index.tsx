import Link from 'next/link'
import styles from './styles.module.scss'


export function GithubLink() {
    return(
        <>
        <div className={styles.linkGitHub}>
            <button className={styles.active}><Link href="https://github.com/victorAguiar018?tab=repositories"><a target="_blank">Projetos Github </a></Link></button>
        </div>
        <div className={styles.divisoria}></div>
        </>
    )
}