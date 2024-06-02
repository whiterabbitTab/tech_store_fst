import { Image } from "antd";
import { Greeting } from "../../components/Greeting_block/Greeting";
import { NewProduct } from "../../components/NewProducts/NewProducts";
import styles from "../../styles/Home.module.scss"
import { ProductsCarousels } from "../../components/ProductsHome/ProductsCarousels";
import { HomeLogotypes } from "../../components/HomeLogotypes/HomeLogotypes";

export const Home = () => {

    return(
        <div className={styles.home__page}>
            <Greeting />
            <NewProduct />
            <Image src="../../../public/zip_home.png" alt="Zip Home" preview={false} />
            <ProductsCarousels />
            <HomeLogotypes />
        </div>
    );
};