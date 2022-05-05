import Head from 'next/head'
import { Header } from '../components/Header'
import  PageHome  from './PageHome'


export default function Home() {
  return (
    <div>
        <>
          <Head>
            <title>Portfólios | Victor Aguiar</title>
          </Head>
          <PageHome/>
        </>
    </div>
  )
}
