import Image from 'next/image'
import styles from './styles.module.scss'
import html5 from '../../../public/assets/html-5.svg'
import css3 from '../../../public/assets/css-3.svg'
import git from '../../../public/assets/git.svg'
import react from '../../../public/assets/react.svg'
import sass from '../../../public/assets/sass.svg'
import js from '../../../public/assets/js.svg'
import next from '../../../public/assets/next.png'
import ts from '../../../public/assets/ts.svg'

export function ListIcons(){
    return(
        <section data-aos='fade-up' className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.contentIcons}>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={html5}
                            alt="html5" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>HTML5</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={css3}
                            alt="css3" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>CSS3</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={git}
                            alt="git" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>Git</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={react}
                            alt="react" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>React</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={sass}
                            alt="sass/scss" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>Sass/Scss</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={js}
                            alt="javascript" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>Javascript</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={next}
                            alt="next" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>Next</p>
                    </li>
                    <li className={styles.contentDescIcons}>
                        <Image 
                            src={ts}
                            alt="typescript" 
                            width={55}
                            height={55}
                            className={styles.animate}
                        />
                        <p>Typescript</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}