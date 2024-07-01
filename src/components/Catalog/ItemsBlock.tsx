import { CSSProperties, SetStateAction, useEffect } from 'react';
import styles from '../../styles/Catalog.module.scss';
import { useGetProductsQuery } from '../../store/api/productApi';
import { ProductCard } from '../ProductCard/ProductCard';
import { FilterBlock } from './FilterBlock';
import { ProductCardCatalog } from '../ProductCard/ProductCardCatalog';
import { IProduct } from '../../types/products.type';
import { useTypedSelector } from '../../hooks/redux';
import { filterProducts } from '../../constants/catalog.constants';

export const ItemsBlock = ({ showGridProd, type }: { showGridProd: CSSProperties, type: string }) => {

  const filters = useTypedSelector(state => state.filterSlice)
  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  let filteredProducts: IProduct[] = products && type !== 'other' ? products.filter(prod => prod.type === type) : products
  filters.map(filt => filteredProducts = filterProducts(filteredProducts, filt))

  useEffect(() => {
    const prodList = document.getElementsByClassName(styles.products__block)[0] as HTMLDivElement
    prodList.style.opacity = '0'
    setTimeout(() => {
      prodList.style.opacity = '100'
    }, 400);
  }, [showGridProd])

  return(
    <div className={styles.items__block}>
      {products && <FilterBlock products={products} />}
      <div className={styles.products__block}>
        <div className={styles.selected__filters}></div>
        <div style={ showGridProd } className={styles.products__list}>
          {isLoading ? (<div>Loading</div>) : (isSuccess && filteredProducts) ?  showGridProd.gridTemplateColumns === '1170px' ? 
          filteredProducts.slice(filters[0].params[0] as number, filters[0].params[1] as number).map((product, i) => {
            return <ProductCardCatalog prod={product} key={i} />
          }) : filteredProducts.slice(filters[0].params[0] as number, filters[0].params[1] as number).map((product, i) => {
            return <ProductCard styles={styles} prod={product} key={i} />
          }) : (<div>Not Found</div>)}
        </div>
      </div>
    </div>
  );
};
