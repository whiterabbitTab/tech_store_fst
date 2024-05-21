import { useGetProductsQuery } from '../../store/api/productApi'
import styles from '../../styles/Home.module.scss'
import { ProductCard } from '../ProductCard/ProductCard'


export const NewProduct = () => {

  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  const isNewProduct = (date: string) => {
    const date_now = new Date().getMonth()
    const date_product = new Date(date).getMonth()
    console.log(date_product, date_now)
    return date_now - date_product < 1
  }
  const newProducts = products?.filter((prod) => isNewProduct(prod.date_created))

  return (
    <div className={styles.new__products}>
      <h1>New Products</h1>
      <div className={styles.carousel__products}>
      {isLoading ? 'Loading' : isSuccess ? newProducts?.map((prod) => { //! здесь должна быть каруселька
        return (
          <ProductCard prod={prod} />
      )
    }) : 'Not found'}
      </div>
    </div>
  )
}