import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UsersDetailsContextProvider } from '../context/usersDetailReducer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UsersDetailsContextProvider>
      <Component {...pageProps} />
    </UsersDetailsContextProvider>
  )
}
