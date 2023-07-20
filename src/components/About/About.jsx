import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Profile from '../../assets/ak.jpg'
import GuitarImage from '../../assets/guitar-sunset.svg'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export const About = () => {
  return (
    <section className="section" id={styles.aboutSection}>
        <h2 className="title">About Me</h2>
        <p className="subTitle">A short <span>Summary</span></p>

        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={Profile}
                    width={300}
                    height={300}
                    className={styles.profileImage} 
                />
                
                <div className={styles.socialLinks}>
                    <Link style={{textDecoration: 'none', color: 'aliceblue'}} href="https://www.linkedin.com/in/aakash-kasabekar-b36133202/"><FaLinkedinIn size={40} /></Link>
                    <Link style={{textDecoration: 'none', color: 'aliceblue'}} href="https://github.com/aakvshh"><FaGithub size={40} /></Link>
                </div>
            </div>
            <div className={styles.aboutInfo}>
                <p className={styles.info}>
                    Hi, I am Aakash Kasabekar, a CS student with a passion for Front-End development, actively seeking opportunities to make meaningful contributions.  
                    <br />
                    I'm eager to craft captivating and user-friendly experiences that leave a positive impact.
                    In my free time, I play guitar.
                    
                </p>
                <Image
                    src={GuitarImage}
                    width={500}
                    height={250}
                    className={styles.guitarImage} 
                />
            </div>

        </div>

    </section>
  )
}
