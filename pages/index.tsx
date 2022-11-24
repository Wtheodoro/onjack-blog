import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Welcome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>OnJack</title>
        <meta
          name='onjack'
          content='Onjack social media helping you to procrastinate'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <Link href='/home'>Okay !</Link>
      </main>

      <footer></footer>
    </div>
  )
}

export default Welcome
