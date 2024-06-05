import Button from "./Button.jsx"
import styles from "../Navbar/Navbar.module.css"


const Navbar = ({label}) => {
    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>E Commerce</h1>
            <section >
                <Button label={"Samsung"}  />
                <Button label={"iPhone"}  />
                <Button label={"Huawei"} />
            </section>
        </header>
    )
 
}
export default Navbar