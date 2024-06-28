import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Catalog.module.scss';
import { FilterHeading } from './FilterHeading';
import { ItemsBlock } from './ItemsBlock';
import { CSSProperties, useState } from 'react';

export const CatalogMain = () => {

  const { id } = useParams()
  const [structureGrid, setStructureGrid] = useState<CSSProperties>({ gridTemplateColumns: '1170px' })
  // repeat(5, 234px)

  return(
    <div className={styles.catalog__main}>
      <div className={styles.path}><Link to='/' className='font-bold text-sm'>Home</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='/' className='font-bold text-sm'>Catalog</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='#' className='font-bold text-sm'>{id && id.charAt(0).toUpperCase() + id.slice(1)}</Link></div>
      {id && <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>}
      <FilterHeading showGridProd={structureGrid} setShowGridProd={setStructureGrid} />
      <ItemsBlock showGridProd={structureGrid} />
    </div>
  );
};

{/* <span className='text-[#0156FF] px-1'>›</span> <span className='font-bold text-sm text-[#A2A6B0] cursor-default'>MSI WS Series</span> */}