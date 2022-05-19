import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home({kalaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Somali food Restaurang in Malmo</title>
        <meta name="description" content="Best food in Malmo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList kalaList={kalaList} />
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      kalaList: res.data,
    },
  };
};