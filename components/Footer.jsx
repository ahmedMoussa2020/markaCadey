import Image from "next/image";
import styles from "../styles/Footer.module.css"

const Footer = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/marka.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Well servied, well cocked.
                    </h2>
                </div>

                <div className={styles.card}>
                    <h1 className={styles.title}> FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                    <br /> Persbergtorget 1C,
                    <br /> 213 61 Malmö, Sweden
                    <br /> 0700604243
                    </p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                 <p className={styles.text}>
                     MONDAY UNTIL SUNDAY
                     <br /> 11:00 - 22:00
                 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;