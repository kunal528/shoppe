/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react'
import styles from './product.module.css'

const Product = ({ data }) => {

    const [hover, setHover] = useState(false);

    return (
        <div className={styles['product-container']} onMouseOver={() => { setHover(true) }} onMouseOut={() => { setHover(false) }}>
            <div style={{ position: 'relative' }}>
                <img src={data.image} alt={data.image} className={styles['product-image']} />
                <div className={`${styles.overlay} ${hover && styles.actived}`}>
                <Image src="/icons/cart.svg" height={30} width={30} className={styles['overlay-icon']} alt="icon" />
                <Image src="/icons/view.svg" height={30} width={30} className={styles['overlay-icon']} alt="icon" />
                <Image src="/icons/like.svg" height={30} width={30} className={styles['overlay-icon']} alt="icon" />
                </div>
            </div>
            <h3 style={{ color: 'black' }}>{data.name}</h3>
            <h4 style={{ color: 'var(--accent)' }}>{"$ " + data.price + ",00"}</h4>
        </div>
    )
}

export default Product