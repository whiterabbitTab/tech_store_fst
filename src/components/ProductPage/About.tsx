import { Link } from 'react-router-dom';
import styles from '../../styles/ProductPage.module.scss'
import { IAboutPage } from '../../types/productCard.type';
import { HeadingProduct } from './HeadingProduct';
import { ProductImage } from './ProductImage';

export const About = ({ about }: { about: IAboutPage }) => {

  return(
    <div className={styles.about__block}>
      <div className={styles.product__block}>
        <div className={styles.product__info}>
          <div className='flex justify-between flex-col pr-12 h-[90%]'>
            <div className='flex justify-center flex-col gap-y-6'>
              <HeadingProduct name={about.name} />
              <p className='max-w-[567px] font-normal text-lg'>{about.description}</p>
              <div className='flex gap-x-3'>
                {about.colors.map((color: string, i) => {
                  return <input key={i} id={color} style={{ backgroundColor: color }} className={`checked:outline-white checked:border-white size-[31px] rounded-full border-2 border-white cursor-pointer`}></input> // я так поставил, потому что bg-[${color}] не работает (((
                })}
              </div>
              <div className='flex justify-between w-[567px] mb-12'><p className='font-semibold text-base'>Have a Question?<Link to='#' className='text-[#0156FF] text-base ml-3 underline'>Contact Us</Link></p><p className='font-normal text-sm'>SKU D5515AI</p></div>
            </div>
            <Link className='font-bold text-base -translate-x-8' to='#'>+ MORE INFORMATION</Link>
          </div>
        </div>
        <ProductImage images={about.image_about} />
      </div>
    </div>
  );
};