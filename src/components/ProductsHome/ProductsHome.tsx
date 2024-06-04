import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/Home.module.scss';
import { ICarouselProducts } from '../../types/productsCarousel.type';
import { Carousel } from '../Carousel/Carousel';
import { MouseEvent, useState } from 'react';

export const ProductsHome = ({ carousel }: { carousel: ICarouselProducts }) => {

  const [filt, setFilter] = carousel.filters ? useState<string>(carousel.filters[0]) : useState<undefined>(undefined)
  const handleChangeFilter = (e: MouseEvent) => {
    const button = e.target as HTMLButtonElement
    filt && setFilter(button.id)
  }
  const filtered_carousel = filt ? {
    background: carousel.background,
    name: carousel.name,
    filters: carousel.filters,
    product: carousel.product.filter((prod) => prod.maker === filt)
  } : undefined

  return(
    <div className={styles.carousels} style={{ marginBottom: `${carousel.filters ? '31px' : '0px'}` }}>
      {carousel.filters && 
        <div className={styles.filters}>
          {carousel.filters.map((filter, i) => {
            return <button onClick={(e) => handleChangeFilter(e)} id={filter} key={i} className={filter === filt ? `${styles.filter} ${styles.filter__active}` : `${styles.filter}`}>{filter}</button>
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
        {filtered_carousel ? <Carousel filter={filt} products={filtered_carousel.product} count={6} /> : <Carousel products={carousel.product} count={6} /> }
      </div>
    </div>
  );
};