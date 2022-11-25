import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { Button, Footer, WelcomeHero } from '../components'

const Welcome: NextPage = () => {
  const handleGoToBlogClick = () => Router.push('/home')
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

      <main className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
        <div className='relative flex flex-col justify-center items-center w-screen h-screen z-30 p-5 text-2xl text-black bg-white bg-opacity-70 space-y-5'>
          <h1 className='text-darkBlue text-7xl mb-10'>OnJack</h1>

          <WelcomeHero />

          <p className='text-3xl font-bold text-center mt-4'>
            Best Blog app to spend time !
          </p>
          <p className='text-center opacity-60 max-w-2xl'>
            Why spend time reading a book when you can read tons of Lorem Ipsum?
          </p>
          <Button onClick={handleGoToBlogClick}>Go To Blog!</Button>
        </div>

        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          <source src='dark-bg-video-verse-reverse.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </main>

      <Footer />
    </div>
  )
}

export default Welcome
