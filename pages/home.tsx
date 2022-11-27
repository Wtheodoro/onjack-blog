import { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import {
  usePostsCommentsStateContext,
  usePostsCommentsDispatchContext,
} from '../context/postsCommentsReducer'
import { DesktopRightSide, Footer, Header } from '../components'
import avatarGenerator from '../helpers/avatarGenerator'
import shuffleArray from '../helpers/shuffleArray'
import postsService from '../services/posts-service'
import usersService from '../services/users-service'
import { IComments, IPosts } from '../types/posts'
import { IUsers } from '../types/users'

interface IHomePage {
  posts: IPosts[]
  users: IUsers[]
}

const Home: NextPage<IHomePage> = ({ posts, users }) => {
  const [selectedPostId, setSelectedPostId] = useState<number | undefined>(0)
  const [shuffledPosts, setShuffledPosts] = useState<IPosts[]>()

  const postCommentsDispatch = usePostsCommentsDispatchContext()
  const { postsComments } = usePostsCommentsStateContext()

  const handlePostClick = (postId: number) => {
    if (postId === selectedPostId) return setSelectedPostId(undefined)

    const fetchAndStoreComments = async (postId: number) => {
      const postCommentsData = await postsService.getPostComments(postId)

      postCommentsDispatch({
        type: 'ADD_POST_COMMENTS',
        payload: postCommentsData,
      })
    }

    // Verify if the current post comments was already fetched
    const isCurrentPostCommentsStoraged = Boolean(
      postsComments.find((el: IComments) => el.postId === postId)
    )

    if (!isCurrentPostCommentsStoraged) fetchAndStoreComments(postId)

    setSelectedPostId(postId)
  }

  // just to diversify the posts list
  useEffect(() => {
    const shuffledPosts = shuffleArray(posts)
    setShuffledPosts(shuffledPosts)
  }, [posts])

  return (
    <div className='mt-16 md:mt-0 md:ml-16 md:mr-96 flex justify-center'>
      <Head>
        <title>OnJack</title>
        <meta
          name='onjack'
          content='Onjack social media helping you to procrastinate'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        {/* posts */}
        <section className='p-11 space-y-10'>
          {shuffledPosts?.map((post: IPosts) => {
            const postOwner = users.find((user) => user.id === post.userId)
            const avatarUrl = avatarGenerator(post.userId)
            const showComments = selectedPostId === post.id
            const currentPostComments = postsComments.filter(
              (comment) => comment.postId === post.id
            )

            return (
              <DynamicPost
                key={post.id}
                name={postOwner?.name || 'Anonymous'}
                onPostClick={handlePostClick}
                profilePicture={avatarUrl}
                showComments={showComments}
                comments={currentPostComments}
                {...post}
              />
            )
          })}
        </section>

        <DesktopRightSide />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await usersService.getAllUsers()

  const posts = await postsService.getAllPosts()

  return {
    props: {
      users,
      posts,
    },
  }
}

const DynamicPost = dynamic(() => import('../components/postCard'), {
  ssr: false,
})

export default Home
