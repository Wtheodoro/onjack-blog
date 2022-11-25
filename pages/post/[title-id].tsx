import { NextRouter, useRouter } from 'next/router'
import React from 'react'

const FullPost = () => {
  const router = useRouter()

  const {
    query: { postTitle, postId },
  }: NextRouter = router
  return (
    <div>
      <p>{postTitle}</p>
      <p>{postId}</p>
    </div>
  )
}

export default FullPost
