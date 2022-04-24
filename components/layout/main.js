
import Navbar from '../navbar/navbar';
import Head from 'next/head';
import Footer from '../footer/footer';

const Main = ({ children }) => {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SHOPPE</title>
      </Head>
      <div>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Main;

