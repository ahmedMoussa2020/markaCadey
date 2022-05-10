import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'


    // This is the home/index page
    //  
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Somali food Restaurang in Malmo</title>
        <meta name="description" content="Best food in Malmo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/> 
    </div>
  )
}