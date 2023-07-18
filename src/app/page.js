import Image from 'next/image'
import styles from './page.module.css'
import { getExperienceData } from '../../lib/mongo/data'

async function fetchExperienceData() {
  const {experience} = await getExperienceData()
  if (!experience) throw new Error('Failed to fetch data')

  return experience
}

export default async function Home() {

  const experience = await fetchExperienceData()


  return (
    <main className={styles.main}>
     <ul>
      {experience.map(value => (
        <li key={value._id}>{value.name}</li>
      ))}
     </ul>
    </main>
  )
}
