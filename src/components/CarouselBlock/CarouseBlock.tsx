import { Image } from 'antd';
import styles from '../../styles/ProductPage.module.scss'

export const CarouselBlock = ({ bg, text, heading, remark }: {bg: string, text: string, heading: string, remark: string}) => {
  
  return(
    <div className={styles.block} style={{ background: `url(${bg}) center center no-repeat` }}>
      <div className='w-[465px] h-345px] flex flex-col gap-y-14'>
        <h1 className='font-medium text-[44px]'>{heading}</h1>
        <div className='flex flex-col gap-y-5'>
          <p className='text-[18px] font-light'>{text}</p>
          <p className='text-[18px] font-light'>{remark}</p>
        </div>
      </div>
    </div>
  );
};
