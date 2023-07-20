import React from 'react'
import styles from './skills.module.css'
import Image from 'next/image'
import ReactLogo from '../../assets/react-js.svg'
import GithubLogo from '../../assets/github.svg'
import MongoLogo from '../../assets/mongodb.svg' 
import MysqlLogo from '../../assets/mysql.svg'
import NextLogo from '../../assets/next-js.svg'
import NodeLogo from '../../assets/node-js.svg'
import TailwindLogo from '../../assets/tailwind-css.svg'


export const Skills = () => {
  return (
    <section className="section" id="skillSection">
        <h2 className="title">
            Professional Skills
        </h2>
        <p className="subTitle">My <span>Strengths</span></p>

        <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={ReactLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=""
                    />
                    <p>React.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={GithubLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=""
                    />
                    <p>Github</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={MongoLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=""
                    />
                    <p>MongoDB</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={TailwindLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=''
                    />
                    <p>TailwindCSS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={NextLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=''
                    />
                    <p>Next.JS</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={MysqlLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=''
                    />
                    <p>MySQL</p>
                </div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.content}>
                    <Image 
                        src={NodeLogo}
                        width={200}
                        height={200}
                        className={styles.image}
                        alt=''
                    />
                    <p>Node.JS</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}
