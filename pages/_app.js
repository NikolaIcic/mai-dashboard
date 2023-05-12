import Layout from '../components/PagesLayout/layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loader from '../components/Global/Loader/Loader'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Loading />
      <Component {...pageProps} />
    </Layout>
  )
}

const excludedRoutesForLoader = ['/login']

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (!excludedRoutesForLoader.includes(url)) && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  })

  return loading && (
    <Loader visible={true} />
  )
}

export default MyApp
