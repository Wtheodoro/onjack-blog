import React, { ReactElement } from 'react'

interface IButton {
  children: string
  onClick?: () => void
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button
      data-testid='button-test-id'
      className='bg-red py-4 px-8 text-white rounded-lg'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
