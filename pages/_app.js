import Layout from '../components/PagesLayout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
