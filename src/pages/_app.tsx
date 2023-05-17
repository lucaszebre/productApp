import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store   from '@/store/store' // replace this with the path to your store

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
