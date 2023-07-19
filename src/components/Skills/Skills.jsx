import React from 'react'
import styles from './skills.module.css'
import Image from 'next/image'
import ReactImage from '../../assets/react-js.svg'


export const Skills = () => {
  return (
    <section className="section">
        <h2 className="title">
            Professional Skills
        </h2>
        <p className="subTitle">My <span>Strengths</span></p>

        <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactImage}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>React.JS</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}
