// import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import { Hero } from "@/components/Hero/Hero";
import { Skills } from "@/components/Skills/Skills";
import styles from './page.module.css'
import Link from "next/link";
import { Navbar } from "@/components/Navbar/Navbar";


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />

      <div className={styles.footer}>
      <p className={styles.footertext}><b>Also, I have a Youtube Channel, <Link href="https://www.youtube.com/@reelitar" className={styles.link}>visit here</Link></b></p>
      </div>
    </main>
  )
}
