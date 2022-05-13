import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Somali food Restaurang in Malmo</title>
        <meta name="description" content="Best food in Malmo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList/>
    </div>
  )
}