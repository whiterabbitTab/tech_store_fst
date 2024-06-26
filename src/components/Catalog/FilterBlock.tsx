import styles from '../../styles/Catalog.module.scss';
import { brands, colors, filterItems } from '../../constants/catalog.constants';
import { FilterMenuItems } from './FilterMenuItems';
import { MouseEvent, useState } from 'react';
import { Image } from 'antd';

export const FilterBlock = () => {

  const [color, setColor] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])

  const handleAddColor = (e: MouseEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement
    color.includes(div.style.backgroundColor) === false ? setColor([...color, div.style.backgroundColor]) : setColor(color.filter(clr => clr !== div.style.backgroundColor))
  }
  const handleAddMaker = (e: MouseEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement
    images.includes(img.getAttribute('alt') as string) === false ? setImages([...images, img.getAttribute('alt') as string]) : setImages(images.filter(image => image !== img.getAttribute('alt')))
  }

  return (
    <div className={styles.filters__block}>
      <h1>Filters</h1>
      <button>Clear Filter</button>
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
            <button onClick={() => setImages(brands)}>All Brands</button>
            <div className={styles.brands}>
              {brands.map((brand) => {
                return <Image key={brand} onClick={(e) => handleAddMaker(e)} src={`../../../public/${brand}_logo_home.png`} alt={brand} preview={false} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};