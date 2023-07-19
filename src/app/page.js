// import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import { Hero } from "@/components/Home/Hero";
import { Skills } from "@/components/Skills/Skills";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </main>
  )
}
