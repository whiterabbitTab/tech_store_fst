import { useGetProductsQuery } from '../../store/api/productApi'
import styles from '../../styles/Home.module.scss'
import { IProduct } from '../../types/products.type'
import { Carousel } from '../Carousel/Carousel'


export const NewProduct = () => {
  
  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  const isNewProduct = (date: string) => {
    const date_now = new Date().getDate()
    const date_product = new Date(date).getDate()
    return date_now <= date_product
  }
  const newProducts: IProduct[] = products && products.filter((prod) => isNewProduct(prod.date_created))

  return (
    <div className={styles.new__products}>
      <h1>New Products</h1>
      <div className={styles.carousel__products}>
      {isLoading ? 'Loading' : newProducts ? <Carousel products={products} count={7} /> : 'Not found'}
      </div>
    </div>
  )
}