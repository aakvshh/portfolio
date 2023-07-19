import React from 'react'
import styles from './contact.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

export const Contact = () => {
  return (
    <section className="section">
        <h2 className="title">Contact Me</h2>
        <p className="subTitle">Let's Connect</p><br /><br />

        <div className={styles.container}>
            <p style={{fontSize: '20px', margin: '0 3em'}} className={styles.tp}>The thrill of working on dynamic projects is what pushes me forward. Reach out, and let's bring those ideas to life.</p><br /><br /><br />

            <div className={styles.message}>
                <p style={{fontSize: '18px'}}><b>Connect with me!</b></p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Enter text"
                    
                />
                <button className={styles.inputButton}><AiOutlineArrowRight size={16.65} /></button>
                </div>

            </div>
            <div className={styles.footer}>
                <h2 className="title">Socials</h2><br /><br />
                <div className={styles.socials}>
                    <FaLinkedinIn size={40} />
                    <FaGithub size={40} />
                    <BiLogoGmail size={40} />
                    <FaYoutube size={40} />
                </div>
            </div>
        </div>

    </section>
  )
}
