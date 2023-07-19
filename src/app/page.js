// import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import { Hero } from "@/components/Home/Hero";
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
      <p className={styles.footertext}>Also, I have a Youtube Channel, <Link href="">visit here</Link></p>
      </div>
    </main>
  )
}
