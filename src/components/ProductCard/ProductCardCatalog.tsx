import { Image } from 'antd';
import styles from '../../styles/Catalog.module.scss';
import { IProduct } from '../../types/products.type';
import { MouseEvent, ReactNode } from 'react';

export const ProductCardCatalog = ({ prod }: { prod: IProduct }) => {

  const reviews: ReactNode[] = []
  for (let i = 0; i < 5; i++) {
    reviews.push(<Image key={i} src={`../../../public/review_${i < prod.reviews ? '' : 'not'}star_icon.png`} alt={i < prod.reviews ? 'Review Star' : 'Not Review Star'} width={13} height={13} preview={false} />)
  }

  return(
    <div className={styles.product__card__large}>
      <div className={styles.product__image}>
        <Image src={prod.image} alt={prod.name} width={250} height={250} preview={false} />
        <div className={styles.product__rate}>
          {reviews.map((review) => {
            return review
          })}
          <span className='ml-2 font-normal text-base text-[#A2A6B0]'>Reviews ({prod.reviews})</span>
        </div>
      </div>
      <div className={styles.product__info}>
        <h3 className='font-normal text-sm'>{prod.maker}</h3>
        <div className={styles.main__info}>
          <div className={styles.prod__about}>
            <p className={styles.product__name}>{prod.description}</p>
            <div className={styles.price}>
              {prod.discount !== 0 ? (<><span className={styles.price}>{`${(prod.price * ((100-prod.discount)/100)).toFixed(2)}$`}</span><span className={styles.prev__price}><div />{`${prod.price}$`}</span></>) : (<span className={styles.price}>{`${prod.price}$`}</span>)}
            </div>
          </div>
          <div className={styles.specs__info}>
            <div><span>CPU</span><span>{prod.specs.cpu}</span></div>
            <div><span>Featured</span><span>{prod.specs.featured}</span></div>
            <div><span>I/O Ports</span><span>{prod.specs.io_ports}</span></div>
          </div>
        </div>
        <button className={styles.add__product__btn}><Image src='../../../public/basket_btn.svg' alt='Add to Cart' preview={false} width={21} height={19} /> <p>Add To Cart</p> <Image src='../../../public/arrow_catalog_right.png' alt='Arrow Right' width={25} preview={false} /></button>
      </div>
      <div className='flex flex-col h-full justify-between items-end'>
        <span className={`flex items-center gap-x-2 font-normal text-sm ${prod.status === 'in_stock' ? 'text-green-500' : 'text-red-500'}`}>
          <Image src={`../../../public/${prod.status}_icon.png`} alt={prod.status.replace('_', ' ')} preview={false} width={12} height={12}/>
          {prod.status.replace('_', ' ')}
        </span>
        <div className='flex gap-x-3 items-center'>
          <Image src='../../public/like.png' alt='Like icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
          <Image src='../../public/graph.png' alt='Graph icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
          <Image src='../../public/message.png' alt='Message icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
