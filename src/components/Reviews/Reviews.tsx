import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.scss';
import { Carousel } from 'antd';
import { reviews } from '../../constants/reviewsHome.constants';

export const Reviews = ({ styles }: { styles: CSSModuleClasses }) => {
  return(
    <div className={styles.reviews__block}>
      <Carousel autoplay className='flex flex-col justify-center max-w-[922px] max-h-[205px] items-end gap-x-[26px]'>
          {reviews.map((review) => {
              return (
                <div key={review.author} className='flex flex-col max-w-[922px] max-h-[205px] gap-x-[26px]'>
                  <div className={styles.card__review}>
                    <span className='font-normal text-[96px] select-none'>‘’</span>
                    <p className='font-normal text-lg'>{review.text}</p>
                  </div>
                  <span className='font-normal text-base float-end'>- {review.author}</span>
                </div>
              )
          })}
      </Carousel>
      <Link to='#'>Leave Us A Review</Link>
    </div>
  );
};
