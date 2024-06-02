import { Carousel, Image } from 'antd';
import styles from '../../styles/ProductPage.module.scss';

export const ProductImage = ({ images }: { images: string[] }) => {
  return(
    <div className={styles.product__logo}>
      <div className='flex items-center justify-start gap-x-[54px]'>
        <div className='flex flex-col gap-y-2 items-center'>
          <Image src='../../public/like.png' alt='Like icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
          <Image src='../../public/graph.png' alt='Graph icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
          <Image src='../../public/message.png' alt='Message icon' width={30} height={30} preview={false} className='transition-all duration-200 hover:opacity-60 cursor-pointer' />
        </div>
        <Carousel autoplay className={styles.change_carousel}>
          <Image src={images[0]} alt='Image' width={255} height={444} preview={false}/>
          <Image src={images[1]} alt='Image' width={255} height={444} preview={false}/>
          <Image src={images[2]} alt='Image' width={255} height={444} preview={false}/>
        </Carousel>
      </div>
      <div className='flex w-1/2 justify-center items-center'>
        <Image src='../../public/zip_text.png' alt='Zip text' width={263} height={28} preview={false} />
      </div>
    </div>
  );
};
