import styles from "../../styles/Product.module.css"
import Image from "next/image";
import { useState } from "react";


const Product = () => {
    const [size, setSize] = useState(0);
    const kala = {
        id: 1,
        img: "/img/kala.png",
        name: "Kalankal",
        price: [90, 100],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={kala.img} layout="fill" alt="" objectFit="contain" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{kala.name}</h1>
                <span className={styles.price}>{kala.price[size]}kr</span>
                <p className={styles.desc}>{kala.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/plate2.png" layout="fill" alt=""/>
                        <span className={styles.number}>Small</span>
                    </div>

                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/plate2.png" layout="fill" alt=""/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.chosse}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="Mild"
                        name="Mild"
                        className={styles.checkbox}
                        ></input>
                        <label htmlFor="Mild">Extra Mild</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="Stark"
                        name="Stark"
                        className={styles.checkbox}
                        ></input>
                        <label htmlFor="Stark">Extra Stark</label>
                    </div>
                    {/* <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="double"
                        name="double"
                        className={styles.checkbox}
                        ></input>
                        <label htmlFor="double">Double Ingredients</label>
                    </div> */}
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;