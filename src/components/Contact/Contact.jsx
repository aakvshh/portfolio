'use client'

import React, { useState } from 'react'
import styles from './contact.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'

export const Contact = () => {

    const [input, setInput] = useState({ message: '', email: '' });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://sheet.best/api/sheets/455e0d3b-084c-437e-bcb3-36e7024edd4c', input)
            .then((res) => {
                console.log(res);
                setInput({ message: '' });
            })
            .catch((error) => {
                console.error('Error storing data:', error);
            });
    };

    const emailAddress = 'aakashkasabekar@gmail.com';

    const handleMailButtonClick = () => {
        const mailtoLink = `mailto:${emailAddress}`
        window.location.href = mailtoLink;
    }

  return (
    <section className="section" id="contactSection">
        <h2 className="title">Contact Me</h2>
        <p className="subTitle">Let's <span>Connect</span></p><br /><br />

        <div className={styles.container}>
            <p style={{fontSize: '20px', margin: '0 2em'}} className={styles.tp}>The thrill of working on dynamic projects is what pushes me forward. Reach out, and let's bring those ideas to life.</p><br /><br /><br />

            <div className={styles.message}>
                <p style={{ fontSize: '18px' }}>
                    <b style={{fontSize: '22px'}}>Connect with me!</b>
                </p><br />
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <input
                            className={styles.inputField}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={input.email}
                            onChange={handleChange}
                        />
                        <button type='submit' className={styles.inputButton}>
                            <AiOutlineArrowRight size={16.65} />
                        </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <input
                            className={styles.inputField}
                            type="text"
                            name="message"
                            placeholder="Enter message"
                            value={input.message}
                            onChange={handleChange}
                        />
                        <button type='submit' className={styles.inputButton}>
                            <AiOutlineArrowRight size={16.65} />
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.footer}>
                <h2 className="title">Socials</h2><br /><br />
                <div className={styles.socials}>
                    <Link style={{textDecoration: 'none', color: '#6D9886'}} href="https://www.linkedin.com/in/aakash-kasabekar-b36133202/"><FaLinkedinIn size={40} className={styles.link} /></Link>
                    <Link style={{textDecoration: 'none', color: '#6D9886'}} href="https://github.com/aakvshh"><FaGithub size={40} className={styles.link} /></Link>
                    <button style={{textDecoration: 'none', color: '#6D9886'}} onClick={handleMailButtonClick}><BiLogoGmail size={40} className={styles.link} /></button>
                    <Link style={{textDecoration: 'none', color: '#6D9886'}} href="https://www.youtube.com/@reelitar"><FaYoutube size={40} className={styles.link} /></Link>
                </div>
            </div>
        </div>

    </section>
  )
}
