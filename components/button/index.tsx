import React, { ReactElement } from 'react'

interface IButton {
  children: string
}

const Button: React.FC<IButton> = ({ children }) => {
  return (
    <button
      data-testid='button-test-id'
      className='bg-red py-4 px-8 text-white rounded-lg'
    >
      {children}
    </button>
  )
}

export default Button
