'use client'

import React from 'react'
import styles from './hero.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../../assets/arrow.png'

export const Hero = () => {

    const emailAddress = 'aakashkasabekar@gmail.com'

    const handleMailButtonClick = () => {
        const mailtoLink = `mailto:${emailAddress}`
        window.location.href = mailtoLink;
    }

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

            <button className={styles.homeBtn} onClick={handleMailButtonClick}>Let's Connect!</button>
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