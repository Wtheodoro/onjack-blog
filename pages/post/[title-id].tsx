import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import { DesktopRightSide, Header } from '../../components'

const FullPost = () => {
  const router = useRouter()

  const {
    query: { postTitle, postId },
  }: NextRouter = router
  return (
    <div>
      <Header />

      <main>XXXXXXX</main>

      <DesktopRightSide />
    </div>
  )
}

export default FullPost
