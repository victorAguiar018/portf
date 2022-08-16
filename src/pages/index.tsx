import Head from 'next/head'
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
