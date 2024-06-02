import { Image } from 'antd';
import styles from '../../styles/ProductPage.module.scss';

export const CardsProduct = ({ image, text }: {image: string, text: JSX.Element}) => {
  return(
    <div className={styles.card}>
      <Image src={image} alt='Xyu' preview={false} width={136} height={136}/>
      {text}
    </div>
  );
};
