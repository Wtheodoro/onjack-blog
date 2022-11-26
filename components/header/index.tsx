import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../logo'

const Header = () => {
  return (
    <header
      data-testid='header-test-id'
      className='fixed top-0 w-screen h-14
        md:left-0 md:w-14 md:h-screen
        bg-white px-6 md:px-0 md:py-10
        flex md:flex-col justify-between items-center
        shadow-lg md:border-r-[1px] md:border-black/30'
    >
      <Link href='/' className='md:-rotate-90 md:transform md:translate-y-10'>
        <Logo size='small' />
      </Link>

      <a href='https://www.walisontsx.com/'>
        <Image
          src='/samurai-mask.jpeg'
          width={52}
          height={52}
          alt='link to creator website'
          className='rounded-full animate-pulse md:animate-bounce'
        />
      </a>
    </header>
  )
}

export default Header
