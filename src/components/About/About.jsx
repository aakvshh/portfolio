import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Profile from '../../assets/ak.jpg'
import GuitarImage from '../../assets/guitar-sunset.svg'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

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
                    <FaLinkedinIn size={40} />
                    <FaGithub size={40} />
                </div>
            </div>
            <div className={styles.aboutInfo}>
                <p className={styles.info}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id est eaque quis culpa natus aliquid nostrum, quam tempore tempora doloribus at atque beatae deserunt velit maxime, in, dolore animi?<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate illo eveniet ducimus veritatis sit corporis voluptates nemo odio doloribus!
                </p>
                <Image
                    src={GuitarImage}
                    width={500}
                    height={150}
                    className={styles.guitarImage} 
                />
            </div>

        </div>

    </section>
  )
}
