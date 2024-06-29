import { Image } from 'antd';
import styles from '../../styles/Catalog.module.scss';
import { CSSProperties, ChangeEvent, Dispatch, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/catalogSlice/filters.slice';

export const FilterHeading = ({ showGridProd, setShowGridProd }: { showGridProd: CSSProperties; setShowGridProd: Dispatch<React.SetStateAction<CSSProperties>>}) => {
  
  const filter = useTypedSelector(state => state.filterSlice)
  const dispatch = useTypedDispatch()

  const handleChangePer = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectTag = e.target as HTMLSelectElement

    dispatch(filterSlice.actions.handleFilter({
      name: selectTag.name,
      params: [
        filter[0].params[0],
        (filter[0].params[1] - (filter[0].params[1] - filter[0].params[0])) + Number(selectTag.value)
      ]
    }))
  }

  return(
    <div className={styles.filter__heading}>
        <button><span className='text-center mr-[5px] text-sm'>{"‹"}</span>Back</button>
        <div className={styles.sorting__block}>
          <span>Items 1-35 of 61</span>
          <div className={styles.sorting__settings}>
            <select name="Pos">
              <option value="Position">Position</option>
              <option value="Position">Position</option>
              <option value="Position">Position</option>
            </select>
            <select onChange={(e) => handleChangePer(e)} name="perPage" className='mr-4'>
              <option value="20">20 per page</option>
              <option value="35">35 per page</option>
              <option value="50">50 per page</option>
            </select>
            <Image id='fiveElem' className={`translate-opacity duration-300 cursor-pointer ${showGridProd.gridTemplateColumns === '1170px' ? 'opacity-45' : 'opacity-100'}`} src='../../../public/grid_active.png' alt='Grid' preview={false} onClick={() => setShowGridProd({ gridTemplateColumns: 'repeat(5, 234px)' })} />
            <Image id='oneElem' className={`translate-opacity duration-300 cursor-pointer ${showGridProd.gridTemplateColumns === '1170px' ? 'opacity-100' : 'opacity-45'}`} src='../../../public/one_elem_active.png' alt='oneElem' preview={false} onClick={() => setShowGridProd({ gridTemplateColumns: '1170px' })} />
          </div>
        </div>
      </div>
  );
};
