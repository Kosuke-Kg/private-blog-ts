import type { AppProps } from 'next/app'
import React from 'react'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
