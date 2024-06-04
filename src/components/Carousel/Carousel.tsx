import { Image } from 'antd';
import styles from '../../styles/Home.module.scss'
import { IProduct } from '../../types/products.type';
import { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export const Carousel = ({ products, count, filter }: { products: IProduct[], count: number, filter?: string }) => {

  const [translate, setTranslate] = useState<number>(0)
  const [countProd, setCountProd] = useState<number>(0)
  const length_products: number = products && products.length - count

  const nextProd = () => {
    setCountProd(countProd + 1)
    if (countProd <= length_products) setTranslate(translate - 234)
  }

  const backProd = () => {
    setCountProd(countProd - 1)
    if (countProd >= 1) setTranslate(translate + 234)
    }
    const filtered_products = filter ? products.filter((product) => product.maker === filter) : []

  return(
    <div className={styles.carousel__products}>
      <button style={{ display: `${countProd === 0 ? 'none' : 'flex'}` }} className={styles.arrow__left} onClick={backProd}>
        <Image src='../../public/arrow_left_carousel.png' alt='left' width={5} height={10} preview={false} />
      </button>
      <div id='carousel' className={styles.carousel} style={{ transform: `translateX(${translate}px)` }}>
        {filter ? filtered_products.map((card, i) => {
          return <ProductCard key={i} prod={card} />
        }) : products.map((card, i) => {
          return <ProductCard key={i} prod={card} />
        })}
      </div>
      <button style={{ display: `${countProd === length_products + 1 ? 'none' : 'flex'}` }} className={styles.arrow__right} onClick={nextProd}>
        <Image src='../../public/arrow_right_carousel.png' alt='left' width={5} height={10} preview={false} />
      </button>
    </div>
  );
};
