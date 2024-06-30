import styles from '../../styles/Catalog.module.scss';
import { brands, colors, filterItems } from '../../constants/catalog.constants';
import { FilterMenuItems } from './FilterMenuItems';
import { MouseEvent, useState } from 'react';
import { Image } from 'antd';
import { useTypedDispatch } from '../../hooks/redux';
import { filterSlice } from '../../store/catalogSlice/filters.slice';

export const FilterBlock = () => {

  const [color, setColor] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const dispatch = useTypedDispatch()

  const handleAddColor = (e: MouseEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement
    color.includes(div.style.backgroundColor) === false ? setColor([...color, div.style.backgroundColor]) : setColor(color.filter(clr => clr !== div.style.backgroundColor))
    dispatch(filterSlice.actions.handleFilter({ name: 'colors', params: color }))
  }

  const clearFilter = () => {
    ['category','brands','colors','price'].map(filt => dispatch(filterSlice.actions.handleFilter({ name: filt, params: [] })))
  }

  const handleAddMaker = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.target as HTMLImageElement
    images.includes(img.getAttribute('alt') as string) === false ? setImages([...images, img.getAttribute('alt') as string]) : setImages(images.filter(image => image !== img.getAttribute('alt')))
    dispatch(filterSlice.actions.handleFilter({ name: 'brands', params: images }))
  }

  return (
    <div className={styles.filters__block}>
      <h1>Filters</h1>
      <button onClick={() => clearFilter()}>Clear Filter</button>
      <div className={styles.filters}>
        <div className={styles.filter__menu}>
          {filterItems.map((filter) => {
            return <FilterMenuItems elements={filter.elements} heading={filter.heading} type={filter.type} key={filter.type} />
          })}
          <div className={styles.colors__filter}>
            <h1>Colors</h1>
            <div className={styles.colors}>
              {colors.map((color) => {
                return <div key={color} onClick={(e) => handleAddColor(e)} style={{ backgroundColor: color }} className="transition-all duration-200 hover:scale-105 size-5 rounded-full cursor-pointer p-1"></div>
              })}
            </div>
          </div>
          <div className={styles.brands__filter}>
            <h1>Brands</h1>
            <button onClick={() => dispatch(filterSlice.actions.handleFilter({ name: 'brands', params: brands }))}>All Brands</button>
            <div className={styles.brands}>
              {brands.map((brand) => {
                return <Image key={brand} onClick={(e) => handleAddMaker(e)} src={`../../../public/${brand}_logo_home.png`} alt={brand} preview={false} />
              })}
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-6 py-4 mt-8 px-1 bg-[#F5F7FF]'>
            <h1 className='font-bold text-base'>Compare Products</h1>
            <div className='flex flex-col gap-y-1 items-center w-full'>
              <p className='font-medium text-[13px]'>You have no items to compare</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-6 py-4 px-1 bg-[#F5F7FF]'>
            <h1 className='font-bold text-base'>My Wish List</h1>
            <div className='flex flex-col gap-y-1 items-center w-full'>
              <p className='font-medium text-[13px]'>You have no item in your wish list</p>
            </div>
          </div>
          <Image src='../../../public/catalog_filter_image.png' alt='catalog' preview={false} className='mt-5'  />
        </div>
      </div>
    </div>
  );
};