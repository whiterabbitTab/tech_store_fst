import { Link } from 'react-router-dom';
import styles from '../../styles/ProductPage.module.scss';

export const HeadingProduct = ({ name }: { name: string }) => {
  return(
    <>
      <div className={styles.path}><Link to='/' className='font-bold text-sm'>Home</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='#' className='font-bold text-sm'>Laptops</Link> <span className='text-[#0156FF] px-1'>›</span> <span className='font-bold text-sm text-[#A2A6B0] cursor-default'>MSI WS Series</span></div>
      <h1 className='font-bold text-[32px]'>{name}</h1>
      <Link to='#' className='text-[#0156FF]'>Be the first to review this product</Link>
    </>
  );
};
