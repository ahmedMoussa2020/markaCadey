import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard";

const ProductList = ({kalaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> BEST FOOD IN MALMÖ</h1>

            <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>


            <div className={styles.wrapper}>
                {kalaList.map((kala) => (
                    <ProductCard key={kala._id} kala={kala} />
                ))}
            </div>
        </div>


    );
};

export default ProductList