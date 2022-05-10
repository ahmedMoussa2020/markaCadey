import Image from "next/image";
import styles from "../styles/Navbar.module.css"


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            
             {/* this div in the phone picture */}
            <div className={styles.callbutton}>
                <Image src="/img/smartphone.png" alt="" width="32" height="32" />
            </div>

            <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>0700604243</div>


            </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home </li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/Untitled_design__2_-removebg-preview.png" alt="" width="299" height="250px" />
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;