import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PostCard } from '../components'
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
  // just to diversify the posts list
  const shuffledPosts = shuffleArray(posts)
  return (
    <div>
      <Head>
        <title>OnJack</title>
        <meta
          name='onjack'
          content='Onjack social media helping you to procrastinate'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
            return (
              <PostCard
                key={post.id}
                {...post}
                name={postOwner?.name || 'Anonymous'}
                readTime={randomReadTime}
              />
            )
          })}
        </section>
      </main>

      <footer></footer>
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

export default Home
