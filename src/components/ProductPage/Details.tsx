import { Link } from 'react-router-dom';
import styles from '../../styles/ProductPage.module.scss'
import { IDetailsPage } from '../../types/productCard.type';
import { HeadingProduct } from './HeadingProduct';
import { ProductImage } from './ProductImage';

export const Details = ({ info }: { info: IDetailsPage }) => {
  return(
    <div className={styles.details__block}>
      <div className={styles.product__block}>
        <div className={styles.product__info}>
          <div className='flex justify-between flex-col pr-12 h-[90%]'>
            <div className='flex justify-center flex-col gap-y-6'>
              <HeadingProduct name={info.name} />
              <ul className={styles.list__details}>
                {info.details.map((detail, i) => {
                  return <li key={i} className='font-normal text-sm' key={detail}>{detail}</li>
                })}
              </ul>
              <div className='flex justify-between mb-12 w-[567px]'><p className='font-semibold text-base'>Have a Question?<Link to='#' className='text-[#0156FF] text-base ml-3 underline'>Contact Us</Link></p><p className='font-normal text-sm'>SKU D5515AI</p></div>
            </div>
            <Link className='font-bold text-base -translate-x-8' to='#'>+ MORE INFORMATION</Link>
          </div>
        </div>
        <ProductImage images={info.image_about} />
      </div>
    </div>
  );
};
