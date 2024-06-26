import { DOMAttributes, MouseEvent, useState } from 'react';
import styles from '../../styles/Catalog.module.scss';
import { Image } from 'antd';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/catalogSlice/filters.slice';
import { IProduct } from '../../types/products.type';

export interface IFilterMenu {
  heading: string;
  elements: { 
    type: string;
    name: string;
  }[];
  type: string;
  products: IProduct[]
}

export const FilterMenuItems = ({ heading, elements, type, products }: IFilterMenu) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const filters = useTypedSelector(state => state.filterSlice)
  const dispatch = useTypedDispatch()

  const handleChangeFilter = (e: MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement
    const value = li.getAttribute('data-value') as string
    li.style.color === 'black' ? li.style.color = '#7b7d85' : li.style.color = 'black'
    let oldFilters: string[] = filters.filter(filt => filt.name === type)[0].params as string[]
    oldFilters.includes(value) === true ? oldFilters = oldFilters.filter(filt => filt !== li.getAttribute('data-value')) : oldFilters = [...oldFilters, value]
    dispatch(filterSlice.actions.handleFilter({ name: type, params: oldFilters }))
  }

  const handleDrop = (e: MouseEvent<HTMLHeadingElement>, id: DOMAttributes<HTMLHeadingElement>) => {
    const heading = e.target as HTMLHeadingElement
    const list = document.getElementById(String(id)) as HTMLUListElement
    const arrow = heading.querySelector('img') as HTMLImageElement

    arrow.style.transform === '' || arrow.style.transform === 'rotate(360deg)' ? arrow.style.transform = 'rotate(180deg)' : arrow.style.transform = 'rotate(360deg)'
    setIsOpen(!isOpen)
    isOpen === false ? list.style.opacity = '0' : list.style.opacity = '100'
    isOpen === false ? list.style.display = 'none' : list.style.display = 'block'
  }

  return(
    <div className={styles.filter}>
      <h1 onClick={(e: MouseEvent<HTMLHeadingElement>, id: DOMAttributes<HTMLHeadingElement>) => handleDrop(e, heading)} style={{ position: 'relative', zIndex: '1' }} className='transition-all duration-200 select-none items-center py-3 cursor-pointer flex justify-between w-full font-semibold text-lg'>{heading}<Image style={{ rotate: '180deg', position: 'relative', zIndex: '-1' }} src='../../../public/arrow_down_icon.png' alt='Arrow Down' width={12} height={12} preview={false} /></h1>
      <ul id={heading}>
        {elements.map((elem, i) => {
          console.log(elem)
          return <li key={i} onClick={(e) => handleChangeFilter(e)} data-value={elem.type}>{elem.name}<span>
            {
              type === 'price' ? 
              products.filter(prod => Number(elem.type.split('-')[0]) < prod[type as keyof object] && prod[type as keyof object] < Number(elem.type.split('-')[1])).length : 
              products.filter(prod => prod[type as keyof object] === elem.type).length 
            }
            </span></li>
        })}
      </ul>
    </div>
  );
};
