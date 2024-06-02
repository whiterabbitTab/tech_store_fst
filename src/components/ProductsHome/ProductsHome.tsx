import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/Home.module.scss';
import { ICarouselProducts } from '../../types/productsCarousel.type';
import { Carousel } from '../Carousel/Carousel';

export const ProductsHome = ({ carousel }: { carousel: ICarouselProducts }) => {

  return(
    <div className={styles.carousels} style={{ marginBottom: `${carousel.filters ? '31px' : '0px'}` }}>
      {carousel.filters && 
        <div className={styles.filters}>
          {carousel.filters.map((filter) => {
            return <NavLink className={({ isActive }) => isActive ? `${styles.filter} ${styles.filter__active}` : `${styles.filter}`} to='#'>{filter}</NavLink>
          })}
        </div>
      }
      <div className={styles.products__list}>
        <div style={{ background: `url(${carousel.background})` }} className={styles.preview}>
          <div className='flex flex-col justify-between h-1/2 mb-8 text-white'>
            <h1 className='font-bold text-[22px] w-[106px] text-center'>{carousel.name}</h1>
            <Link to='#' className='transition-colors duration-200 hover:text-blue-400 underline underline-offset-4 text-[13px]'>See All Products</Link>
          </div>
        </div>
        <Carousel products={carousel.product} count={6} /> 
      </div>
    </div>
  );
};