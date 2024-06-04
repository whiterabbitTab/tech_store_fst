import styles from '../../styles/Home.module.scss';
import { useGetProductsQuery } from '../../store/api/productApi';
import { IProduct } from '../../types/products.type';
import { ICarouselProducts } from '../../types/productsCarousel.type';
import { ProductsHome } from './ProductsHome';

export const ProductsCarousels = () => {

  const { data: products, isLoading, isSuccess } = useGetProductsQuery(null)
  const custom_products: IProduct[] | undefined = products?.filter((prod) => prod.type === 'custom' && prod.status === 'in_stock')
  const msi_products: IProduct[] | undefined = products?.filter((prod) => prod.name.includes('MSI') && prod.status === 'in_stock')
  const desktop_products: IProduct[] | undefined = products?.filter((prod) => prod.type === 'desktop' && prod.status === 'in_stock')
  const monitors_products: IProduct[] | undefined = products?.filter((prod) => prod.type === 'monitor' && prod.status === 'in_stock')

  const custom_carousel: ICarouselProducts[] | undefined = custom_products && [
      {
          product: custom_products,
          background: '../../../public/cust_builds_bg.png',
          name: 'Custome Builds'
      },
      {
          product: msi_products,
          background: '../../public/msi_bg.png',
          name: 'MSI Laptops',
          filters: ['MSI GS Series', 'MSI GT Series', 'MSI GL Series', 'MSI GE Series']
      },
      {
          product: desktop_products,
          background: '../../public/desktops_bg.png',
          name: 'Desktops',
          filters: ['MSI Infinute Series', 'MSI Triden', 'MSI GL Series', 'MSI Nightblade']
      },
      {
          product: monitors_products,
          background: '../../public/monitors_bg.png',
          name: 'Gaming Monitors'
      }
  ]

  return(
    <>
      {
        isLoading ? "Loading" : isSuccess ? custom_carousel?.map((carousel, i) => {
          return <ProductsHome key={i} carousel={carousel} />
        }) : 'Not found'
      }
    </>
  );
};
