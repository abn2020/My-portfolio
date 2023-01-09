import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import GlobalStyles from '../src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortchut icon" href="/img/icon-512.png" />
        <link rel="shortchut icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin=""
        />
        <meta name="theme-color" content="#060715" />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}
