/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {

    const [email, setEmail] = React.useState('');

    const handleEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        console.log(email);
    }
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-upper-section']}>
                <h5 className={styles['footer-text']}>CONTACT US</h5>
                <h5 className={styles['footer-text']}>TERMS OF SERVICES</h5>
                <h5 className={styles['footer-text']} style={{ flex: 1 }}>SHIPPING RETURNS</h5>
                <form className={styles['footer-input-container']}>
                    <input type='email' className={styles['footer-input']} pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" required onChange={handleEmailChange} placeholder={'Give an email, get the newsletter.'} />
                    <button style={{ border: 'none', background: 'transparent' }}>
                        <Image src='/icons/arrow.svg' height={20} width={20} onClick={handleSubmit} alt="arrow" />
                    </button>
                </form>
            </div>

            <div className={styles['footer-upper-section']}>
                <h5 className={styles.policy}>© 2021 Shelly.<i>Terms of use</i> and <i >privacy policy.</i></h5>
                <Link href={'/'} passHref>
                    <img src="/icons/linkedin.svg" className={styles['footer-icon']} alt="icon" />
                </Link>
                <Link href={'/'} passHref>
                    <img src="/icons/facebook.svg" className={styles['footer-icon']} alt="icon" />
                </Link>
                <Link href={'/'} passHref>
                    <img src="/icons/instagram.svg" className={styles['footer-icon']} alt="icon" />
                </Link>
                <Link href={'/'} passHref>
                    <img src="/icons/twitter.svg" className={styles['footer-icon']} alt="icon" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer