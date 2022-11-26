import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PostsCommentsContextProvider } from '../context/postsCommentsReducer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsCommentsContextProvider>
      <Component {...pageProps} />
    </PostsCommentsContextProvider>
  )
}
