/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react'
import styles from './navbar.module.css'


const Navbar = () => {
    const [active, setActive] = useState(0);

    const handleClick = (index) => {
        setActive(index);
    }
    return (
        <div className={styles['navbar-container']}>
            <div className={styles.logo}>SHOPPE</div>
            <div className={styles.menubar} >
                <h5 className={active == 0 ? `${styles['menubar-item']} ${styles['clicked']}` : styles['menubar-item']} onClick={(e) => { handleClick(0) }} >Shop</h5>
                <h5 className={active == 1 ? `${styles['menubar-item']} ${styles['clicked']}` : styles['menubar-item']} onClick={(e) => { handleClick(1) }}>Blog</h5>
                <h5 className={active == 2 ? `${styles['menubar-item']} ${styles['clicked']}` : styles['menubar-item']} onClick={(e) => { handleClick(2) }}>Our Story</h5>
            </div>
            <div className={styles.divider} />
            <div className={styles.actionbar}>
                <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/search.svg`} alt={'icons'} className={active == 3 ? `${styles['actionbar-item']} ${styles['clicked']}` : styles['actionbar-item']} onClick={(e) => { handleClick(3) }} />
                <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/cart.svg`} alt={'icons'} className={active == 4 ? `${styles['actionbar-item']} ${styles['clicked']}` : styles['actionbar-item']} onClick={(e) => { handleClick(4) }} />
                <img src={`${process.env.NEXT_PUBLIC_WEB_ORIGIN}icons/profile.svg`} alt={'icons'} className={active == 5 ? `${styles['actionbar-item']} ${styles['clicked']}` : styles['actionbar-item']} onClick={(e) => { handleClick(5) }} />
            </div>
        </div>
    )
}

export default Navbar