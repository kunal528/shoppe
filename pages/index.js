/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/product/product';
import data from "../public/static_data/product_data.json";

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>

        <Carousel showThumbs={false} autoPlay infiniteLoop stopOnHover={false} showArrows={false} showStatus={false}>
          {Array(5).fill(10).map((e, i) => {
            return <div key={e}>
              <img src="images/Img_01.png" alt="image1" style={{borderRadius: '16px'}}/>
              <div className={styles['slider-column']}>
                <div className='slider-text-column'>
                  <h1>Gold big hoops</h1>
                  <h2>$ 68,00</h2>
                </div>
                <div className='button_01'>View Product</div>
              </div>

            </div>
          })}
        </Carousel>
        <div className='header'>
          <h1 style={{ color: 'black' }}>Shop The Latest</h1>
          <h5 onClick={() => { }} style={{ color: 'var(--accent)', cursor: 'pointer' }}>View All</h5>
        </div>
        <div className={styles.products}>
          {data.map((e, i) => {
            return <Product key={i} data={e}/>
          })}
        </div>
      </main>
    </div>
  )
}
