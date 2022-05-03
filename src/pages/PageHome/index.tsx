import styles from '../../styles/Home.module.scss'

import { ListIcons } from '../../components/ListIcons'
import { HomeDescName } from '../../components/HomeDescName'
import { About } from '../../components/About'
import { Diferencias } from '../../components/diferenciais'

export function PageHome(){
    return(
        <main className={styles.container}>
            <section className={styles.content}>
                <HomeDescName/>
                <div className={styles.contentFoto}>
                    <img src="image/fotoVictor.png" alt="foto-perfil" />
                </div>
            </section>
            <About/>
            <ListIcons/>
            <Diferencias/>
        </main>
    )
}