import styles from './styles.module.scss'

export function ListIcons(){
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.contentIcons}>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/html-5.svg" alt="html5" className={styles.animate}/>
                        <p>HTML5</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/css-3.svg" alt="html5" className={styles.animate}/>
                        <p>CSS3</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/git.svg" alt="git" className={styles.animate}/>
                        <p>Git</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/react.svg" alt="react" className={styles.animate}/>
                        <p>React</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/sass.svg" alt="Sass/scss" className={styles.animate}/>
                        <p>Sass/Scss</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/js.svg" alt="javascript" className={styles.animate}/>
                        <p>Javascript</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/next.png" alt="next" className={styles.animate}/>
                        <p>Next</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <img src="assets/ts.svg" alt="typescript" className={styles.animate}/>
                        <p>Typescript</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}