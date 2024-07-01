import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Catalog.module.scss';
import { FilterHeading } from './FilterHeading';
import { ItemsBlock } from './ItemsBlock';
import { CSSProperties, ChangeEvent, useState } from 'react';
import { Pagination } from 'antd';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/catalogSlice/filters.slice';
import { useGetProductsQuery } from '../../store/api/productApi';

export const CatalogMain = () => {

  const { id } = useParams()
  const dispatch = useTypedDispatch()
  const { data: products } = useGetProductsQuery(null)
  const filters = useTypedSelector(state => state.filterSlice)
  const perpage: number = Number(filters[0].params[1]) - Number(filters[0].params[0])
  const [structureGrid, setStructureGrid] = useState<CSSProperties>({ gridTemplateColumns: 'repeat(5, 234px)' })
  const handleChangePage  = (e: ChangeEvent) => {
    dispatch(filterSlice.actions.handleFilter({ name: 'perPage', params: [(Number(e)-1) * perpage , Number(e) * perpage ] }))
  }

  return(
    <div className={styles.catalog__main}>
      <div className={styles.path}><Link to='/' className='font-bold text-sm'>Home</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='/' className='font-bold text-sm'>Catalog</Link> <span className='text-[#0156FF] px-1'>›</span> <Link to='#' className='font-bold text-sm'>{id && id.charAt(0).toUpperCase() + id.slice(1)}</Link></div>
      {id && <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>}
      <FilterHeading showGridProd={structureGrid} setShowGridProd={setStructureGrid} />
      <ItemsBlock showGridProd={structureGrid} type={id} />
      <Pagination
        className='mx-auto'
        total={products && products.length}
        showSizeChanger={false}
        onChange={(e) => handleChangePage(e)}
        pageSize={perpage}
      />
    </div>
  );
};

{/* <span className='text-[#0156FF] px-1'>›</span> <span className='font-bold text-sm text-[#A2A6B0] cursor-default'>MSI WS Series</span> */}