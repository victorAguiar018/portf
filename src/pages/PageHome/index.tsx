import { ListIcons } from '../../components/ListIcons'
import { HomeDescName } from '../../components/HomeDescName'
import { About } from '../../components/About'
import { Diferencias } from '../../components/diferenciais'
import { Projetos } from '../../components/projects'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Contato } from '../../components/contact'
import { Rodape } from '../../components/footer'
import { WhatsappIcon } from '../../components/whatsappIcon'


function PageHome(){

   useEffect(()=>{
    Aos.init({duration: 1500});
   },[])

    return(
        <main>     
            <HomeDescName/>
            <WhatsappIcon/>
            <About/>
            <ListIcons/>
            <Diferencias/>
            <Projetos/>
            <Contato/>
            <Rodape/>
        </main>
    )
}

export default PageHome;