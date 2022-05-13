import Image from 'next/image';
import styles from '../styles/ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/kala.png"  alt="" width="500" height="500" />
            <h1 className={styles.title}>Kalankal</h1>
            <span className={styles.price}>90kr</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.fuga?
            </p>
        </div>
    );
};

export default ProductCard;