import Image from 'next/image'
import React from 'react'
import avatarGenerator from '../../helpes/avatarGenerator'

interface IPostCard {
  body: string
  name: string
  profilePicture?: string
  title: string
  readTime: number
  userId: number
}

const PostCard: React.FC<IPostCard> = ({
  body,
  name,
  profilePicture,
  readTime,
  title,
  userId,
}) => {
  const avatarUrl = avatarGenerator(userId)
  return (
    <div
      data-testid='post-card-test-id'
      className='space-y-4 border-b border-b-black pb-4 max-w-4xl'
    >
      <div className='flex justify-between text-sm text-black space-x-4'>
        <div className='flex items-center space-x-4'>
          <Image src={avatarUrl} alt='avatar' width={24} height={24} />
          <span>{name}</span>
        </div>
        <span>✍🏽 nov 25, 2022</span>
      </div>

      <p className='text-[22px] font-bold text-black'>{title}</p>

      <p className='text-base'>{body}</p>

      <div className='flex justify-between'>
        <div className='space-x-4 text-xs text-gray-500'>
          <span>{readTime} min read</span>
          <span>Based on your reading history</span>
        </div>
        ❤️
      </div>
    </div>
  )
}

export default PostCard
