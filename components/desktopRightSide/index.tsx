import React from 'react'
import Image from 'next/image'

const usefulLinks = [
  {
    text: 'Github repository link to clone if you really want to.',
    link: 'https://github.com/Wtheodoro/onjack-social-media/',
  },
  {
    text: 'My personal portifolio made with L0v3.',
    link: 'https://www.walisontsx.com/',
  },
  {
    text: 'My linkedin profile, so you can send me a DM if you want to.',
    link: 'https://www.linkedin.com/in/walisonteodoro/',
  },
  {
    text: "This is the best song with the best video clip and you can't prove otherwise. 🔈",
    link: 'https://www.youtube.com/watch?v=h_D3VFfhvs4',
  },
  {
    text: 'And this is the second best. 🔈',
    link: 'https://www.youtube.com/watch?v=cFkZDhwqoHg',
  },
]

const DesktopRightSide = () => {
  return (
    <div
      data-testid='desktopRightSide-test-id'
      className='fixed right-0 top-0 bottom-0 hidden md:flex md:flex-col md:justify-between w-96 h-screen border-l-[1px] border-black/30'
    >
      <div className='bg-black py-2 px-10 rounded-full text-white flex justify-center items-center mt-8 mx-8'>
        some interesting information
      </div>

      <div className='mx-8'>
        <div className='flex items-center space-x-2'>
          <div className='w-2 h-2 bg-green-500 rounded-full' />
          <span>Useful Links</span>
        </div>

        {usefulLinks.map(({ text, link }) => (
          <div key={link} className='mt-10'>
            <a href={link} target='__blank'>
              <div className='flex items-center space-x-2 mb-2'>
                <Image
                  src='/samurai-mask.jpeg'
                  alt='avatar'
                  width={24}
                  height={24}
                />
                <span>Walison Theodoro</span>
              </div>
              <p className='font-bold'>{text}</p>
            </a>
          </div>
        ))}
      </div>

      <div className='h-10 w-full bg-black flex justify-center items-center'>
        <span className='text-white'>Made with ❤️ by: Walison</span>
      </div>
    </div>
  )
}

export default DesktopRightSide
