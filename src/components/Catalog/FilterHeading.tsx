import { Image } from 'antd';
import styles from '../../styles/Catalog.module.scss';

export const FilterHeading = () => {
  return(
    <div className={styles.filter__heading}>
        <button><span className='text-center mr-[5px] text-sm'>{"‹"}</span>Back</button>
        <div className={styles.sorting__block}>
          <span>Items 1-35 of 61</span>
          <div className={styles.sorting__settings}>
            <select name="perPage">
              <option value="Position">Position</option>
              <option value="Position">Position</option>
              <option value="Position">Position</option>
            </select>
            <select name="perPage" className='mr-4'>
              <option value="20">20 per page</option>
              <option value="35">35 per page</option>
              <option value="50">50 per page</option>
            </select>
            <Image className='cursor-pointer' src='../../../public/grid_active.png' alt='Grid' preview={false} />
            <Image className='cursor-pointer' src='../../../public/one_elem.png' alt='oneElem' preview={false} />
          </div>
        </div>
      </div>
  );
};
