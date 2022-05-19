import Image from 'next/image';
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link';

const ProductCard = ({kala}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${kala._id}`} passHref>
            <Image src={kala.img}  alt="" width="500" height="500" />
            </Link>
            <h1 className={styles.title}>{kala.title}</h1>
            <span className={styles.price}>{kala.prices[0]}kr</span>
            <p className={styles.desc}>
                {kala.desc}
            </p>
        </div>
    );
};

export default ProductCard;