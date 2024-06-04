import styles from '../../styles/Home.module.scss'
import { socialCards } from '../../constants/home_social_cards.constants';
import { Image } from 'antd';

export const SocialCards = () => {
  return(
    <div className={styles.social__cards}>
      {socialCards.map((card, i) => {
        return (
          <div key={i} className={styles.card}>
            <Image src={`${card.image}`} alt='SocialCard' width={225} height={151} preview={false} className='rounded-md' />
            <p>{card.text}</p>
            <span>{`${new Date(card.date).getDate()}.${new Date(card.date).getMonth()}.${new Date(card.date).getFullYear()}`}</span>
          </div>
        )
      })}
    </div>
  );
};
