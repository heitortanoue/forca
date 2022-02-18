import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
          <title>Jogo da Forca 🪢</title>
      </Head>
      <Component {...pageProps} />
      </> 
    )
}

export default MyApp
