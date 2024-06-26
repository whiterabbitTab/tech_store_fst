import { CSSProperties, useEffect, useState } from 'react';
import styles from '../../styles/Catalog.module.scss';
import { useGetProductsQuery } from '../../store/api/productApi';
import { ProductCard } from '../ProductCard/ProductCard';
import { FilterBlock } from './FilterBlock';

export const ItemsBlock = () => {

  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  const [prodListStyle, setProdListStyle] = useState<CSSProperties>()
  const [showGridProd, setShowGridProd] = useState<boolean>(true)

  useEffect(() => {
    if (showGridProd === true) {
      setProdListStyle({ display: "grid", gridTemplateColumns: 'repeat(5, 234px)' })
    }
  }, [showGridProd])

  return(
    <div className={styles.items__block}>
      <FilterBlock />
      <div className={styles.products__block}>
        <div className={styles.selected__filters}></div>
        <div style={ prodListStyle } className={styles.products__list}>
          {isLoading ? (<div>Loading</div>) : isSuccess ? products.map((product, i) => {
            return <ProductCard styles={styles} prod={product} key={i} />
          }) : (<div>Not Found</div>)}
        </div>
      </div>
    </div>
  );
};
