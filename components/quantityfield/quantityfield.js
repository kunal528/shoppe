/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './quantityfield.module.css'

const QuantityField = () => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className={styles['quantity-field-container']}>
      <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/minus.svg`}  className={styles['quantity-field-button']} onClick={() => { if (quantity > 1) setQuantity(val => val - 1) }} alt="minus"/>
      <h5 style={{color: 'var(--dark-gray)'}}>{quantity}</h5>
      <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/plus.svg`} className={styles['quantity-field-button']} onClick={() => {setQuantity(val => val + 1)}} alt="plus"/>
    </div>
  )
}

export default QuantityField