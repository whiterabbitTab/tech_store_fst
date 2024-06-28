import { CSSProperties, useEffect } from 'react';
import styles from '../../styles/Catalog.module.scss';
import { useGetProductsQuery } from '../../store/api/productApi';
import { ProductCard } from '../ProductCard/ProductCard';
import { FilterBlock } from './FilterBlock';
import { ProductCardCatalog } from '../ProductCard/ProductCardCatalog';

export const ItemsBlock = ({ showGridProd }: { showGridProd: CSSProperties }) => {

  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  console.log(showGridProd)

  useEffect(() => {
    const prodList = document.getElementsByClassName(styles.products__block)[0] as HTMLDivElement
    prodList.style.opacity = '0'
    setTimeout(() => {
      prodList.style.opacity = '100'
    }, 400);
  }, [showGridProd])

  return(
    <div className={styles.items__block}>
      <FilterBlock />
      <div className={styles.products__block}>
        <div className={styles.selected__filters}></div>
        <div style={ showGridProd } className={styles.products__list}>
          {isLoading ? (<div>Loading</div>) : isSuccess ?  showGridProd.gridTemplateColumns === '1170px' ? 
          products.map((product, i) => {
            return <ProductCardCatalog prod={product} key={i} />
          }) : products.map((product, i) => {
            return <ProductCard styles={styles} prod={product} key={i} />
          }) : (<div>Not Found</div>)}
        </div>
      </div>
    </div>
  );
};
