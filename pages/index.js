import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dexon List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage </h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt cupiditate illum architecto ipsa ad odio magni soluta odit totam molestias blanditiis nobis molestiae, vitae quam quidem? Aut, eaque molestias?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt cupiditate illum architecto ipsa ad odio magni soluta odit totam molestias blanditiis nobis molestiae, vitae quam quidem? Aut, eaque molestias?</p>
        <Link href="/ninjas" className={styles.btn}>Ninjas listings</Link>
      </div>
    </>

  )
}
