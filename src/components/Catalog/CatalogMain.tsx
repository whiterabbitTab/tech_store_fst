import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Catalog.module.scss';
import { FilterHeading } from './FilterHeading';
import { ItemsBlock } from './ItemsBlock';

export const CatalogMain = () => {

  const { id } = useParams()

  return(
    <div className={styles.catalog__main}>
      <div className={styles.path}><Link to='/' className='font-bold text-sm'>Home</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='/' className='font-bold text-sm'>Catalog</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='#' className='font-bold text-sm'>{id?.charAt(0).toUpperCase() + id?.slice(1)}</Link></div>
      {id && <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>}
      <FilterHeading />
      <ItemsBlock />
    </div>
  );
};

{/* <span className='text-[#0156FF] px-1'>›</span> <span className='font-bold text-sm text-[#A2A6B0] cursor-default'>MSI WS Series</span> */}