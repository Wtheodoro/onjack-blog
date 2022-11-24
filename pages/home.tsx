import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import postsService from '../services/posts-service'
import usersService from '../services/users-service'
import { IPosts } from '../types/posts'
import { IUsers, IUsersDetails } from '../types/users'

interface IHomePage {
  posts: IPosts[]
  users: IUsers[]
}

const Home: NextPage<IHomePage> = ({ posts, users }) => {
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
        <section>
          {users.map(({ id, name }) => (
            <div key={id}>
              <Link href={`user/${id}`}>{name}</Link>
            </div>
          ))}
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
