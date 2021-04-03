import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Refugeeks | Home</title>
        <meta name="keywords" content="refugeeks" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis officiis hic, minus voluptas exercitationem, velit consequatur omnis aliquam eum ea, officia ipsam illum! Nulla minima, mollitia debitis ut at odit?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil repellat molestiae quia deleniti est, beatae, eius expedita inventore illum officiis corrupti, quaerat vel. Tempora qui laboriosam expedita porro cumque?</p>
        <Link href="/refugeeks">
          <a className={styles.btn}>See Refugeeks</a>
        </Link>
      </div>
    </>
  )
}
