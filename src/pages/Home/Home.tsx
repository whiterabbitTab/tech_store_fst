import { Greeting } from "../../components/Greeting_block/Greeting";
import { NewProduct } from "../../components/NewProducts/NewProducts";
import styles from "../../styles/Home.module.scss"

export const Home = () => {

    return(
        <div className={styles.home__page}>
            <Greeting />
            <NewProduct />
        </div>
    );
};