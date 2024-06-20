import { Image } from 'antd';
import styles from '../../styles/Basket.module.scss';
import { MouseEvent, ReactNode, useState } from 'react';

export const MenuItems = ({ heading, elements, id }: { heading: string, elements: string[] | ReactNode[], id: number | string }) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleDrop = (e: MouseEvent<HTMLHeadingElement>) => {
    const heading = e.target as HTMLHeadingElement
    const list = document.getElementById(String(id)) as HTMLUListElement
    const arrow = heading.querySelector('img') as HTMLImageElement

    arrow.style.transform === '' || arrow.style.transform === 'rotate(360deg)' ? arrow.style.transform = 'rotate(180deg)' : arrow.style.transform = 'rotate(360deg)'
    setIsOpen(!isOpen)
    isOpen === false ? list.style.display = 'none' : list.style.display = 'block'
  }

  return(
    <div className={styles.menu__items}>
      <h1 style={{ position: 'relative', zIndex: '1' }} className='transition-all duration-200 select-none items-center py-3 cursor-pointer flex justify-between w-full font-medium text-base' onClick={handleDrop}>{heading}<Image style={{ rotate: '180deg', position: 'relative', zIndex: '-1' }} src='../../../public/arrow_down_icon.png' alt='Arrow Down' width={12} height={12} preview={false} /> </h1>
      <ul id={String(id)}>
        {elements.map((elem, i) => {
          return <li key={i}>{elem}</li>
        })}
      </ul>
    </div>
  );
};
