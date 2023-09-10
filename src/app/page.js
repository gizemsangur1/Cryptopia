import Image from 'next/image'
import styles from './page.module.css'
import First from './home/page'
import ChooseUs from './chooseus/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <First/>
      <ChooseUs/>
    </main>
  )
}
