import { Link } from 'react-router-dom';
import styles from '../../styles/ProductPage.module.scss'
import { ISpecsPage } from '../../types/productCard.type';
import { HeadingProduct } from './HeadingProduct';
import { ProductImage } from './ProductImage';

export const Specs = ({ specs }: { specs: ISpecsPage }) => {
  return(
    <div className={styles.specs__block}>
      <div className={styles.product__block}>
        <div className={styles.product__info}>
          <div className='flex justify-between flex-col pr-12 h-[90%]'>
            <div className='flex justify-center flex-col gap-y-6'>
              <HeadingProduct name={specs.name} />
              <div className='border border-[#666666] border-opacity-35'>
                <div className='flex items-center justify-between px-4 py-4 bg-white'><span>CPU</span><span className='w-1/2'>{specs.specs.cpu}</span></div>
                <div className='flex items-center justify-between px-4 py-4'><span>Featured</span><span className='w-1/2'>{specs.specs.featured}</span></div>
                <div className='flex items-center justify-between px-4 py-4 bg-white'><span>I/O Ports</span><span className='w-1/2'>{specs.specs.io_ports}</span></div>
              </div>
              <div className='flex justify-between mb-12 w-[567px]'><p className='font-semibold text-base'>Have a Question?<Link to='#' className='text-[#0156FF] text-base ml-3 underline'>Contact Us</Link></p><p className='font-normal text-sm'>SKU D5515AI</p></div>
            </div>
            <Link className='font-bold text-base -translate-x-8' to='#'>+ MORE INFORMATION</Link>
          </div>
        </div>
        <ProductImage images={specs.image_about} />
      </div>
    </div>
  );
};
