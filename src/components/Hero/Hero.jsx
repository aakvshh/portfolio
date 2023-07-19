import React from 'react'
import styles from './hero.module.css'
import {FaTwitter} from 'react-icons/fa'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.wrapper}>
        <div className="container" id={styles.heroContainer}>
            <p className={styles.subTitle}>
                Hello, <span>I am</span>
            </p><br />
            <h1 className={styles.title}>
                <span>AAKASH</span> KASABEKAR
            </h1>
            <p className={styles.profile}>
                REACT.JS | NEXT.JS
            </p>

            <p className={styles.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequatur cum, enim consectetur animi, sequi ducimus quasi earum iusto nihil nulla inventore debitis. Reprehenderit, hic!
            </p>

            <div className={styles.socials}>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
                <Link href="#" className={styles.socialLink}>
                    <FaTwitter />
                </Link>
            </div>

            <button className={styles.homeBtn}>Download RESUME</button>
        </div>
        </div>
    </section>
  )
}