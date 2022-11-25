import React from 'react'
import Image from 'next/image'

const orbitalImages = [
  {
    src: 'https://api.multiavatar.com/2613641.png',
    alt: 'avata',
    width: 52,
    height: 52,
    className: 'absolute top-0 left-4',
  },
  {
    src: 'https://api.multiavatar.com/4623641.png',
    alt: 'avatar',
    width: 36,
    height: 36,
    className: 'absolute top-8 right-0',
  },
  {
    src: 'https://api.multiavatar.com/4613241.png',
    alt: 'avatar',
    width: 32,
    height: 32,
    className: 'absolute bottom-10 right-4',
  },
  {
    src: 'https://api.multiavatar.com/1613641.png',
    width: 48,
    height: 48,
    className: 'absolute bottom-4 left-2',
  },
]

const orbitalDots = [
  {
    className: 'absolute top-4 left-24',
  },
  {
    className: 'absolute bottom-24 left-10',
  },
  {
    className: 'absolute top-16 right-16',
  },
  {
    className: 'absolute bottom-8 right-20',
  },
  {
    className: 'absolute top-12 left-6',
  },
]

const WelcomeHero = () => {
  return (
    <div className='relative'>
      {/* center */}
      <Image
        src='https://api.multiavatar.com/4612441.png'
        alt='avatar'
        width={112}
        height={112}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      />
      <div className='relative p-32 border-dotted border-2 border-sky-500 rounded-full animate-spin-slow'>
        {/* orbitals avatars */}
        {orbitalImages.map((orbitalImage) => (
          <Image key={orbitalImage.className} {...orbitalImage} alt='Avatar' />
        ))}

        {/* orbitals dots */}
        {orbitalDots.map((orbitalDot) => (
          <div
            key={orbitalDot.className}
            className={`bg-black w-4 h-4 rounded-full ${orbitalDot.className}`}
          />
        ))}
      </div>
    </div>
  )
}

export default WelcomeHero
