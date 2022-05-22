/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/Item.module.css';
import data from '../../public/static_data/product_data.json'
import QuantityField from '../../components/quantityfield/quantityfield';
import Like from '../../public/icons/like.svg'

const Product = () => {
  var router = useRouter()
  var id = router.query.item
  const [product, setProduct] = React.useState()

  React.useEffect(() => {
    setProduct(data.find(item => item.id == id))
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className={styles['upper-section']}>

        <div className={styles['alt-images-section']}>
          <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['alt-item-image']} />
          <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['alt-item-image']} />
          <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['alt-item-image']} />
          <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['alt-item-image']} />
          <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['alt-item-image']} />
        </div>
        <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}${product.image}`} alt={'alt'} className={styles['item-image']} />
        <div style={{}}>
          <h2 style={{ color: 'black', marginBottom: "23px" }}>{product.name}</h2>
          <h4 style={{ color: 'var(--accent)', marginBottom: "64px" }}>{`$ ${product.price},00`}</h4>
          <div style={{ display: "flex", gap: "0 10px", marginBottom: "20px" }}>
            <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/star.svg`} alt={'star'} />
            <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/star.svg`} alt={'star'} />
            <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/star.svg`} alt={'star'} />
            <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/star.svg`} alt={'star'} />
            <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/star.svg`} alt={'star'} />
            <h5 style={{ color: "var(--dark-gray)" }}>1 customer review</h5>
          </div>
          <h5 style={{ color: "var(--dark-gray)", maxWidth: "500px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
          </h5>
          <div className={styles['action-section']}>
            <QuantityField />
            <button className={styles['add-to-cart-button'] + " " + 'large-body'}>Add to cart</button>
          </div>
          <div className={styles['share-section']}>
            <Like width="10" height="10" viewBox="0 0 10 10"/>
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product