import React from 'react'
import Image from 'next/image'
import { IComments } from '../../types/posts'

interface IPostCard {
  body: string
  name: string
  profilePicture: string
  title: string
  id: number
  onPostClick: (postId: number) => void
  showComments: boolean
  comments: IComments[]
}

const PostCard: React.FC<IPostCard> = ({
  body,
  name,
  onPostClick,
  profilePicture,
  title,
  id,
  showComments,
  comments,
}) => {
  const formatNickName = (email: string) => email.split('@').at(0)
  return (
    <div
      data-testid='post-card-test-id'
      className='space-y-4 border-b border-b-black/30 pb-4 max-w-4xl cursor-pointer'
      onClick={() => onPostClick(id)}
    >
      <div className='flex justify-between text-sm text-black space-x-4'>
        <div className='flex items-center space-x-4'>
          <Image src={profilePicture} alt='avatar' width={24} height={24} />
          <span>{name}</span>
        </div>
        <span>✍🏽 nov 25, 2022</span>
      </div>

      <p className='text-[22px] font-bold text-black'>{title}</p>

      <p className='text-base'>{body}</p>

      <div className='flex justify-between'>
        <div className='space-x-4 text-xs text-gray-500'>
          <span>2 min read</span>
          <span>Based on your reading history</span>
        </div>
        ❤️
      </div>

      {/* comments */}
      {showComments && !!comments.length && (
        <div className='w-full p-8 space-y-5 border border-b-black/30'>
          <span>Comments 💬</span>
          {comments.map(({ body, email, id }) => (
            <div key={email}>
              <p className='font-bold'>
                {formatNickName(email)}{' '}
                <span className='font-normal'>said:</span>
              </p>
              <p>&#34;{body}&#34;</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostCard
