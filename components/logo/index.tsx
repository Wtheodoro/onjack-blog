import React from 'react'

interface ILogo {
  size?: 'big' | 'small'
}

const Logo: React.FC<ILogo> = ({ size = 'big' }) => {
  return (
    <h1
      data-testid='logo-test-id'
      className={`text-darkBlue ${size === 'big' ? 'text-7xl' : 'text-4xl'}`}
    >
      OnJack
    </h1>
  )
}

export default Logo
