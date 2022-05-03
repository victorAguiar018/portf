import { ListIcons } from '../ListIcons'
import  styles  from './styles.module.scss'

export function About(){


    return(
        <section className={styles.container}>
            <div className={styles.about}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.content}>  
                <p> Me chamo Victor de Oliveira Aguiar, sou desenvolvedor front-end, 
                    estudo programação desde 2019, quando iniciei minha faculdade de Analise e desenvolvimento de sistemas, 
                    mas a paixão pela programação vem muito antes disso, desde criança já sonhava em ser um desenvolvedor. <br/>
                </p>
            </div>
        </section>
    )
}