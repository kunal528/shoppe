import Main from '../components/layout/main'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout
  return (getLayout ? getLayout(

    <Component {...pageProps} />) :
    <Main >
      <Component {...pageProps} />
    </Main >)
}

export default MyApp
