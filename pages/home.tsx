import { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Router from 'next/router'
import { DesktopRightSide, Footer, Header } from '../components'
import avatarGenerator from '../helpes/avatarGenerator'
import shuffleArray from '../helpes/shuffleArray'
import postsService from '../services/posts-service'
import usersService from '../services/users-service'
import { IPosts } from '../types/posts'
import { IUsers, IUsersDetails } from '../types/users'

interface IHomePage {
  posts: IPosts[]
  users: IUsers[]
}

const Home: NextPage<IHomePage> = ({ posts, users }) => {
  const pushToDetail = (postTitle: string, postId: number) => {
    const postTitleNormalized = postTitle.replace(/ /g, '-')

    Router.push({
      pathname: `/post/${postTitleNormalized}-id:${postId}`,
    })
  }

  // just to diversify the posts list
  const shuffledPosts = shuffleArray(posts)
  return (
    <div className='mt-16 md:mt-0 md:ml-16'>
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
        {/* <section>
          {users.map(({ id, name }) => (
            <div key={id}>
              <Link href={`user/${id}`}>{name}</Link>
            </div>
          ))}
        </section> */}

        {/* posts */}
        <section className='p-11 space-y-10'>
          {shuffledPosts.map((post) => {
            const postOwner = users.find((user) => user.id === post.userId)
            const randomReadTime = Math.floor(Math.random() * 4) + 1
            const avatarUrl = avatarGenerator(post.userId)

            return (
              <DynamicPost
                key={post.id}
                name={postOwner?.name || 'Anonymous'}
                readTime={randomReadTime}
                onPostClick={pushToDetail}
                profilePicture={avatarUrl}
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
