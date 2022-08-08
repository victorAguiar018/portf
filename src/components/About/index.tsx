import { ListIcons } from '../ListIcons'
import  styles  from './styles.module.scss'

export function About(){


    return(
        <section className={styles.container}>
            <div data-aos='fade-right' className={styles.about}>
                <h1>Sobre</h1>
            </div>
            <div data-aos='fade-down' className={styles.content}>  
                <p> Me chamo Victor de Oliveira Aguiar, sou desenvolvedor front-end, 
                    estudo programação desde 2019, quando iniciei minha faculdade de Analise e desenvolvimento de sistemas, 
                    mas a paixão pela programação vem muito antes disso, desde criança já sonhava em ser um desenvolvedor. <br/>
                    Hoje sou formado em  Analise e desenvolvimento de sistemas pela UNIFRAN - Universidade de Franca - Cruzeiro do sul
                    e mesmo apos formado sigo estudando e aprimorando meu conhecimento.
                </p>
            </div>
        </section>
    )
}