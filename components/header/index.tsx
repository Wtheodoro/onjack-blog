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
        shadow-lg md:shadow-2xl'
    >
      <Link href='/' className='md:-rotate-90 transform translate-y-10'>
        <Logo size='small' />
      </Link>
    </header>
  )
}

export default Header
