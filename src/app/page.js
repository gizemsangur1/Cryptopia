import Image from 'next/image'
import styles from './page.module.css'
import First from './home/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <First/>
    </main>
  )
}
