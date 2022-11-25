import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../components'

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

      {/* <main>
        <Link href='/home'>Okay !</Link>

      </main> */}

      <main className='relative flex items-center justify-center h-screen mb-12 overflow-hidden p-4'>
        <div className='relative flex flex-col justify-center items-center z-30 p-5 text-2xl text-white bg-black bg-opacity-70 rounded-xl space-y-5'>
          <h1 className='text-red text-4xl'>OnJack</h1>
          <p>Welcome to our blog</p>
          <p className='text-center'>
            Whey lost time reading a book when you can read tons of Lorem Ipsum?
          </p>
          <Link href='/home'>
            <Button>Go To Blog!</Button>
          </Link>
        </div>

        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          <source src='dark-bg-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </main>

      <footer></footer>
    </div>
  )
}

export default Welcome
