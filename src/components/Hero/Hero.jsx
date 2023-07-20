import React from 'react'
import styles from './hero.module.css'
import {FaTwitter} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../../assets/arrow.png'

export const Hero = () => {
  return (
    <section className={styles.hero} id="#hero">
        <div className={styles.wrapper}>
        <div className="container" id={styles.heroContainer}>
            <p className="subTitle">
                Hello, <span>I am</span>
            </p>
            <h1 className={styles.title}>
                <span>AAKASH</span> KASABEKAR
            </h1>
            <p className={styles.profile}>
                REACT.JS | NEXT.JS
            </p>

            <p className={styles.description}>
                Creating impactful experiences by transforming ideas into sleek web realities.
            </p>

            {/* <div className={styles.socials}>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
            </div> */}

            <Link href="mailto:aakashkasabekar@gmail.com"><button className={styles.homeBtn}>Let's Connect!</button></Link>
        </div>
        </div>
        <Image
            src={Arrow}
            width={150}
            height={150}
            alt='' 
            className={styles.arrow}
        />
    </section>
  )
}