import React, { ReactElement } from 'react'

interface IButton {
  children: string
  onClick?: () => void
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button
      data-testid='button-test-id'
      className='bg-gradient-to-r from-cyan-300 to-[#6752FD] py-4 px-20 text-white rounded-full'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
