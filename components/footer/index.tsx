import React from 'react'

const Footer: React.FC = () => (
  <footer
    data-testid='footer-test-id'
    className='fixed bottom-0 flex justify-center items-center bg-black w-screen h-16'
  >
    <span className='text-white'>
      Made with ❤️ by:{' '}
      <a
        href='https://www.walisontsx.com/'
        target='__blank'
        className='text-red font-semibold'
      >
        Walison
      </a>
    </span>
  </footer>
)

export default Footer
